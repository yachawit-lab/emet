# Feed digest — 2026-11-06T13:40:23Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261106T134023Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4053.5** (SINGLE) as-of 2026-11-06T13:40:04Z
- session: O 4098.5 H 4116.2002 L 4037.0 · gap -15.0
- prior: H 4155.7998 L 4067.0 C 4113.5
- basis: bars (`yahoo:GC=F:1d`) run -1.7 (-4.2 bps) vs anchor
- ATR14: 86.4603 pts (2.134%) · RSI14: 45.61
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 10.4004)
- VWAP (UTC day): 4073.2504 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26629.8086** (STALE) as-of 2026-11-05T21:00:00Z
- session: O 28078.1895 H 28078.1895 L 26606.4297 · gap -358.9805
- prior: H 28829.6602 L 28276.2207 C 28437.1699
- ATR14: 626.3033 pts (2.352%) · RSI14: 27.0
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -253.9467)
- VWAP (session): 27082.1938 — price below
- OR15: 27585.1543–28071.373

## BTCUSD — MAP_ONLY
- price: **75684.33** (SINGLE) as-of 2026-11-06T13:40:25Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 140682 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 140685 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1060 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 138574 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
