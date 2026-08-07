# Feed digest — 2026-08-07T22:09:13Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260807T220913Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4343.2998** (STALE) as-of 2026-08-07T22:08:50Z
- session: O 4298.2998 H 4432.2998 L 4288.0 · gap +56.2998
- prior: H 4297.0 L 4228.0 C 4242.0
- basis: bars (`yahoo:GC=F:1d`) run +58.0 (+133.5 bps) vs anchor
- ATR14: 83.1241 pts (1.889%) · RSI14: 67.56
- EMA: mixed / no clean stack
- MACD: bullish (hist 42.0242)
- VWAP (UTC day): 4383.7607 — price above
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29722.3027** (STALE) as-of 2026-08-07T20:00:00Z
- session: O 29596.4531 H 29747.1543 L 29452.709 · gap +223.123
- prior: H 29569.7598 L 29123.3809 C 29373.3301
- ATR14: 614.364 pts (2.067%) · RSI14: 57.25
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 181.9181)
- VWAP (session): 29636.3453 — price above
- OR15: 29597.9062–29701.5059
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:09)

## BTCUSD — MAP_ONLY
- price: **64891.72** (SINGLE) as-of 2026-08-07T22:09:14Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 10151 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 10154 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 53 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:09)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 8043 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
