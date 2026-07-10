"""Consultation-request email via Resend."""
from __future__ import annotations

import logging

import httpx

from app.settings import get_settings

log = logging.getLogger("ndsc.email")
_RESEND_ENDPOINT = "https://api.resend.com/emails"

_SERVICE_LABELS = {
    "dao_development": "Complete DAO Launch & MiCA Compliance",
    "fintech_consulting": "Training & Workshops",
    "governance": "Governance & Token Economy Design",
    "market_analysis": "Crypto Market Analysis & Trading",
    "other": "Other",
}


async def send_consultation(
    name: str, email: str, company: str, service_interest: str, message: str
) -> None:
    """Email the owner a consultation request.

    Not best-effort: there is no database fallback, so a delivery failure is
    raised (RuntimeError) and surfaced to the caller as an error response.
    """
    s = get_settings()
    if not s.resend_api_key or not s.consultation_notify_to:
        raise RuntimeError("email_not_configured")

    service = _SERVICE_LABELS.get(service_interest, service_interest)
    body = (
        "New consultation request — nortadesyco.xyz\n\n"
        f"Name: {name}\n"
        f"Email: {email}\n"
        f"Company: {company or 'Not provided'}\n"
        f"Service interest: {service}\n\n"
        f"Message:\n{message}\n"
    )
    payload = {
        "from": s.email_from,
        "to": [s.consultation_notify_to],
        "reply_to": email,
        "subject": f"New consultation request from {name}",
        "text": body,
    }
    try:
        async with httpx.AsyncClient(timeout=10.0) as client:
            r = await client.post(
                _RESEND_ENDPOINT,
                json=payload,
                headers={"Authorization": f"Bearer {s.resend_api_key}"},
            )
    except Exception as e:  # noqa: BLE001
        raise RuntimeError("email_send_failed") from e
    if r.status_code >= 300:
        log.warning("Resend rejected consultation email: %s %s", r.status_code, r.text[:200])
        raise RuntimeError("email_send_failed")
