# Feed digest — 2026-09-10T10:29:48Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260910T102948Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4396.1001** (SINGLE) as-of 2026-09-10T10:29:24Z
- session: O 4448.0 H 4479.8999 L 4431.0 · gap +32.0
- prior: H 4416.0 L 4397.3999 C 4416.0
- basis: bars (`yahoo:GC=F:1d`) run +45.0 (+102.4 bps) vs anchor
- ATR14: 74.554 pts (1.679%) · RSI14: 53.12
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -22.9899)
- VWAP (UTC day): 4454.1997 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29421.5527** (STALE) as-of 2026-09-09T20:00:00Z
- session: O 29431.9395 H 29563.5996 L 29334.4004 · gap -75.7598
- prior: H 29655.7305 L 29400.6992 C 29507.6992
- ATR14: 366.7741 pts (1.247%) · RSI14: 51.4
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -4.4342)
- VWAP (session): 29443.322 — price below
- OR15: 29393.2598–29478.8516
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:29)

## BTCUSD — MAP_ONLY
- price: **77955.02** (SINGLE) as-of 2026-09-10T10:29:49Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 58412 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 58415 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 870 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:29)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 56304 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
