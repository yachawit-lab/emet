# Feed digest — 2026-08-06T12:30:44Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260806T123044Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4262.1001** (SINGLE) as-of 2026-08-06T12:30:16Z
- session: O 4307.0 H 4363.7002 L 4304.8999 · gap +61.2002
- prior: H 4262.2002 L 4129.5 C 4245.7998
- basis: bars (`yahoo:GC=F:1d`) run +57.6997 (+135.4 bps) vs anchor
- ATR14: 78.373 pts (1.814%) · RSI14: 63.77
- EMA: mixed / no clean stack
- MACD: bullish (hist 34.5972)
- VWAP (UTC day): 4333.1519 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29487.791** (STALE) as-of 2026-08-05T20:00:00Z
- session: O 29863.2695 H 29946.9395 L 29468.3301 · gap +130.1094
- prior: H 29831.4004 L 29109.2598 C 29733.1602
- ATR14: 647.2138 pts (2.195%) · RSI14: 55.5
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 131.0705)
- VWAP (session): 29706.3217 — price below
- OR15: 29795.9883–29928.2559
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:30)

## BTCUSD — MAP_ONLY
- price: **64476.19** (SINGLE) as-of 2026-08-06T12:30:46Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 8133 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 8136 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 991 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:30)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 6025 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
