# Feed digest — 2026-08-05T12:27:15Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260805T122715Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4209.6001** (SINGLE) as-of 2026-08-05T12:27:14Z
- session: O 4133.7998 H 4265.5 L 4121.6001 · gap +38.3999
- prior: H 4095.3999 L 4048.8 C 4095.3999
- basis: bars (`yahoo:GC=F:1d`) run +55.5 (+131.8 bps) vs anchor
- ATR14: 75.5722 pts (1.772%) · RSI14: 60.91
- EMA: mixed / no clean stack
- MACD: bullish (hist 25.2772)
- VWAP (UTC day): 4213.5933 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29733.1602** (STALE) as-of 2026-08-04T20:00:00Z
- session: O 29109.2598 H 29831.4004 L 29109.2598 · gap +332.459
- prior: H 28842.3594 L 28196.8809 C 28776.8008
- ATR14: 660.1873 pts (2.22%) · RSI14: 57.93
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 78.4012)
- VWAP (session): 29577.256 — price above
- OR15: 29134.4238–29327.2148
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:27)

## BTCUSD — MAP_ONLY
- price: **64514.14** (SINGLE) as-of 2026-08-05T12:27:16Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 6689 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 6692 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 987 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:27)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 4581 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
