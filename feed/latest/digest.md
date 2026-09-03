# Feed digest — 2026-09-03T10:36:06Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260903T103606Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4423.6001** (SINGLE) as-of 2026-09-03T10:35:54Z
- session: O 4436.3999 H 4490.0 L 4426.7002 · gap +70.1001
- prior: H 4390.2002 L 4292.2002 C 4366.2998
- basis: bars (`yahoo:GC=F:1d`) run +45.3999 (+102.6 bps) vs anchor
- ATR14: 82.2131 pts (1.84%) · RSI14: 55.53
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -23.8155)
- VWAP (UTC day): 4469.2202 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29143.3301** (STALE) as-of 2026-09-02T20:00:00Z
- session: O 29016.0 H 29165.6191 L 28971.9004 · gap -61.2207
- prior: H 29267.4199 L 28953.2598 C 29077.2207
- ATR14: 400.3292 pts (1.374%) · RSI14: 47.56
- EMA: mixed / no clean stack
- MACD: bearish (hist -46.2349)
- VWAP (session): 29101.9823 — price above
- OR15: 28991.8105–29067.0371
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:36)

## BTCUSD — MAP_ONLY
- price: **77502.35** (SINGLE) as-of 2026-09-03T10:36:08Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 48338 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 48341 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 876 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:36)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 46230 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
