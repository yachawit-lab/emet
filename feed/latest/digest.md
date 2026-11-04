# Feed digest — 2026-11-04T20:33:47Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261104T203347Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4065.5** (SINGLE) as-of 2026-11-04T20:33:30Z
- session: O 3940.8 H 4080.8 L 3928.2 · gap +0.4001
- prior: H 3981.7 L 3904.1001 C 3940.3999
- basis: bars (`yahoo:GC=F:1d`) run +7.6001 (+18.7 bps) vs anchor
- ATR14: 86.854 pts (2.132%) · RSI14: 46.9
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -0.9206)
- VWAP (UTC day): 4030.8968 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28502.098** (STALE) as-of 2026-11-04T20:33:45Z
- session: O 28346.8086 H 28829.6621 L 28276.2188 · gap +166.5488
- prior: H 28307.9004 L 28085.5 C 28180.2598
- basis: bars (`yahoo:^NDX:1d`) run +0.3297 (+0.1 bps) vs anchor
- ATR14: 533.6554 pts (1.872%) · RSI14: 39.33
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -160.0246)
- VWAP (session): 28561.7353 — price below
- OR15: 28286.498–28671.4961
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:33)

## BTCUSD — MAP_ONLY
- price: **80247.51** (SINGLE) as-of 2026-11-04T20:33:48Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 138216 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 138219 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:33)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 136108 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
