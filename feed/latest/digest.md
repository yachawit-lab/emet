# Feed digest — 2026-11-07T00:06:36Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261107T000636Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4072.1001** (STALE) as-of 2026-11-07T00:06:35Z
- session: O 4098.5 H 4116.2002 L 4035.6001 · gap -15.0
- prior: H 4155.7998 L 4067.0 C 4113.5
- basis: bars (`yahoo:GC=F:1d`) run +7.3999 (+18.2 bps) vs anchor
- ATR14: 86.5603 pts (2.122%) · RSI14: 47.49
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 12.1682)
- VWAP (UTC day): 4068.0446 — price above
- ⚠ spot metals/FX closed — weekend
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26989.9922** (STALE) as-of 2026-11-06T21:00:00Z
- session: O 27045.2559 H 27316.0938 L 26887.6934 · gap +415.4453
- prior: H 28078.1895 L 26606.4297 C 26629.8105
- ATR14: 630.5888 pts (2.336%) · RSI14: 31.39
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -270.8076)
- VWAP (session): 27093.2715 — price above
- OR15: 26953.0957–27206.5625
- ⚠ US equities closed — weekend

## BTCUSD — MAP_ONLY
- price: **75809.57** (SINGLE) as-of 2026-11-07T00:06:37Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 141309 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — weekend
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 141312 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 111 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — weekend
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 139201 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
