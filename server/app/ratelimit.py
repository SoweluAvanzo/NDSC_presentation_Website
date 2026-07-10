"""Tiny in-memory fixed-window rate limiter (anti-spam for the one form)."""
from __future__ import annotations

import time
from collections import defaultdict

from fastapi import HTTPException, Request, status


def client_ip(request: Request) -> str:
    # Use the RIGHTMOST X-Forwarded-For entry — the one appended by our own
    # trusted front Caddy — not the leftmost, which is client-supplied and
    # spoofable (a fresh value per request would otherwise mint a fresh bucket
    # and defeat the limiter entirely).
    xff = request.headers.get("x-forwarded-for")
    if xff:
        parts = [p.strip() for p in xff.split(",") if p.strip()]
        if parts:
            return parts[-1]
    return request.client.host if request.client else "unknown"


class _Window:
    __slots__ = ("count", "reset_at")

    def __init__(self) -> None:
        self.count = 0
        self.reset_at = 0.0


_buckets: dict[str, _Window] = defaultdict(_Window)


def rate_limit(bucket: str, limit: int, window_seconds: int):
    """FastAPI dependency: at most `limit` hits per `window` per client IP."""

    def _dep(request: Request) -> None:
        now = time.monotonic()
        w = _buckets[f"{bucket}:{client_ip(request)}"]
        if now >= w.reset_at:
            w.count = 0
            w.reset_at = now + window_seconds
        w.count += 1
        if w.count > limit:
            raise HTTPException(
                status.HTTP_429_TOO_MANY_REQUESTS,
                detail="rate_limited",
                headers={"Retry-After": str(max(1, int(w.reset_at - now)))},
            )

    return _dep
