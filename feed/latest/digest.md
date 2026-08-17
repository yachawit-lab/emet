# Feed digest — 2026-08-17T14:05:17Z

**Desk grade: MAP_ONLY** (schema v1, run `20260817T140517Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4409.2998** (SINGLE) as-of 2026-08-17T14:05:03Z
- session: O 4440.0 H 4473.2002 L 4422.2998 · gap +59.6001
- prior: H 4397.1001 L 4315.0 C 4380.3999
- basis: bars (`yahoo:GC=F:1d`) run +50.3003 (+114.1 bps) vs anchor
- ATR14: 76.4914 pts (1.715%) · RSI14: 68.82
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 36.6539)
- VWAP (UTC day): 4451.817 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30109.51** (SINGLE) as-of 2026-08-17T14:05:18Z
- session: O 30150.7754 H 30173.0996 L 30075.7305 · gap +104.6348
- prior: H 30179.8203 L 29934.6602 C 30046.1406
- basis: bars (`yahoo:^NDX:1d`) run -0.0002 (-0.0 bps) vs anchor
- ATR14: 489.2673 pts (1.625%) · RSI14: 60.23
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 170.7777)
- VWAP (session): 30121.015 — price below
- OR15: 30078.8848–30172.9453

## BTCUSD — MAP_ONLY
- price: **63551.23** (SINGLE) as-of 2026-08-17T14:05:19Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 24067 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 24070 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 21959 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
