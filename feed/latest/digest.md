# Feed digest — 2026-09-29T16:58:06Z

**Desk grade: MAP_ONLY** (schema v1, run `20260929T165806Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4145.7002** (SINGLE) as-of 2026-09-29T16:57:40Z
- session: O 4150.1001 H 4207.2002 L 4145.2002 · gap -171.1001
- prior: H 4351.6001 L 4289.2002 C 4321.2002
- basis: bars (`yahoo:GC=F:1d`) run +33.2998 (+80.3 bps) vs anchor
- ATR14: 103.367 pts (2.473%) · RSI14: 33.5
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -26.301)
- VWAP (UTC day): 4179.9834 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30251.063** (SINGLE) as-of 2026-09-29T16:58:07Z
- session: O 30412.291 H 30429.9746 L 30235.666 · gap +135.4805
- prior: H 30480.4004 L 30081.0605 C 30276.8105
- basis: bars (`yahoo:^NDX:1d`) run -0.063 (-0.0 bps) vs anchor
- ATR14: 385.7202 pts (1.275%) · RSI14: 58.04
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 86.1075)
- VWAP (session): 30339.0994 — price below
- OR15: 30272.707–30425.7598

## BTCUSD — MAP_ONLY
- price: **82999.74** (SINGLE) as-of 2026-09-29T16:58:08Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 86160 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 86163 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 84052 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
