# Feed digest — 2026-09-11T22:35:27Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260911T223527Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4349.7002** (STALE) as-of 2026-09-11T22:34:58Z
- session: O 4359.3999 H 4444.8999 L 4333.0 · gap -5.1001
- prior: H 4420.0 L 4330.7002 C 4364.5
- basis: bars (`yahoo:GC=F:1d`) run +40.2998 (+92.6 bps) vs anchor
- ATR14: 78.9077 pts (1.797%) · RSI14: 49.65
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -26.7335)
- VWAP (UTC day): 4397.2409 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29368.4395** (STALE) as-of 2026-09-11T20:00:00Z
- session: O 29331.4805 H 29473.1172 L 29313.5117 · gap +227.9707
- prior: H 29250.4102 L 29038.2207 C 29103.5098
- ATR14: 368.0769 pts (1.253%) · RSI14: 50.66
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.9739)
- VWAP (session): 29403.6935 — price below
- OR15: 29326.4863–29408.8047
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:35)

## BTCUSD — MAP_ONLY
- price: **77070.92** (SINGLE) as-of 2026-09-11T22:35:28Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 60577 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 60580 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 79 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:35)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 58469 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
