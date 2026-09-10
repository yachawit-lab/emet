# Feed digest — 2026-09-10T17:16:40Z

**Desk grade: MAP_ONLY** (schema v1, run `20260910T171640Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4362.8999** (SINGLE) as-of 2026-09-10T17:16:25Z
- session: O 4448.0 H 4479.8999 L 4365.3999 · gap +32.0
- prior: H 4416.0 L 4397.3999 C 4416.0
- basis: bars (`yahoo:GC=F:1d`) run +41.1001 (+94.2 bps) vs anchor
- ATR14: 78.1683 pts (1.775%) · RSI14: 50.49
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -25.3576)
- VWAP (UTC day): 4419.4927 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29204.866** (SINGLE) as-of 2026-09-10T17:16:41Z
- session: O 29097.334 H 29250.4121 L 29038.2207 · gap -324.2168
- prior: H 29563.5996 L 29334.4004 C 29421.5508
- basis: bars (`yahoo:^NDX:1d`) run +0.6086 (+0.2 bps) vs anchor
- ATR14: 367.9566 pts (1.26%) · RSI14: 47.64
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -19.0104)
- VWAP (session): 29164.5293 — price above
- OR15: 29038.2207–29173.9473

## BTCUSD — MAP_ONLY
- price: **77124.12** (SINGLE) as-of 2026-09-10T17:16:42Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 58819 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 58822 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 56711 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
