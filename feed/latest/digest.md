# Feed digest — 2026-10-09T00:23:15Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261009T002315Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4147.1001** (SINGLE) as-of 2026-10-09T00:23:09Z
- session: O 4159.7002 H 4175.2998 L 4156.1001 · gap +19.0
- prior: H 4197.7998 L 4091.2 C 4140.7002
- basis: bars (`yahoo:GC=F:1d`) run +24.0 (+57.9 bps) vs anchor
- ATR14: 89.219 pts (2.139%) · RSI14: 38.15
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -12.5292)
- VWAP (UTC day): 4171.3406 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30725.8086** (STALE) as-of 2026-10-08T20:00:00Z
- session: O 30985.2324 H 31125.1309 L 30556.3965 · gap -174.8477
- prior: H 31170.1191 L 30904.4609 C 31160.0801
- ATR14: 387.3009 pts (1.261%) · RSI14: 58.76
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 55.3485)
- VWAP (session): 30844.6977 — price below
- OR15: 30960.2031–31036.6328
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 00:23)

## BTCUSD — MAP_ONLY
- price: **81698.45** (SINGLE) as-of 2026-10-09T00:23:17Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 99565 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 99568 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 187 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 00:23)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 97457 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
