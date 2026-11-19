# Feed digest — 2026-11-19T15:09:12Z

**Desk grade: MAP_ONLY** (schema v1, run `20261119T150912Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3709.3** (SINGLE) as-of 2026-11-19T15:09:03Z
- session: O 3855.2 H 3759.5 L 3694.5 · gap +113.3
- prior: H 3859.3 L 3721.8 C 3741.8999
- basis: bars (`yahoo:GC=F:1d`) run -1.8 (-4.9 bps) vs anchor
- ATR14: 89.6097 pts (2.417%) · RSI14: 27.88
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -24.0353)
- VWAP (UTC day): 3727.1503 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27637.747** (SINGLE) as-of 2026-11-19T15:09:12Z
- session: O 27574.2363 H 27749.3477 L 27539.3379 · gap +457.9766
- prior: H 27236.1191 L 26848.9199 C 27116.2598
- basis: bars (`yahoo:^NDX:1d`) run +0.001 (+0.0 bps) vs anchor
- ATR14: 652.3064 pts (2.36%) · RSI14: 43.23
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -19.7741)
- VWAP (session): 27650.3345 — price below
- OR15: 27559.9316–27740.0

## BTCUSD — MAP_ONLY
- price: **63683.43** (SINGLE) as-of 2026-11-19T15:09:13Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 159491 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 159494 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 157383 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
