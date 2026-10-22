# Feed digest — 2026-10-22T11:03:59Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261022T110359Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4075.3999** (SINGLE) as-of 2026-10-22T11:03:40Z
- session: O 4159.0 H 4164.2998 L 4082.3999 · gap +9.0
- prior: H 4160.6001 L 4122.2998 C 4150.0
- basis: bars (`yahoo:GC=F:1d`) run +22.6001 (+55.5 bps) vs anchor
- ATR14: 76.593 pts (1.869%) · RSI14: 36.72
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 2.0523)
- VWAP (UTC day): 4112.5148 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29822.5176** (STALE) as-of 2026-10-21T20:00:00Z
- session: O 29707.0 H 29928.3105 L 29593.6992 · gap +216.7207
- prior: H 29711.5293 L 29208.8301 C 29490.2793
- ATR14: 448.7066 pts (1.505%) · RSI14: 46.22
- EMA: mixed / no clean stack
- MACD: bearish (hist -175.2535)
- VWAP (session): 29782.613 — price above
- OR15: 29595.6113–29728.4531
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:03)

## BTCUSD — MAP_ONLY
- price: **81888.39** (SINGLE) as-of 2026-10-22T11:04:01Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 118926 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 118929 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 904 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:03)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 116818 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
