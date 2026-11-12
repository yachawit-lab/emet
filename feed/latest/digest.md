# Feed digest — 2026-11-12T21:08:26Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261112T210826Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3874.2** (SINGLE) as-of 2026-11-12T21:08:11Z
- session: O 3994.0 H 4005.8999 L 3857.1001 · gap -6.5
- prior: H 4074.7 L 3989.6001 C 4000.5
- basis: bars (`yahoo:GC=F:1d`) run +5.0 (+12.9 bps) vs anchor
- ATR14: 94.4379 pts (2.434%) · RSI14: 35.55
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -0.1166)
- VWAP (UTC day): 3915.4216 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28289.188** (STALE) as-of 2026-11-12T21:08:27Z
- session: O 27953.9082 H 28548.5508 L 27940.584 · gap -420.3418
- prior: H 28593.5195 L 28102.75 C 28374.25
- basis: bars (`yahoo:^NDX:1d`) run -0.0005 (-0.0 bps) vs anchor
- ATR14: 663.0912 pts (2.344%) · RSI14: 45.3
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -22.6581)
- VWAP (session): 28285.8684 — price below
- OR15: 27948.3887–28285.7559
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:08)

## BTCUSD — MAP_ONLY
- price: **71350.09** (SINGLE) as-of 2026-11-12T21:08:27Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 149770 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 149773 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:08)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 147662 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
