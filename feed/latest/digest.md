# Feed digest — 2026-09-23T17:59:01Z

**Desk grade: MAP_ONLY** (schema v1, run `20260923T175901Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4292.7998** (SINGLE) as-of 2026-09-23T17:58:42Z
- session: O 4394.7002 H 4407.5 L 4310.7002 · gap +18.3003
- prior: H 4414.1001 L 4327.6001 C 4376.3999
- basis: bars (`yahoo:GC=F:1d`) run +32.9004 (+76.6 bps) vs anchor
- ATR14: 103.6437 pts (2.396%) · RSI14: 42.3
- EMA: mixed / no clean stack
- MACD: bearish (hist -18.9091)
- VWAP (UTC day): 4343.2934 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30477.23** (SINGLE) as-of 2026-09-23T17:58:49Z
- session: O 30706.2324 H 30706.2324 L 30353.8848 · gap +223.8828
- prior: H 30557.3398 L 29933.2207 C 30482.3496
- basis: bars (`yahoo:^NDX:1d`) run -0.8862 (-0.3 bps) vs anchor
- ATR14: 413.8411 pts (1.358%) · RSI14: 65.58
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 118.6742)
- VWAP (session): 30479.7668 — price below
- OR15: 30611.4121–30696.2754

## BTCUSD — MAP_ONLY
- price: **84302.79** (SINGLE) as-of 2026-09-23T17:59:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 77581 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 77584 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 75473 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
