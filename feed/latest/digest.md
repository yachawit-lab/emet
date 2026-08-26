# Feed digest — 2026-08-26T23:33:24Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260826T233324Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4619.6001** (SINGLE) as-of 2026-08-26T23:33:14Z
- session: O 4650.0 H 4676.0 L 4648.1001 · gap +11.8999
- prior: H 4638.1001 L 4626.2002 C 4638.1001
- basis: bars (`yahoo:GC=F:1d`) run +55.6997 (+120.6 bps) vs anchor
- ATR14: 73.1178 pts (1.564%) · RSI14: 75.52
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 33.516)
- VWAP (UTC day): 4673.1207 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29224.5215** (STALE) as-of 2026-08-26T20:00:00Z
- session: O 29130.7695 H 29296.7676 L 29096.8418 · gap -78.4609
- prior: H 29338.7695 L 29077.7207 C 29209.2305
- ATR14: 432.6589 pts (1.48%) · RSI14: 49.15
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -49.6429)
- VWAP (session): 29202.7851 — price above
- OR15: 29135.5781–29239.4141
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:33)

## BTCUSD — MAP_ONLY
- price: **78915.42** (SINGLE) as-of 2026-08-26T23:33:31Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 37595 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 37598 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 137 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:33)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 35487 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
