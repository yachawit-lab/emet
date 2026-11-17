# Feed digest — 2026-11-17T19:58:17Z

**Desk grade: MAP_ONLY** (schema v1, run `20261117T195817Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3851.6699** (SINGLE) as-of 2026-11-17T19:57:59Z
- session: O 3859.5 H 3894.0 L 3839.2 · gap +6.5
- prior: H 3904.3 L 3835.2 C 3853.0
- basis: bars (`yahoo:GC=F:1d`) run -0.6699 (-1.7 bps) vs anchor
- ATR14: 87.5879 pts (2.274%) · RSI14: 34.06
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -12.1984)
- VWAP (UTC day): 3867.2893 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **26807.527** (SINGLE) as-of 2026-11-17T19:58:18Z
- session: O 27229.9492 H 27258.8418 L 26580.8594 · gap +32.7988
- prior: H 27621.6406 L 27149.1504 C 27197.1504
- basis: bars (`yahoo:^NDX:1d`) run -0.1774 (-0.1 bps) vs anchor
- ATR14: 674.291 pts (2.515%) · RSI14: 35.2
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -73.3062)
- VWAP (session): 26937.7752 — price below
- OR15: 27120.2578–27258.25

## BTCUSD — MAP_ONLY
- price: **63717.65** (SINGLE) as-of 2026-11-17T19:58:18Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 156900 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 156903 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 154792 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
