"""Public API — health check + consultation form relay."""
from __future__ import annotations

from typing import Annotated

from fastapi import APIRouter, Depends, HTTPException, status

from app.email import send_consultation
from app.ratelimit import rate_limit
from app.schemas import ConsultationIn
from app.security import verify_origin

router = APIRouter()


@router.get("/healthz")
async def healthz() -> dict[str, str]:
    return {"status": "ok"}


@router.post("/api/consultation", dependencies=[Depends(verify_origin)])
async def consultation(
    body: ConsultationIn,
    _rl: Annotated[None, Depends(rate_limit("consultation", limit=5, window_seconds=3600))],
) -> dict[str, bool]:
    """Relay a consultation request to the owner's inbox. No persistence —
    a delivery failure is reported back as 502 so the visitor knows."""
    try:
        await send_consultation(
            name=body.name,
            email=str(body.email),
            company=body.company or "",
            service_interest=body.service_interest,
            message=body.message,
        )
    except RuntimeError:
        raise HTTPException(
            status.HTTP_502_BAD_GATEWAY, detail="message_not_delivered"
        ) from None
    return {"ok": True}
