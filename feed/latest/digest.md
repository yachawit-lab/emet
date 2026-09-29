# Feed digest — 2026-09-29T23:43:46Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260929T234346Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4181.2002** (SINGLE) as-of 2026-09-29T23:43:41Z
- session: O 4216.2002 H 4217.2998 L 4209.2002 · gap +47.8003
- prior: H 4315.6001 L 4143.1001 C 4168.3999
- basis: bars (`yahoo:GC=F:1d`) run +30.3999 (+72.7 bps) vs anchor
- ATR14: 99.6157 pts (2.365%) · RSI14: 37.35
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -27.5234)
- VWAP (UTC day): 4183.8738 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30339.332** (STALE) as-of 2026-09-29T20:00:00Z
- session: O 30412.291 H 30429.9746 L 30235.666 · gap +135.4805
- prior: H 30480.4004 L 30081.0605 C 30276.8105
- ATR14: 385.7202 pts (1.271%) · RSI14: 59.3
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 91.7446)
- VWAP (session): 30333.0355 — price above
- OR15: 30272.707–30425.7598
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:43)

## BTCUSD — MAP_ONLY
- price: **83600.06** (SINGLE) as-of 2026-09-29T23:43:48Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 86566 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 86569 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 148 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:43)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 84458 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
