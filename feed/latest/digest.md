# Feed digest — 2026-11-05T00:53:47Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261105T005347Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4096.5** (SINGLE) as-of 2026-11-05T00:53:30Z
- session: O 4075.3999 H 4104.2002 L 4067.0 · gap +135.0
- prior: H 3981.7 L 3904.1001 C 3940.3999
- basis: bars (`yahoo:GC=F:1d`) run +1.5 (+3.7 bps) vs anchor
- ATR14: 87.654 pts (2.139%) · RSI14: 48.74
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.6684)
- VWAP (UTC day): 4090.1555 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28437.166** (STALE) as-of 2026-11-04T21:00:00Z
- session: O 28346.8086 H 28829.6621 L 28276.2188 · gap +166.5488
- prior: H 28307.9004 L 28085.5 C 28180.2598
- ATR14: 533.6564 pts (1.877%) · RSI14: 38.47
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -164.1712)
- VWAP (session): 28561.7353 — price below
- OR15: 28286.498–28671.4961
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 00:53)

## BTCUSD — MAP_ONLY
- price: **80636.55** (SINGLE) as-of 2026-11-05T00:53:48Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 138476 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 138479 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 158 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 00:53)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 136368 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
