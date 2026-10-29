# Feed digest — 2026-10-29T12:11:41Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261029T121141Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4027.7** (SINGLE) as-of 2026-10-29T12:11:38Z
- session: O 4081.3999 H 4081.7 L 4027.0 · gap +29.7998
- prior: H 4097.2002 L 4036.8999 C 4051.6001
- basis: bars (`yahoo:GC=F:1d`) run +3.3 (+8.2 bps) vs anchor
- ATR14: 74.6475 pts (1.852%) · RSI14: 35.9
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -3.6095)
- VWAP (UTC day): 4048.8137 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29813.1562** (STALE) as-of 2026-10-28T20:00:00Z
- session: O 29732.0391 H 29848.7109 L 29618.4199 · gap +80.5996
- prior: H 29719.6309 L 29340.5391 C 29651.4395
- ATR14: 453.8976 pts (1.522%) · RSI14: 49.43
- EMA: mixed / no clean stack
- MACD: bearish (hist -84.6964)
- VWAP (session): 29712.184 — price above
- OR15: 29712.6797–29794.043
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:11)

## BTCUSD — MAP_ONLY
- price: **80035.27** (SINGLE) as-of 2026-10-29T12:11:43Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 129074 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 129077 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 972 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:11)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 126966 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
