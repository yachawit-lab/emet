# Feed digest — 2026-11-28T02:41:03Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261128T024103Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **3650.0** (STALE) as-of 2026-11-28T02:40:51Z
- session: O 3619.8 H 3711.8999 L 3578.8 · gap +84.0
- prior: H 3588.8999 L 3425.2 C 3535.8
- basis: bars (`yahoo:GC=F:1d`) run +18.5 (+50.7 bps) vs anchor
- ATR14: 116.7707 pts (3.183%) · RSI14: 38.86
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -23.9729)
- VWAP (UTC day): 3659.3636 — price above
- ⚠ spot metals/FX closed — weekend
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26726.3887** (STALE) as-of 2026-11-27T18:00:00Z
- session: O 26479.9707 H 26757.1973 L 26166.8652 · gap +433.0703
- prior: H 26081.6504 L 24970.6602 C 26046.9004
- ATR14: 863.8892 pts (3.232%) · RSI14: 43.73
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -41.0712)
- VWAP (session): 26499.0351 — price above
- OR15: 26219.1973–26477.4141
- ⚠ US equities closed — weekend

## BTCUSD — MAP_ONLY
- price: **59977.02** (SINGLE) as-of 2026-11-28T02:41:05Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 171703 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — weekend
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 171706 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 445 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — weekend
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 169595 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
