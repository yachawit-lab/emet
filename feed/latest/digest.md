# Feed digest — 2026-08-10T10:40:19Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260810T104019Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4341.2998** (SINGLE) as-of 2026-08-10T10:40:01Z
- session: O 4400.0 H 4421.5 L 4373.8999 · gap +59.2998
- prior: H 4371.5 L 4274.0 C 4340.7002
- basis: bars (`yahoo:GC=F:1d`) run +61.2002 (+141.0 bps) vs anchor
- ATR14: 78.9267 pts (1.793%) · RSI14: 67.8
- EMA: mixed / no clean stack
- MACD: bullish (hist 45.6349)
- VWAP (UTC day): 4398.4536 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29722.3027** (STALE) as-of 2026-08-07T20:00:00Z
- session: O 29596.4492 H 29747.1504 L 29452.7109 · gap +223.1191
- prior: H 29569.7598 L 29123.3809 C 29373.3301
- ATR14: 614.3637 pts (2.067%) · RSI14: 57.25
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 181.918)
- VWAP (session): 29635.5048 — price above
- OR15: 29595.2148–29701.5059
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:40)

## BTCUSD — MAP_ONLY
- price: **64974.56** (SINGLE) as-of 2026-08-10T10:40:20Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 13782 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 13785 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3760 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:40)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 11674 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
