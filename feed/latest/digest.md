# Feed digest — 2026-09-29T18:30:41Z

**Desk grade: MAP_ONLY** (schema v1, run `20260929T183041Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4167.0** (SINGLE) as-of 2026-09-29T18:30:40Z
- session: O 4150.1001 H 4207.2002 L 4145.2002 · gap -171.1001
- prior: H 4351.6001 L 4289.2002 C 4321.2002
- basis: bars (`yahoo:GC=F:1d`) run +32.8999 (+79.0 bps) vs anchor
- ATR14: 103.367 pts (2.461%) · RSI14: 34.6
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -24.9672)
- VWAP (UTC day): 4180.9337 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30330.07** (SINGLE) as-of 2026-09-29T18:30:41Z
- session: O 30412.291 H 30429.9746 L 30235.666 · gap +135.4805
- prior: H 30480.4004 L 30081.0605 C 30276.8105
- basis: bars (`yahoo:^NDX:1d`) run +0.6683 (+0.2 bps) vs anchor
- ATR14: 385.7202 pts (1.272%) · RSI14: 59.19
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 91.1962)
- VWAP (session): 30328.136 — price above
- OR15: 30272.707–30425.7598

## BTCUSD — MAP_ONLY
- price: **83473.71** (SINGLE) as-of 2026-09-29T18:30:42Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 86253 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 86256 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 84145 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
