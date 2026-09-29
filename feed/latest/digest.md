# Feed digest — 2026-09-29T18:54:03Z

**Desk grade: MAP_ONLY** (schema v1, run `20260929T185403Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4169.7998** (SINGLE) as-of 2026-09-29T18:53:40Z
- session: O 4150.1001 H 4209.0 L 4145.2002 · gap -18.2998
- prior: H 4315.6001 L 4143.1001 C 4168.3999
- basis: bars (`yahoo:GC=F:1d`) run +33.6001 (+80.6 bps) vs anchor
- ATR14: 100.68 pts (2.395%) · RSI14: 36.56
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -28.0467)
- VWAP (UTC day): 4181.8434 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30373.828** (SINGLE) as-of 2026-09-29T18:53:54Z
- session: O 30412.291 H 30429.9746 L 30235.666 · gap +135.4805
- prior: H 30480.4004 L 30081.0605 C 30276.8105
- basis: bars (`yahoo:^NDX:1d`) run -0.1737 (-0.1 bps) vs anchor
- ATR14: 385.7202 pts (1.27%) · RSI14: 59.72
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 93.935)
- VWAP (session): 30329.4863 — price above
- OR15: 30272.707–30425.7598

## BTCUSD — MAP_ONLY
- price: **83609.7** (SINGLE) as-of 2026-09-29T18:54:04Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 86276 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 86279 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 84168 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
