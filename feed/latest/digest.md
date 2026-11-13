# Feed digest — 2026-11-13T20:23:25Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261113T202325Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3879.25** (SINGLE) as-of 2026-11-13T20:23:25Z
- session: O 3883.3 H 3927.2 L 3871.1001 · gap -2.0
- prior: H 4005.8999 L 3856.7 C 3885.3
- basis: bars (`yahoo:GC=F:1d`) run +0.6499 (+1.7 bps) vs anchor
- ATR14: 91.7267 pts (2.364%) · RSI14: 35.56
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -5.7034)
- VWAP (UTC day): 3895.9895 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **27935.062** (STALE) as-of 2026-11-13T20:23:26Z
- session: O 28265.5371 H 28295.7988 L 27609.7129 · gap -23.6523
- prior: H 28548.5508 L 27940.5801 C 28289.1895
- basis: bars (`yahoo:^NDX:1d`) run -0.3159 (-0.1 bps) vs anchor
- ATR14: 664.734 pts (2.38%) · RSI14: 42.6
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -5.0121)
- VWAP (session): 27869.6829 — price above
- OR15: 28109.8145–28295.7988
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:23)

## BTCUSD — MAP_ONLY
- price: **68999.32** (SINGLE) as-of 2026-11-13T20:23:26Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 151165 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 151168 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:23)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 149057 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
