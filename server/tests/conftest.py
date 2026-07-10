"""Integration-test scaffolding — talks to the live API over HTTP.

Drive with:
    docker compose -f infra/compose.yml run --rm -e API_BASE=http://api:8000 \\
        -v "$PWD/server:/app" -w /app api \\
        sh -c "pip install -q pytest && python -m pytest tests/"
"""
from __future__ import annotations

import os

import httpx
import pytest

BASE = os.environ.get("API_BASE", "http://localhost:8000")
# Must be in ALLOWED_ORIGINS so the CSRF origin check passes.
ORIGIN = os.environ.get("TEST_ORIGIN", "http://127.0.0.1:8190")


@pytest.fixture
def client():
    with httpx.Client(base_url=BASE, timeout=15.0, headers={"Origin": ORIGIN}) as c:
        yield c
