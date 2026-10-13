# Feed digest — 2026-10-13T19:47:30Z

**Desk grade: MAP_ONLY** (schema v1, run `20261013T194730Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4164.6001** (SINGLE) as-of 2026-10-13T19:47:14Z
- session: O 4195.5 H 4224.7998 L 4169.7002 · gap +4.8999
- prior: H 4242.2998 L 4178.1001 C 4190.6001
- basis: bars (`yahoo:GC=F:1d`) run +23.7998 (+57.1 bps) vs anchor
- ATR14: 84.8641 pts (2.026%) · RSI14: 41.18
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.1159)
- VWAP (UTC day): 4196.4205 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30555.801** (SINGLE) as-of 2026-10-13T19:47:31Z
- session: O 30404.1953 H 30595.8047 L 30372.2988 · gap -260.5039
- prior: H 30813.9609 L 30618.6406 C 30664.6992
- basis: bars (`yahoo:^NDX:1d`) run -0.0002 (-0.0 bps) vs anchor
- ATR14: 362.1337 pts (1.185%) · RSI14: 54.44
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -27.1413)
- VWAP (session): 30520.2291 — price above
- OR15: 30377.0723–30570.4355

## BTCUSD — MAP_ONLY
- price: **83077.34** (SINGLE) as-of 2026-10-13T19:47:32Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 106490 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 106493 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 104381 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
