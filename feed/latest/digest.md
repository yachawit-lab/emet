# Feed digest — 2026-09-22T22:56:58Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260922T225658Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4363.7998** (SINGLE) as-of 2026-09-22T22:56:37Z
- session: O 4394.7002 H 4403.7998 L 4394.7002 · gap +10.8003
- prior: H 4422.1001 L 4360.2998 C 4383.8999
- basis: bars (`yahoo:GC=F:1d`) run +37.0 (+84.8 bps) vs anchor
- ATR14: 99.413 pts (2.259%) · RSI14: 48.48
- EMA: mixed / no clean stack
- MACD: bearish (hist -15.9034)
- VWAP (UTC day): 4371.4513 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30732.3965** (STALE) as-of 2026-09-22T20:00:00Z
- session: O 30496.4316 H 30770.6289 L 30496.4316 · gap +14.082
- prior: H 30557.3398 L 29933.2207 C 30482.3496
- ATR14: 409.2648 pts (1.332%) · RSI14: 67.99
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 135.0148)
- VWAP (session): 30651.986 — price above
- OR15: 30507.2852–30629.375
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:56)

## BTCUSD — MAP_ONLY
- price: **86171.42** (SINGLE) as-of 2026-09-22T22:57:00Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 76439 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 76442 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 101 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:56)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 74331 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
