# Feed digest — 2026-09-14T11:38:38Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260914T113838Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4294.1001** (SINGLE) as-of 2026-09-14T11:38:37Z
- session: O 4375.0 H 4396.7998 L 4317.2998 · gap +8.7998
- prior: H 4389.5 L 4365.7998 C 4366.2002
- basis: bars (`yahoo:GC=F:1d`) run +42.6001 (+99.2 bps) vs anchor
- ATR14: 73.1912 pts (1.688%) · RSI14: 45.74
- EMA: mixed / no clean stack
- MACD: bearish (hist -29.3765)
- VWAP (UTC day): 4355.7147 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29368.4395** (STALE) as-of 2026-09-11T20:00:00Z
- session: O 29331.4805 H 29473.1191 L 29313.5098 · gap +227.9707
- prior: H 29250.4102 L 29038.2207 C 29103.5098
- ATR14: 368.0771 pts (1.253%) · RSI14: 50.66
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.9739)
- VWAP (session): 29404.6256 — price below
- OR15: 29326.4863–29408.8047
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:38)

## BTCUSD — MAP_ONLY
- price: **77785.42** (SINGLE) as-of 2026-09-14T11:38:40Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 64241 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 64244 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3819 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:38)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 62133 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
