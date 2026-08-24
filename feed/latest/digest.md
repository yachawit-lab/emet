# Feed digest — 2026-08-24T11:56:00Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260824T115600Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4660.7998** (SINGLE) as-of 2026-08-24T11:55:46Z
- session: O 4673.3999 H 4728.2998 L 4651.7998 · gap +49.2998
- prior: H 4624.1001 L 4560.0 C 4624.1001
- basis: bars (`yahoo:GC=F:1d`) run +56.7002 (+121.7 bps) vs anchor
- ATR14: 84.6348 pts (1.794%) · RSI14: 76.85
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 41.2843)
- VWAP (UTC day): 4695.7452 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29308.8594** (STALE) as-of 2026-08-21T20:00:00Z
- session: O 29359.5996 H 29405.1191 L 29142.4395 · gap +146.4395
- prior: H 29378.8008 L 29118.0703 C 29213.1602
- ATR14: 463.0959 pts (1.58%) · RSI14: 49.97
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -1.8654)
- VWAP (session): 29283.6114 — price above
- OR15: 29232.8398–29365.0
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:56)

## BTCUSD — MAP_ONLY
- price: **78173.03** (SINGLE) as-of 2026-08-24T11:56:01Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 34018 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 34021 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3836 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:56)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 31910 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
