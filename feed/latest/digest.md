# Feed digest — 2026-08-14T21:03:35Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260814T210335Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4377.6001** (STALE) as-of 2026-08-14T21:03:24Z
- session: O 4408.2002 H 4454.6001 L 4365.5 · gap +44.6001
- prior: H 4445.0 L 4350.0 C 4363.6001
- basis: bars (`yahoo:GC=F:1d`) run +53.5 (+122.2 bps) vs anchor
- ATR14: 75.8726 pts (1.712%) · RSI14: 67.23
- EMA: mixed / no clean stack
- MACD: bullish (hist 39.8109)
- VWAP (UTC day): 4418.35 — price above
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30046.141** (STALE) as-of 2026-08-14T21:03:36Z
- session: O 30167.125 H 30179.8223 L 29934.6582 · gap +82.625
- prior: H 30168.0508 L 29757.6191 C 30084.5
- basis: bars (`yahoo:^NDX:1d`) run -0.0004 (-0.0 bps) vs anchor
- ATR14: 517.1374 pts (1.721%) · RSI14: 59.63
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 179.4507)
- VWAP (session): 30034.656 — price above
- OR15: 30079.9746–30176.6797
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:03)

## BTCUSD — MAP_ONLY
- price: **62851.54** (SINGLE) as-of 2026-08-14T21:03:36Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 20166 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 20169 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:03)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 18058 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
