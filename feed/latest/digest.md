# Feed digest — 2026-09-02T10:30:49Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260902T103049Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4311.0** (SINGLE) as-of 2026-09-02T10:30:21Z
- session: O 4377.2002 H 4382.0 L 4329.2002 · gap +29.2002
- prior: H 4402.0 L 4329.1001 C 4348.0
- basis: bars (`yahoo:GC=F:1d`) run +47.3999 (+110.0 bps) vs anchor
- ATR14: 75.7958 pts (1.739%) · RSI14: 47.91
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -26.5736)
- VWAP (UTC day): 4358.4693 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29077.2207** (STALE) as-of 2026-09-01T20:00:00Z
- session: O 29056.5801 H 29267.4199 L 28953.2598 · gap -400.3906
- prior: H 29483.9004 L 29304.4902 C 29456.9707
- ATR14: 430.5527 pts (1.481%) · RSI14: 46.81
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -39.672)
- VWAP (session): 29104.2664 — price below
- OR15: 28993.6113–29088.1582
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:30)

## BTCUSD — MAP_ONLY
- price: **76528.77** (SINGLE) as-of 2026-09-02T10:30:51Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 46893 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 46896 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 871 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:30)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 44785 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
