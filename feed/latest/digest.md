# Feed digest — 2026-11-27T16:01:27Z

**Desk grade: MAP_ONLY** (schema v1, run `20261127T160127Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3624.8** (SINGLE) as-of 2026-11-27T16:01:20Z
- session: O 3619.8 H 3711.8999 L 3578.8 · gap +84.0
- prior: H 3588.8999 L 3425.2 C 3535.8
- basis: bars (`yahoo:GC=F:1d`) run +31.5999 (+87.2 bps) vs anchor
- ATR14: 116.7711 pts (3.194%) · RSI14: 38.09
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -24.7446)
- VWAP (UTC day): 3660.0504 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **26498.913** (SINGLE) as-of 2026-11-27T16:01:28Z
- session: O 26479.9707 H 26568.6797 L 26166.8652 · gap +433.0703
- prior: H 26081.6504 L 24970.6602 C 26046.9004
- basis: bars (`yahoo:^NDX:1d`) run +0.0011 (+0.0 bps) vs anchor
- ATR14: 850.4189 pts (3.209%) · RSI14: 42.05
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -55.5877)
- VWAP (session): 26340.5726 — price above
- OR15: 26219.1973–26477.4141

## BTCUSD — MAP_ONLY
- price: **59961.27** (SINGLE) as-of 2026-11-27T16:01:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 171063 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 171066 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 168955 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
