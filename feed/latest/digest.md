# Feed digest — 2026-09-30T11:50:21Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260930T115021Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4186.2002** (SINGLE) as-of 2026-09-30T11:50:17Z
- session: O 4216.2002 H 4234.0 L 4197.6001 · gap +36.5
- prior: H 4218.1001 L 4145.2002 C 4179.7002
- basis: bars (`yahoo:GC=F:1d`) run +34.6997 (+82.9 bps) vs anchor
- ATR14: 97.9707 pts (2.321%) · RSI14: 38.51
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -26.8282)
- VWAP (UTC day): 4216.2116 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30339.332** (STALE) as-of 2026-09-29T20:00:00Z
- session: O 30412.2891 H 30429.9707 L 30235.6602 · gap +135.4785
- prior: H 30480.4004 L 30081.0605 C 30276.8105
- ATR14: 385.7203 pts (1.271%) · RSI14: 59.3
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 91.7445)
- VWAP (session): 30331.9402 — price above
- OR15: 30272.707–30425.7598
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:50)

## BTCUSD — MAP_ONLY
- price: **83849.18** (SINGLE) as-of 2026-09-30T11:50:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 87292 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 87295 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 950 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:50)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 85184 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
