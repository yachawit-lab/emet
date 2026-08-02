"""
Market hours and intraday windows.

Two problems live here, and they are both about a number looking fresher or more
meaningful than it is.

1. A vendor can restamp a closed market. On 2026-08-02 (a Sunday, spot gold shut)
   gold-api returned a price with `updatedAt` twelve minutes old. The TTL gate in
   pipeline.gates trusts the source's own timestamp, so it cannot see this — the
   source is not stale by its own account, it is lying. Only knowing when the
   underlying market actually trades catches that.

2. "Session VWAP" and "opening range" are only meaningful against a defined open.
   Handing a 24-hour crypto series to an opening-range function anchors it to
   whatever bar the fetch limit happened to start at — an arbitrary point that
   moves every run. Better to publish nothing than a number that means nothing.

Known limitation: no holiday calendar. A US market holiday still reads as open here,
so an equity anchor on Thanksgiving would not be demoted. Holidays need a data source
we do not have yet; the weekly schedule is the part that is knowable for free.
"""

from __future__ import annotations

from datetime import datetime, time, timedelta

from .model import Bar

# Market identifiers used by INSTRUMENTS in build.py.
CRYPTO = "crypto"
US_EQUITY = "us_equity"
METALS_FX = "metals_fx"

# Intraday window kinds.
US_RTH = "us_rth"
UTC_DAY = "utc_day"
ROLLING_24H = "rolling_24h"

US_OPEN = time(13, 30)
US_CLOSE = time(20, 0)


def is_open(market: str, now: datetime) -> tuple[bool, str]:
    """Is the underlying market trading at `now`? Returns (open, reason)."""
    if market == CRYPTO:
        return True, "crypto trades continuously"

    wd = now.weekday()  # Mon=0 .. Sun=6
    t = now.time()

    if market == US_EQUITY:
        if wd >= 5:
            return False, "US equities closed — weekend"
        if not (US_OPEN <= t < US_CLOSE):
            return False, f"US equities closed — outside 13:30–20:00 UTC (now {t:%H:%M})"
        return True, "US cash session open"

    if market == METALS_FX:
        # OTC metals/FX run continuously from Sunday 22:00 UTC to Friday 21:00 UTC.
        if wd == 5:  # Saturday
            return False, "spot metals/FX closed — weekend"
        if wd == 6 and t < time(22, 0):  # Sunday before the reopen
            return False, "spot metals/FX closed — reopens Sunday 22:00 UTC"
        if wd == 4 and t >= time(21, 0):  # Friday after the close
            return False, "spot metals/FX closed — closed Friday 21:00 UTC"
        return True, "spot metals/FX session open"

    return True, f"no schedule defined for market '{market}'"


def latest_window(bars: list[Bar], window: str) -> tuple[list[Bar], str, bool]:
    """Slice intraday bars to the window the desk actually means.

    Returns (bars, vwap_field_name, opening_range_is_meaningful).

    The field name changes with the window on purpose: a rolling 24-hour crypto VWAP
    is a real and useful number, but calling it `vwap_session` tells the agent
    something false about what it measures.
    """
    if not bars:
        return [], "vwap_session", False

    last = bars[-1].ts

    if window == US_RTH:
        day = last.date()
        sel = [b for b in bars if b.ts.date() == day and US_OPEN <= b.ts.time() < US_CLOSE]
        # A real session open exists, so the opening range means something.
        return sel or bars, "vwap_session", True

    if window == UTC_DAY:
        # Futures run nearly around the clock; the UTC day is a defensible slice but
        # it is not a session, and there is no open to anchor an opening range to.
        day = last.date()
        return [b for b in bars if b.ts.date() == day], "vwap_utc_day", False

    if window == ROLLING_24H:
        cutoff = last - timedelta(hours=24)
        return [b for b in bars if b.ts > cutoff], "vwap_24h", False

    return bars, "vwap_session", False
