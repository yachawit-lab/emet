# Feed digest — 2026-09-22T15:36:47Z

**Desk grade: MAP_ONLY** (schema v1, run `20260922T153647Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4330.8999** (SINGLE) as-of 2026-09-22T15:36:36Z
- session: O 4382.5 H 4414.1001 L 4327.6001 · gap -1.3999
- prior: H 4422.1001 L 4360.2998 C 4383.8999
- basis: bars (`yahoo:GC=F:1d`) run +41.1001 (+94.9 bps) vs anchor
- ATR14: 104.1702 pts (2.383%) · RSI14: 45.97
- EMA: mixed / no clean stack
- MACD: bearish (hist -17.7413)
- VWAP (UTC day): 4366.5292 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30618.827** (SINGLE) as-of 2026-09-22T15:36:48Z
- session: O 30496.4316 H 30698.9961 L 30496.4316 · gap +14.082
- prior: H 30557.3398 L 29933.2207 C 30482.3496
- basis: bars (`yahoo:^NDX:1d`) run +0.8507 (+0.3 bps) vs anchor
- ATR14: 404.1482 pts (1.32%) · RSI14: 66.99
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 127.8214)
- VWAP (session): 30625.7918 — price below
- OR15: 30507.2852–30629.375

## BTCUSD — MAP_ONLY
- price: **86340.04** (SINGLE) as-of 2026-09-22T15:36:48Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 75999 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 76002 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 73891 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
