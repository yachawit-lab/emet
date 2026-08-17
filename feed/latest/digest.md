# Feed digest — 2026-08-17T21:04:16Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260817T210416Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4417.8999** (SINGLE) as-of 2026-08-17T21:04:03Z
- session: O 4440.0 H 4486.5 L 4422.2998 · gap +59.6001
- prior: H 4397.1001 L 4315.0 C 4380.3999
- basis: bars (`yahoo:GC=F:1d`) run +53.8003 (+121.8 bps) vs anchor
- ATR14: 77.4414 pts (1.732%) · RSI14: 69.38
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 37.4261)
- VWAP (UTC day): 4461.2924 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29995.381** (STALE) as-of 2026-08-17T21:04:16Z
- session: O 30150.7754 H 30195.7188 L 29971.9238 · gap +104.6348
- prior: H 30179.8203 L 29934.6602 C 30046.1406
- basis: bars (`yahoo:^NDX:1d`) run -0.0001 (-0.0 bps) vs anchor
- ATR14: 496.1858 pts (1.654%) · RSI14: 58.91
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 163.4991)
- VWAP (session): 30084.318 — price below
- OR15: 30078.8848–30172.9453
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:04)

## BTCUSD — MAP_ONLY
- price: **64349.11** (SINGLE) as-of 2026-08-17T21:04:17Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 24486 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 24489 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:04)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 22378 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
