# Feed digest — 2026-11-09T22:55:17Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261109T225517Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4141.3999** (SINGLE) as-of 2026-11-09T22:54:59Z
- session: O 4074.3 H 4157.5 L 4062.5 · gap -0.5999
- prior: H 4116.2002 L 4035.1001 C 4074.8999
- basis: bars (`yahoo:GC=F:1d`) run +8.1001 (+19.6 bps) vs anchor
- ATR14: 87.197 pts (2.101%) · RSI14: 52.79
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 18.8199)
- VWAP (UTC day): 4123.8933 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27907.625** (STALE) as-of 2026-11-09T22:15:59Z
- session: O 27263.4277 H 28025.7734 L 27227.5332 · gap +273.4375
- prior: H 27316.0898 L 26887.6895 C 26989.9902
- basis: bars (`yahoo:^NDX:1d`) run +0.0 (+0.0 bps) vs anchor
- ATR14: 659.5311 pts (2.363%) · RSI14: 41.1
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -204.8919)
- VWAP (session): 27730.9066 — price above
- OR15: 27234.5762–27569.6855
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:55)

## BTCUSD — MAP_ONLY
- price: **75178.43** (SINGLE) as-of 2026-11-09T22:55:24Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 145557 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 145560 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:55)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 143449 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
