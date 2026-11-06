# Feed digest — 2026-11-06T18:16:58Z

**Desk grade: MAP_ONLY** (schema v1, run `20261106T181658Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4062.8999** (SINGLE) as-of 2026-11-06T18:16:35Z
- session: O 4098.5 H 4116.2002 L 4035.6001 · gap -15.0
- prior: H 4155.7998 L 4067.0 C 4113.5
- basis: bars (`yahoo:GC=F:1d`) run +8.6001 (+21.2 bps) vs anchor
- ATR14: 86.5603 pts (2.126%) · RSI14: 46.93
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 11.6576)
- VWAP (UTC day): 4066.8072 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **26961.77** (SINGLE) as-of 2026-11-06T18:17:04Z
- session: O 27045.2559 H 27316.0938 L 26887.6934 · gap +415.4453
- prior: H 28078.1895 L 26606.4297 C 26629.8105
- basis: bars (`yahoo:^NDX:1d`) run -4.0278 (-1.5 bps) vs anchor
- ATR14: 630.5875 pts (2.339%) · RSI14: 31.02
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -272.8711)
- VWAP (session): 27102.7487 — price below
- OR15: 26953.0957–27206.5625

## BTCUSD — MAP_ONLY
- price: **75665.22** (SINGLE) as-of 2026-11-06T18:17:04Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 140959 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 140962 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 138851 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
