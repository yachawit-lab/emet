# Feed digest — 2026-11-25T20:35:41Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261125T203541Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3571.55** (SINGLE) as-of 2026-11-25T20:35:16Z
- session: O 3559.3 H 3608.8999 L 3453.8 · gap -2.5999
- prior: H 3676.7 L 3545.3999 C 3561.8999
- basis: bars (`yahoo:GC=F:1d`) run +32.95 (+92.3 bps) vs anchor
- ATR14: 111.593 pts (3.096%) · RSI14: 33.28
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -31.2538)
- VWAP (UTC day): 3525.947 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **25906.294** (STALE) as-of 2026-11-25T20:35:42Z
- session: O 25309.6113 H 26081.6465 L 24970.6582 · gap -904.5586
- prior: H 26433.5996 L 25935.4707 C 26214.1699
- basis: bars (`yahoo:^NDX:1d`) run -0.7393 (-0.3 bps) vs anchor
- ATR14: 875.6926 pts (3.38%) · RSI14: 37.69
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -113.4748)
- VWAP (session): 25417.8339 — price above
- OR15: 25002.373–25330.043
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:35)

## BTCUSD — MAP_ONLY
- price: **59908.2** (SINGLE) as-of 2026-11-25T20:35:42Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 168458 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 168461 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:35)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 166350 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
