"""Integration tests for the consultation-form relay API."""
from __future__ import annotations

import httpx

from tests.conftest import BASE, ORIGIN

_VALID = {
    "name": "Jane Founder",
    "email": "jane@example.com",
    "company": "Acme DAO",
    "service_interest": "dao_development",
    "message": "We need help launching a MiCA-compliant DAO.",
}


def test_healthz(client):
    r = client.get("/healthz")
    assert r.status_code == 200
    assert r.json()["status"] == "ok"


def test_consultation_valid_reaches_email_layer(client):
    """A well-formed request passes validation. With Resend unconfigured in
    the test env it fails at delivery (502); with Resend it returns 200."""
    r = client.post("/api/consultation", json=_VALID)
    assert r.status_code in (200, 502), r.text


def test_consultation_missing_fields_422(client):
    r = client.post("/api/consultation", json={"name": "X"})
    assert r.status_code == 422


def test_consultation_bad_service_interest_422(client):
    bad = {**_VALID, "service_interest": "not_a_real_service"}
    r = client.post("/api/consultation", json=bad)
    assert r.status_code == 422


def test_consultation_bad_origin_403(client):
    r = client.post(
        "/api/consultation",
        json=_VALID,
        headers={"Origin": "https://evil.example.com"},
    )
    assert r.status_code == 403


def test_consultation_rate_limited():
    """Hammering the endpoint from one IP eventually yields 429. Lenient —
    the limiter is per-worker and the API runs 2 workers. Runs last so it
    does not exhaust the bucket for the other tests."""
    saw_429 = False
    with httpx.Client(base_url=BASE, timeout=15.0, headers={"Origin": ORIGIN}) as c:
        for _ in range(24):
            r = c.post("/api/consultation", json=_VALID)
            if r.status_code == 429:
                saw_429 = True
                break
    assert saw_429, "expected a 429 after repeated requests"
