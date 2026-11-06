# Feed digest — 2026-11-06T00:57:38Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261106T005738Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4098.2002** (SINGLE) as-of 2026-11-06T00:57:33Z
- session: O 4098.5 H 4116.1001 L 4080.3999 · gap +25.5
- prior: H 4081.2 L 3928.2 C 4073.0
- basis: bars (`yahoo:GC=F:1d`) run +7.2998 (+17.8 bps) vs anchor
- ATR14: 83.7557 pts (2.04%) · RSI14: 49.44
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 7.8318)
- VWAP (UTC day): 4109.2035 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26629.8086** (STALE) as-of 2026-11-05T21:00:00Z
- session: O 28078.1855 H 28078.1855 L 26606.4277 · gap -358.9844
- prior: H 28829.6602 L 28276.2207 C 28437.1699
- ATR14: 626.3034 pts (2.352%) · RSI14: 27.0
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -253.9469)
- VWAP (session): 27109.2147 — price below
- OR15: 27585.1543–28071.373
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 00:57)

## BTCUSD — MAP_ONLY
- price: **76193.56** (SINGLE) as-of 2026-11-06T00:57:39Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 139920 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 139923 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 162 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 00:57)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 137812 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
