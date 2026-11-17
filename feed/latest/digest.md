# Feed digest — 2026-11-17T21:36:54Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261117T213654Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3859.1499** (SINGLE) as-of 2026-11-17T21:36:29Z
- session: O 3859.5 H 3894.0 L 3839.2 · gap +6.5
- prior: H 3904.3 L 3835.2 C 3853.0
- basis: bars (`yahoo:GC=F:1d`) run -3.9499 (-10.2 bps) vs anchor
- ATR14: 87.5879 pts (2.272%) · RSI14: 34.4
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -11.9304)
- VWAP (UTC day): 3866.4927 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27001.784** (STALE) as-of 2026-11-17T21:36:57Z
- session: O 27229.9492 H 27258.8418 L 26580.8594 · gap +32.7988
- prior: H 27621.6406 L 27149.1504 C 27197.1504
- basis: bars (`yahoo:^NDX:1d`) run +0.0012 (+0.0 bps) vs anchor
- ATR14: 674.291 pts (2.497%) · RSI14: 36.34
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -60.8978)
- VWAP (session): 26937.246 — price below
- OR15: 27120.2578–27258.25
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:36)

## BTCUSD — MAP_ONLY
- price: **64518.68** (SINGLE) as-of 2026-11-17T21:36:57Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 156999 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 157002 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:36)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 154891 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
