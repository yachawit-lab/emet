"""
Core value types for the feed.

Every number the desk consumes is a `Field`, never a bare float. A bare float loses
the two things the playbook's §2c incidents were all caused by not having: where it
came from, and how old it is. Keeping provenance welded to the value makes those
failures detectable in code instead of in a scan at 13:29 UTC.
"""

from __future__ import annotations

import hashlib
from dataclasses import dataclass, field as dc_field
from datetime import datetime, timezone
from typing import Any


def utcnow() -> datetime:
    return datetime.now(timezone.utc)


def iso(dt: datetime) -> str:
    return dt.astimezone(timezone.utc).strftime("%Y-%m-%dT%H:%M:%SZ")


# Confidence is assigned by the gates, never by a fetcher. A source module reports
# what it saw; only pipeline.gates decides whether that counts as trustworthy.
VERIFIED = "VERIFIED"   # >=2 independent sources agree, within tolerance, fresh
SINGLE = "SINGLE"       # only one source available — usable, but say so
DISPUTED = "DISPUTED"   # sources disagree beyond tolerance — emit both, never average
STALE = "STALE"         # older than this field's TTL
MISSING = "MISSING"     # requested and not obtained

# Source tiers (playbook §3 of the feed design).
TIER_A = "A"  # exchange / issuer direct
TIER_B = "B"  # vendor aggregator — needs corroboration
TIER_C = "C"  # crowd — never becomes a number


@dataclass
class Bar:
    ts: datetime
    open: float
    high: float
    low: float
    close: float
    volume: float | None = None


@dataclass
class Series:
    """A run of bars from one source, with the provenance of the fetch itself."""

    symbol: str
    source: str
    tier: str
    interval: str
    bars: list[Bar]
    fetched_at: datetime
    raw_sha256: str

    @property
    def last(self) -> Bar:
        return self.bars[-1]

    @property
    def as_of(self) -> datetime:
        return self.bars[-1].ts


@dataclass
class Quote:
    """A point-in-time price with no bar history behind it.

    Some of the best sources are quote-only (spot gold, an exchange index price).
    They make excellent anchors and cannot produce indicators — keeping the two
    concepts separate stops us from silently deriving an ATR from a single tick.
    """

    symbol: str
    source: str
    tier: str
    price: float
    as_of: datetime
    fetched_at: datetime
    raw_sha256: str


@dataclass
class Field:
    """One published number, with everything needed to audit it later."""

    value: Any
    confidence: str
    unit: str | None = None
    sources: list[str] = dc_field(default_factory=list)
    as_of: datetime | None = None
    tier: str | None = None
    note: str | None = None

    def to_value(self) -> Any:
        """The compact form the desk agents read."""
        return self.value

    def to_provenance(self, now: datetime) -> dict:
        """The audit form — written to a side file, not read by agents."""
        p: dict[str, Any] = {
            "confidence": self.confidence,
            "sources": self.sources,
            "tier": self.tier,
        }
        if self.unit:
            p["unit"] = self.unit
        if self.as_of:
            p["as_of"] = iso(self.as_of)
            p["age_s"] = int((now - self.as_of).total_seconds())
        if self.note:
            p["note"] = self.note
        return p


def missing(what: str) -> Field:
    return Field(value=None, confidence=MISSING, note=what)


def sha256(raw: bytes) -> str:
    return hashlib.sha256(raw).hexdigest()
