# Feed digest — 2026-09-02T22:38:58Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260902T223858Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4388.7998** (SINGLE) as-of 2026-09-02T22:38:53Z
- session: O 4436.3999 H 4438.1001 L 4432.6001 · gap +88.3999
- prior: H 4402.0 L 4329.1001 C 4348.0
- basis: bars (`yahoo:GC=F:1d`) run +46.0 (+104.8 bps) vs anchor
- ATR14: 78.4601 pts (1.769%) · RSI14: 53.09
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -21.698)
- VWAP (UTC day): 4389.9827 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29143.3301** (STALE) as-of 2026-09-02T20:00:00Z
- session: O 29015.9961 H 29165.623 L 28971.8984 · gap -61.2246
- prior: H 29267.4199 L 28953.2598 C 29077.2207
- ATR14: 413.6323 pts (1.419%) · RSI14: 47.8
- EMA: mixed / no clean stack
- MACD: bearish (hist -47.3198)
- VWAP (session): 29099.8884 — price above
- OR15: 28991.8105–29067.0371
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:38)

## BTCUSD — MAP_ONLY
- price: **77088.1** (SINGLE) as-of 2026-09-02T22:38:59Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 47621 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 47624 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 83 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:38)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 45513 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
