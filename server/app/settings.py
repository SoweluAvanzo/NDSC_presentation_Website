"""Runtime configuration, loaded from environment variables."""
from __future__ import annotations

from functools import lru_cache

from pydantic_settings import BaseSettings, SettingsConfigDict


class Settings(BaseSettings):
    model_config = SettingsConfigDict(env_file=".env", env_file_encoding="utf-8", extra="ignore")

    env: str = "dev"

    # Browser origins allowed to call the API (CORS + CSRF origin check).
    allowed_origins: str = "http://localhost:5173,http://localhost:4173"

    # Resend transactional email for consultation notifications.
    resend_api_key: str = ""
    consultation_notify_to: str = ""
    email_from: str = "Norta DeSyCo Website <onboarding@resend.dev>"

    @property
    def origin_list(self) -> list[str]:
        return [o.strip().rstrip("/") for o in self.allowed_origins.split(",") if o.strip()]

    @property
    def is_prod(self) -> bool:
        return self.env == "prod"


@lru_cache
def get_settings() -> Settings:
    return Settings()
