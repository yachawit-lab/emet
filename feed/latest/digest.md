# Feed digest — 2026-11-17T15:25:58Z

**Desk grade: MAP_ONLY** (schema v1, run `20261117T152558Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3860.3501** (SINGLE) as-of 2026-11-17T15:25:28Z
- session: O 3859.5 H 3889.6001 L 3839.2 · gap +6.5
- prior: H 3904.3 L 3835.2 C 3853.0
- basis: bars (`yahoo:GC=F:1d`) run -0.9502 (-2.5 bps) vs anchor
- ATR14: 87.2736 pts (2.261%) · RSI14: 34.83
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.6623)
- VWAP (UTC day): 3865.1587 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27081.821** (SINGLE) as-of 2026-11-17T15:25:59Z
- session: O 27229.9492 H 27258.8418 L 27053.707 · gap +32.7988
- prior: H 27621.6406 L 27149.1504 C 27197.1504
- basis: bars (`yahoo:^NDX:1d`) run +3.7278 (+1.4 bps) vs anchor
- ATR14: 640.5161 pts (2.365%) · RSI14: 36.85
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -55.5522)
- VWAP (session): 27153.2725 — price below
- OR15: 27120.2578–27258.25

## BTCUSD — MAP_ONLY
- price: **64987.81** (SINGLE) as-of 2026-11-17T15:26:00Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 156628 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 156631 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 154520 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
