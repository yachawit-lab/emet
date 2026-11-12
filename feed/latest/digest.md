# Feed digest — 2026-11-12T19:01:48Z

**Desk grade: MAP_ONLY** (schema v1, run `20261112T190148Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3882.0** (SINGLE) as-of 2026-11-12T19:01:41Z
- session: O 3994.0 H 4005.8999 L 3857.1001 · gap -6.5
- prior: H 4074.7 L 3989.6001 C 4000.5
- basis: bars (`yahoo:GC=F:1d`) run +1.1001 (+2.8 bps) vs anchor
- ATR14: 94.4379 pts (2.432%) · RSI14: 35.73
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.1323)
- VWAP (UTC day): 3916.7787 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28307.955** (SINGLE) as-of 2026-11-12T19:01:49Z
- session: O 27953.9082 H 28548.5508 L 27940.584 · gap -420.3418
- prior: H 28593.5195 L 28102.75 C 28374.25
- basis: bars (`yahoo:^NDX:1d`) run +0.1114 (+0.0 bps) vs anchor
- ATR14: 663.0924 pts (2.342%) · RSI14: 45.45
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -21.4525)
- VWAP (session): 28284.4041 — price above
- OR15: 27948.3887–28285.7559

## BTCUSD — MAP_ONLY
- price: **71580.59** (SINGLE) as-of 2026-11-12T19:01:49Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 149644 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 149647 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 147536 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
