# Feed digest — 2026-11-26T16:17:34Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261126T161734Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3573.0** (SINGLE) as-of 2026-11-26T16:17:18Z
- session: O 3619.8 H 3634.7 L 3578.8 · gap +84.0
- prior: H 3588.8999 L 3425.2 C 3535.8
- basis: bars (`yahoo:GC=F:1d`) run +29.0 (+81.2 bps) vs anchor
- ATR14: 111.2568 pts (3.089%) · RSI14: 34.36
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -28.2159)
- VWAP (UTC day): 3606.4106 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26046.8965** (STALE) as-of 2026-11-25T21:00:00Z
- session: O 25309.6094 H 26081.6504 L 24970.6602 · gap -904.5605
- prior: H 26433.5996 L 25935.4707 C 26214.1699
- ATR14: 875.6925 pts (3.362%) · RSI14: 38.39
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -104.4545)
- VWAP (session): 25426.4143 — price above
- OR15: 25002.373–25330.043

## BTCUSD — MAP_ONLY
- price: **60540.46** (SINGLE) as-of 2026-11-26T16:17:36Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 169640 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 169643 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1218 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 167532 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
