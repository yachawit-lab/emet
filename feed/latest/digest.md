# Feed digest — 2026-10-20T23:10:51Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261020T231051Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4121.2998** (SINGLE) as-of 2026-10-20T23:10:40Z
- session: O 4143.3999 H 4149.7998 L 4138.1001 · gap -16.7002
- prior: H 4211.2002 L 4155.6001 C 4160.1001
- basis: bars (`yahoo:GC=F:1d`) run +16.9004 (+41.0 bps) vs anchor
- ATR14: 77.4709 pts (1.872%) · RSI14: 39.85
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 3.727)
- VWAP (UTC day): 4147.4472 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29490.2832** (STALE) as-of 2026-10-20T20:00:00Z
- session: O 29393.9648 H 29711.5293 L 29208.8281 · gap -135.3848
- prior: H 29788.7598 L 29461.3203 C 29529.3496
- ATR14: 449.529 pts (1.524%) · RSI14: 40.72
- EMA: mixed / no clean stack
- MACD: bearish (hist -204.7316)
- VWAP (session): 29523.9157 — price below
- OR15: 29222.4414–29387.1133
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:10)

## BTCUSD — MAP_ONLY
- price: **82881.43** (SINGLE) as-of 2026-10-20T23:10:53Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 116773 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 116776 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 115 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:10)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 114665 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
