"""
Indicators, derived from OHLCV.

Nothing in this file reads a vendor's indicator value. Every number is computed from
bars we fetched and hashed, which means it is reproducible from the archive and
cannot inherit a vendor's mislabelling. That single property removes an entire row
of the playbook §2c failure table.

Standard parameterisation, stated explicitly so the desk knows what it is reading:
EMA 9/20/50 · RSI 14 (Wilder) · MACD 12/26/9 · ATR 14 (Wilder) · VWAP session-anchored.
"""

from __future__ import annotations

from .model import Bar


def ema(values: list[float], period: int) -> list[float]:
    if len(values) < period:
        return []
    k = 2.0 / (period + 1)
    out = [sum(values[:period]) / period]
    for v in values[period:]:
        out.append(v * k + out[-1] * (1 - k))
    return out


def rsi(closes: list[float], period: int = 14) -> float | None:
    """Wilder's RSI — smoothed, not the simple-average variant."""
    if len(closes) < period + 1:
        return None
    gains, losses = [], []
    for prev, cur in zip(closes, closes[1:]):
        d = cur - prev
        gains.append(max(d, 0.0))
        losses.append(max(-d, 0.0))

    avg_g = sum(gains[:period]) / period
    avg_l = sum(losses[:period]) / period
    for g, l in zip(gains[period:], losses[period:]):
        avg_g = (avg_g * (period - 1) + g) / period
        avg_l = (avg_l * (period - 1) + l) / period

    if avg_l == 0:
        return 100.0
    rs = avg_g / avg_l
    return round(100 - (100 / (1 + rs)), 2)


def macd(closes: list[float], fast: int = 12, slow: int = 26, signal: int = 9) -> dict | None:
    if len(closes) < slow + signal:
        return None
    fast_line, slow_line = ema(closes, fast), ema(closes, slow)
    # Align: the slow EMA starts later, so trim the fast one to match.
    offset = len(fast_line) - len(slow_line)
    macd_line = [f - s for f, s in zip(fast_line[offset:], slow_line)]
    sig = ema(macd_line, signal)
    if not sig:
        return None
    hist = macd_line[-1] - sig[-1]
    return {
        "macd": round(macd_line[-1], 4),
        "signal": round(sig[-1], 4),
        "hist": round(hist, 4),
        "state": "bullish" if hist > 0 else "bearish",
    }


def atr(bars: list[Bar], period: int = 14) -> float | None:
    """Wilder's ATR in price points. The caller pairs this with price to get ATR%,
    and gates.reconcile_atr checks the two against each other before publishing."""
    if len(bars) < period + 1:
        return None
    trs = []
    for prev, cur in zip(bars, bars[1:]):
        trs.append(
            max(
                cur.high - cur.low,
                abs(cur.high - prev.close),
                abs(cur.low - prev.close),
            )
        )
    val = sum(trs[:period]) / period
    for tr in trs[period:]:
        val = (val * (period - 1) + tr) / period
    return round(val, 4)


def vwap(bars: list[Bar]) -> float | None:
    """Session-anchored VWAP from intraday bars.

    Returns None when the bars carry no volume — an unvolumed VWAP is just a moving
    average wearing a VWAP label, and publishing one would be exactly the kind of
    quietly-wrong number this pipeline exists to prevent.
    """
    num = den = 0.0
    for b in bars:
        if not b.volume:
            continue
        typical = (b.high + b.low + b.close) / 3
        num += typical * b.volume
        den += b.volume
    if den == 0:
        return None
    return round(num / den, 4)


def opening_range(bars: list[Bar], minutes: int = 15) -> dict | None:
    """High/low of the first N minutes of the session present in `bars`."""
    if not bars:
        return None
    start = bars[0].ts
    window = [b for b in bars if (b.ts - start).total_seconds() < minutes * 60]
    if not window:
        return None
    return {
        "high": round(max(b.high for b in window), 4),
        "low": round(min(b.low for b in window), 4),
        "minutes": minutes,
        "bars": len(window),
    }


def ema_stack(closes: list[float]) -> dict | None:
    """The 9/20/50 alignment the indicator-agent reports, pre-resolved to a label."""
    e9, e20, e50 = ema(closes, 9), ema(closes, 20), ema(closes, 50)
    if not (e9 and e20 and e50):
        return None
    a, b, c = e9[-1], e20[-1], e50[-1]
    if a > b > c:
        state = "bullish stack (9>20>50)"
    elif a < b < c:
        state = "bearish stack (9<20<50)"
    else:
        state = "mixed / no clean stack"
    return {"ema9": round(a, 4), "ema20": round(b, 4), "ema50": round(c, 4), "state": state}
