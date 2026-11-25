# Feed digest — 2026-11-25T16:42:52Z

**Desk grade: MAP_ONLY** (schema v1, run `20261125T164252Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3452.8** (SINGLE) as-of 2026-11-25T16:42:46Z
- session: O 3559.3 H 3602.8999 L 3453.8 · gap -2.5999
- prior: H 3676.7 L 3545.3999 C 3561.8999
- basis: bars (`yahoo:GC=F:1d`) run +33.8001 (+97.9 bps) vs anchor
- ATR14: 111.1645 pts (3.188%) · RSI14: 27.65
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -38.7779)
- VWAP (UTC day): 3517.5717 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **25064.885** (SINGLE) as-of 2026-11-25T16:42:53Z
- session: O 25309.6113 H 25439.3164 L 24970.6582 · gap -904.5586
- prior: H 26433.5996 L 25935.4707 C 26214.1699
- basis: bars (`yahoo:^NDX:1d`) run -2.928 (-1.2 bps) vs anchor
- ATR14: 875.6926 pts (3.494%) · RSI14: 34.03
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -167.3113)
- VWAP (session): 25157.4164 — price below
- OR15: 25002.373–25330.043

## BTCUSD — MAP_ONLY
- price: **58169.46** (SINGLE) as-of 2026-11-25T16:42:54Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 168225 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 168228 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 166117 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
