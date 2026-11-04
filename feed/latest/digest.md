# Feed digest — 2026-11-04T00:36:22Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261104T003622Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3923.2** (SINGLE) as-of 2026-11-04T00:35:58Z
- session: O 3940.8 H 3949.3 L 3935.2 · gap -28.8
- prior: H 3980.8 L 3889.0 C 3969.6001
- basis: bars (`yahoo:GC=F:1d`) run +16.0 (+40.8 bps) vs anchor
- ATR14: 78.7109 pts (1.998%) · RSI14: 34.3
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -10.5637)
- VWAP (UTC day): 3944.5043 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28180.2637** (STALE) as-of 2026-11-03T21:00:00Z
- session: O 28085.4961 H 28307.8984 L 28085.4961 · gap +95.6758
- prior: H 28753.3906 L 27967.4395 C 27989.8203
- ATR14: 524.7517 pts (1.862%) · RSI14: 34.81
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -187.1914)
- VWAP (session): 28209.1753 — price below
- OR15: 28098.0703–28242.1758
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 00:36)

## BTCUSD — MAP_ONLY
- price: **76833.86** (SINGLE) as-of 2026-11-04T00:36:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 137018 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 137021 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 140 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 00:36)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 134910 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
