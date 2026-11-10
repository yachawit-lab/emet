# Feed digest — 2026-11-10T20:37:21Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261110T203721Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4034.8** (SINGLE) as-of 2026-11-10T20:36:58Z
- session: O 4149.0 H 4156.2002 L 4020.8 · gap +34.5
- prior: H 4157.7002 L 4062.5 C 4114.5
- basis: bars (`yahoo:GC=F:1d`) run +8.0 (+19.8 bps) vs anchor
- ATR14: 90.6533 pts (2.242%) · RSI14: 45.08
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 14.6526)
- VWAP (UTC day): 4074.2097 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27704.417** (STALE) as-of 2026-11-10T20:37:22Z
- session: O 27649.6348 H 27990.3359 L 27421.1816 · gap -257.9961
- prior: H 28025.7695 L 27227.5293 C 27907.6309
- basis: bars (`yahoo:^NDX:1d`) run -0.2119 (-0.1 bps) vs anchor
- ATR14: 653.0754 pts (2.357%) · RSI14: 39.76
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -161.622)
- VWAP (session): 27677.0105 — price below
- OR15: 27541.0–27758.5898
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:37)

## BTCUSD — MAP_ONLY
- price: **73536.37** (SINGLE) as-of 2026-11-10T20:37:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 146859 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 146862 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:37)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 144751 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
