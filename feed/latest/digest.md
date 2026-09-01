# Feed digest — 2026-09-01T11:00:39Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260901T110039Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4380.0** (SINGLE) as-of 2026-09-01T11:00:19Z
- session: O 4498.7002 H 4510.5 L 4413.0 · gap +67.6001
- prior: H 4466.8999 L 4410.8999 C 4431.1001
- basis: bars (`yahoo:GC=F:1d`) run +46.0 (+105.0 bps) vs anchor
- ATR14: 77.2433 pts (1.745%) · RSI14: 52.72
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -13.3798)
- VWAP (UTC day): 4457.3012 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29456.9727** (STALE) as-of 2026-08-31T20:00:00Z
- session: O 29404.2891 H 29483.9004 L 29304.4902 · gap -29.1406
- prior: H 29752.7793 L 29383.9199 C 29433.4297
- ATR14: 409.4968 pts (1.39%) · RSI14: 52.07
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -16.2967)
- VWAP (session): 29376.2353 — price above
- OR15: 29342.5488–29460.5137
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:00)

## BTCUSD — MAP_ONLY
- price: **77963.01** (SINGLE) as-of 2026-09-01T11:00:41Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 45483 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 45486 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 901 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:00)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 43375 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
