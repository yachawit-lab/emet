# Feed digest — 2026-11-19T21:51:28Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261119T215128Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3629.55** (SINGLE) as-of 2026-11-19T21:51:04Z
- session: O 3855.2 H 3759.5 L 3620.6001 · gap +113.3
- prior: H 3859.3 L 3721.8 C 3741.8999
- basis: bars (`yahoo:GC=F:1d`) run -0.35 (-1.0 bps) vs anchor
- ATR14: 94.8882 pts (2.615%) · RSI14: 25.08
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -29.0322)
- VWAP (UTC day): 3705.6362 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26517.052** (STALE) as-of 2026-11-19T21:51:29Z
- session: O 27574.2363 H 27749.3477 L 26481.8184 · gap +457.9766
- prior: H 27236.1191 L 26848.9199 C 27116.2598
- basis: bars (`yahoo:^NDX:1d`) run -0.0012 (-0.0 bps) vs anchor
- ATR14: 697.6252 pts (2.631%) · RSI14: 33.78
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -91.2836)
- VWAP (session): 27111.0478 — price below
- OR15: 27559.9316–27740.0
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:51)

## BTCUSD — MAP_ONLY
- price: **61455.04** (SINGLE) as-of 2026-11-19T21:51:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 159893 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 159896 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 157785 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
