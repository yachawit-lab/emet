# Feed digest — 2026-08-24T13:55:33Z

**Desk grade: MAP_ONLY** (schema v1, run `20260824T135533Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4668.0** (SINGLE) as-of 2026-08-24T13:55:16Z
- session: O 4673.3999 H 4738.5 L 4651.7998 · gap +49.2998
- prior: H 4624.1001 L 4560.0 C 4624.1001
- basis: bars (`yahoo:GC=F:1d`) run +48.8999 (+104.8 bps) vs anchor
- ATR14: 85.3634 pts (1.81%) · RSI14: 76.83
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 41.246)
- VWAP (UTC day): 4701.7876 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28933.339** (SINGLE) as-of 2026-08-24T13:55:33Z
- session: O 29094.7188 H 29094.7188 L 28875.9648 · gap -214.1406
- prior: H 29405.1191 L 29142.4395 C 29308.8594
- basis: bars (`yahoo:^NDX:1d`) run -4.2062 (-1.5 bps) vs anchor
- ATR14: 460.94 pts (1.593%) · RSI14: 45.22
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -42.8572)
- VWAP (session): 28975.1812 — price below
- OR15: 28914.75–29087.8828

## BTCUSD — MAP_ONLY
- price: **78301.17** (SINGLE) as-of 2026-08-24T13:55:34Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 34138 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 34141 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 32030 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
