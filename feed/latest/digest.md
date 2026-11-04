# Feed digest — 2026-11-04T13:42:09Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261104T134209Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4040.7** (SINGLE) as-of 2026-11-04T13:41:59Z
- session: O 3940.8 H 4061.5 L 3928.2 · gap +0.4001
- prior: H 3981.7 L 3904.1001 C 3940.3999
- basis: bars (`yahoo:GC=F:1d`) run +3.1 (+7.7 bps) vs anchor
- ATR14: 85.4754 pts (2.114%) · RSI14: 44.56
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -2.7905)
- VWAP (UTC day): 4009.0124 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28180.2637** (STALE) as-of 2026-11-03T21:00:00Z
- session: O 28085.5 H 28307.9004 L 28085.5 · gap +95.6797
- prior: H 28753.3906 L 27967.4395 C 27989.8203
- ATR14: 524.7518 pts (1.862%) · RSI14: 34.81
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -187.1916)
- VWAP (session): 28212.3241 — price below
- OR15: 28098.0703–28242.1758

## BTCUSD — MAP_ONLY
- price: **78284.93** (SINGLE) as-of 2026-11-04T13:42:12Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 137804 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 137807 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1062 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 135696 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
