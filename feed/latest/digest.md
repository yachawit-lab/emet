# Feed digest — 2026-10-09T18:42:34Z

**Desk grade: MAP_ONLY** (schema v1, run `20261009T184234Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4196.6001** (SINGLE) as-of 2026-10-09T18:42:21Z
- session: O 4159.7002 H 4233.7002 L 4156.1001 · gap +2.7002
- prior: H 4170.7002 L 4128.1001 C 4157.0
- basis: bars (`yahoo:GC=F:1d`) run +22.2998 (+53.1 bps) vs anchor
- ATR14: 88.9197 pts (2.108%) · RSI14: 43.79
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -6.1965)
- VWAP (UTC day): 4209.3577 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30872.907** (SINGLE) as-of 2026-10-09T18:42:36Z
- session: O 30900.0645 H 30946.7383 L 30770.0547 · gap +174.2539
- prior: H 31125.1309 L 30556.4004 C 30725.8105
- basis: bars (`yahoo:^NDX:1d`) run +2.4114 (+0.8 bps) vs anchor
- ATR14: 375.4169 pts (1.216%) · RSI14: 60.79
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 34.5269)
- VWAP (session): 30842.13 — price above
- OR15: 30799.5059–30945.8203

## BTCUSD — MAP_ONLY
- price: **82363.31** (SINGLE) as-of 2026-10-09T18:42:36Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 100665 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 100668 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 98557 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
