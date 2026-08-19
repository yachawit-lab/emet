# Feed digest — 2026-08-19T06:36:22Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260819T063622Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4340.7002** (SINGLE) as-of 2026-08-19T06:36:07Z
- session: O 4391.3999 H 4415.7998 L 4378.0 · gap +25.3999
- prior: H 4434.1001 L 4330.7002 C 4366.0
- basis: bars (`yahoo:GC=F:1d`) run +58.0996 (+133.8 bps) vs anchor
- ATR14: 73.6178 pts (1.674%) · RSI14: 63.29
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 22.7313)
- VWAP (UTC day): 4398.4082 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29490.957** (STALE) as-of 2026-08-18T20:00:00Z
- session: O 30150.7793 H 30195.7207 L 29971.9199 · gap +104.6387
- prior: H 30179.8203 L 29934.6602 C 30046.1406
- ATR14: 500.371 pts (1.668%) · RSI14: 58.42
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 162.2032)
- VWAP (session): 29519.5543 — price below
- OR15: 29540.2891–29676.7695
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 06:36)

## BTCUSD — MAP_ONLY
- price: **64221.51** (SINGLE) as-of 2026-08-19T06:36:24Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 26498 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 26501 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 636 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 06:36)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 24390 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
