# Feed digest — 2026-08-24T20:48:43Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260824T204843Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4651.2002** (SINGLE) as-of 2026-08-24T20:48:16Z
- session: O 4673.3999 H 4738.5 L 4651.7998 · gap +49.2998
- prior: H 4624.1001 L 4560.0 C 4624.1001
- basis: bars (`yahoo:GC=F:1d`) run +53.6997 (+115.5 bps) vs anchor
- ATR14: 85.3634 pts (1.814%) · RSI14: 76.47
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 40.4802)
- VWAP (UTC day): 4705.7226 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29023.182** (STALE) as-of 2026-08-24T20:48:43Z
- session: O 29094.7188 H 29151.9746 L 28875.9648 · gap -214.1406
- prior: H 29405.1191 L 29142.4395 C 29308.8594
- basis: bars (`yahoo:^NDX:1d`) run -0.0004 (-0.0 bps) vs anchor
- ATR14: 460.9417 pts (1.588%) · RSI14: 46.31
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -36.8559)
- VWAP (session): 29030.135 — price below
- OR15: 28914.75–29087.8828
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:48)

## BTCUSD — MAP_ONLY
- price: **78891.82** (SINGLE) as-of 2026-08-24T20:48:44Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 34551 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 34554 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:48)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 32443 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
