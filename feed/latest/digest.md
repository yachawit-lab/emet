# Feed digest — 2026-11-17T02:55:48Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261117T025548Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3868.45** (SINGLE) as-of 2026-11-17T02:55:28Z
- session: O 3859.5 H 3875.8999 L 3845.8999 · gap +6.5
- prior: H 3904.3 L 3835.2 C 3853.0
- basis: bars (`yahoo:GC=F:1d`) run -0.65 (-1.7 bps) vs anchor
- ATR14: 85.8165 pts (2.219%) · RSI14: 35.68
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.1263)
- VWAP (UTC day): 3862.0781 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27197.1523** (STALE) as-of 2026-11-16T21:00:00Z
- session: O 27543.6445 H 27621.6406 L 27149.1465 · gap -400.0957
- prior: H 28295.8008 L 27609.7109 C 27943.7402
- ATR14: 674.0073 pts (2.478%) · RSI14: 37.56
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -35.6232)
- VWAP (session): 27372.1657 — price below
- OR15: 27404.6094–27609.375
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 02:55)

## BTCUSD — MAP_ONLY
- price: **64446.37** (SINGLE) as-of 2026-11-17T02:55:50Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 155878 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 155881 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 280 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 02:55)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 153770 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
