# Feed digest — 2026-09-04T22:21:10Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260904T222110Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4431.1001** (STALE) as-of 2026-09-04T22:20:57Z
- session: O 4522.0 H 4537.7998 L 4412.0 · gap +30.2998
- prior: H 4510.0 L 4426.0 C 4491.7002
- basis: bars (`yahoo:GC=F:1d`) run +46.1001 (+104.0 bps) vs anchor
- ATR14: 86.6539 pts (1.935%) · RSI14: 55.71
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.5786)
- VWAP (UTC day): 4479.2012 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29544.1543** (STALE) as-of 2026-09-04T20:00:00Z
- session: O 29539.5664 H 29655.2227 L 29440.1465 · gap +57.2461
- prior: H 29538.7598 L 29160.9609 C 29482.3203
- ATR14: 386.7713 pts (1.309%) · RSI14: 53.58
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -11.5778)
- VWAP (session): 29528.5743 — price above
- OR15: 29520.3105–29604.7812
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:21)

## BTCUSD — MAP_ONLY
- price: **79715.75** (SINGLE) as-of 2026-09-04T22:21:12Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 50483 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 50486 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 65 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:21)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 48375 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
