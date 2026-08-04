# Feed digest — 2026-08-04T23:44:55Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260804T234455Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4070.1001** (SINGLE) as-of 2026-08-04T23:44:42Z
- session: O 4133.7998 H 4142.1001 L 4121.6001 · gap +100.0999
- prior: H 4083.5 L 4026.5 C 4033.7
- basis: bars (`yahoo:GC=F:1d`) run +54.1001 (+132.9 bps) vs anchor
- ATR14: 71.6386 pts (1.737%) · RSI14: 51.93
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 15.1251)
- VWAP (UTC day): 4131.1046 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29733.1602** (STALE) as-of 2026-08-04T20:00:00Z
- session: O 29109.2578 H 29831.4023 L 29109.2578 · gap +332.457
- prior: H 28842.3594 L 28196.8809 C 28776.8008
- ATR14: 660.1874 pts (2.22%) · RSI14: 57.93
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 78.4012)
- VWAP (session): 29562.8762 — price above
- OR15: 29134.4238–29327.2148
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:44)

## BTCUSD — MAP_ONLY
- price: **64165.28** (SINGLE) as-of 2026-08-04T23:44:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 5927 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 5930 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 149 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:44)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 3819 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
