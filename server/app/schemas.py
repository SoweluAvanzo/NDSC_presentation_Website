"""Request/response schemas."""
from __future__ import annotations

from pydantic import BaseModel, ConfigDict, EmailStr, Field

_SERVICES = "dao_development|fintech_consulting|governance|market_analysis|other"


class ConsultationIn(BaseModel):
    # `extra='ignore'` keeps the endpoint forgiving of extra posted fields.
    model_config = ConfigDict(extra="ignore")
    name: str = Field(min_length=1, max_length=200)
    email: EmailStr
    company: str | None = Field(default=None, max_length=200)
    service_interest: str = Field(pattern=rf"^({_SERVICES})$")
    message: str = Field(min_length=1, max_length=4000)
