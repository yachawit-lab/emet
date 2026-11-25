# Feed digest — 2026-11-25T22:49:09Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261125T224909Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3588.3999** (SINGLE) as-of 2026-11-25T22:48:46Z
- session: O 3559.3 H 3617.5 L 3453.8 · gap -2.5999
- prior: H 3676.7 L 3545.3999 C 3561.8999
- basis: bars (`yahoo:GC=F:1d`) run +29.4001 (+81.9 bps) vs anchor
- ATR14: 112.2073 pts (3.102%) · RSI14: 34.24
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -30.405)
- VWAP (UTC day): 3529.0994 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26046.897** (STALE) as-of 2026-11-25T22:15:59Z
- session: O 25309.6113 H 26081.6465 L 24970.6582 · gap -904.5586
- prior: H 26433.5996 L 25935.4707 C 26214.1699
- basis: bars (`yahoo:^NDX:1d`) run -0.0005 (-0.0 bps) vs anchor
- ATR14: 875.6926 pts (3.362%) · RSI14: 38.39
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -104.4547)
- VWAP (session): 25417.8339 — price above
- OR15: 25002.373–25330.043
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:49)

## BTCUSD — MAP_ONLY
- price: **60115.56** (SINGLE) as-of 2026-11-25T22:49:11Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 168591 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 168594 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:49)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 166483 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
