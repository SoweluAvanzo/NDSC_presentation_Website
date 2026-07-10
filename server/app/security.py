"""CSRF origin check for state-changing requests."""
from __future__ import annotations

from fastapi import HTTPException, Request, status

from app.settings import get_settings


def verify_origin(request: Request) -> None:
    """Reject a state-changing request whose Origin is not allow-listed.

    A browser always sends Origin on cross-origin POST/fetch; if it is
    present it must be one of ours. Absent Origin (non-browser clients) is
    allowed — there is no authenticated state to protect here, only spam,
    which the rate limiter handles.
    """
    origin = request.headers.get("origin")
    if origin is None:
        return
    if origin.rstrip("/") not in get_settings().origin_list:
        raise HTTPException(status.HTTP_403_FORBIDDEN, detail="bad_origin")
