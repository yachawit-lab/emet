# Feed digest — 2026-11-11T13:28:14Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261111T132814Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4039.3999** (SINGLE) as-of 2026-11-11T13:27:59Z
- session: O 4043.7 H 4074.7 L 4034.1001 · gap +13.5
- prior: H 4156.2002 L 4020.8 C 4030.2
- basis: bars (`yahoo:GC=F:1d`) run +14.9001 (+36.9 bps) vs anchor
- ATR14: 87.3567 pts (2.155%) · RSI14: 46.26
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 13.4707)
- VWAP (UTC day): 4057.7227 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27740.7949** (STALE) as-of 2026-11-10T21:00:00Z
- session: O 27649.6309 H 27990.3398 L 27421.1797 · gap -258.0
- prior: H 28025.7695 L 27227.5293 C 27907.6309
- ATR14: 653.0758 pts (2.354%) · RSI14: 39.99
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -159.2873)
- VWAP (session): 27679.3597 — price below
- OR15: 27541.0–27758.5898
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 13:28)

## BTCUSD — MAP_ONLY
- price: **73810.73** (SINGLE) as-of 2026-11-11T13:28:15Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 147870 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 147873 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1048 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 13:28)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 145762 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
