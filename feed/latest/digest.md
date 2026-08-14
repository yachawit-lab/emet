# Feed digest — 2026-08-14T16:35:59Z

**Desk grade: MAP_ONLY** (schema v1, run `20260814T163559Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4385.0** (SINGLE) as-of 2026-08-14T16:35:54Z
- session: O 4408.2002 H 4454.6001 L 4365.5 · gap +44.6001
- prior: H 4445.0 L 4350.0 C 4363.6001
- basis: bars (`yahoo:GC=F:1d`) run +60.3999 (+137.7 bps) vs anchor
- ATR14: 75.8726 pts (1.707%) · RSI14: 67.91
- EMA: mixed / no clean stack
- MACD: bullish (hist 40.7235)
- VWAP (UTC day): 4415.275 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29990.733** (SINGLE) as-of 2026-08-14T16:36:00Z
- session: O 30167.125 H 30179.8223 L 29934.6582 · gap +82.625
- prior: H 30168.0508 L 29757.6191 C 30084.5
- basis: bars (`yahoo:^NDX:1d`) run -0.0006 (-0.0 bps) vs anchor
- ATR14: 517.1374 pts (1.724%) · RSI14: 58.9
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 175.9147)
- VWAP (session): 30062.6236 — price below
- OR15: 30079.9746–30176.6797

## BTCUSD — MAP_ONLY
- price: **63104.58** (SINGLE) as-of 2026-08-14T16:36:02Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 19898 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 19901 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 17790 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
