# Feed digest — 2026-10-21T16:03:38Z

**Desk grade: MAP_ONLY** (schema v1, run `20261021T160338Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4132.8999** (SINGLE) as-of 2026-10-21T16:03:37Z
- session: O 4143.3999 H 4160.6001 L 4124.0 · gap +0.7998
- prior: H 4174.8999 L 4130.1001 C 4142.6001
- basis: bars (`yahoo:GC=F:1d`) run +18.7002 (+45.2 bps) vs anchor
- ATR14: 76.0628 pts (1.832%) · RSI14: 41.37
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 4.7867)
- VWAP (UTC day): 4143.9538 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29846.597** (SINGLE) as-of 2026-10-21T16:03:39Z
- session: O 29707.002 H 29873.6465 L 29593.6953 · gap +216.7227
- prior: H 29711.5293 L 29208.8301 C 29490.2793
- basis: bars (`yahoo:^NDX:1d`) run -0.4193 (-0.1 bps) vs anchor
- ATR14: 444.803 pts (1.49%) · RSI14: 46.57
- EMA: mixed / no clean stack
- MACD: bearish (hist -173.7456)
- VWAP (session): 29711.3985 — price above
- OR15: 29595.6113–29728.4531

## BTCUSD — MAP_ONLY
- price: **84454.21** (SINGLE) as-of 2026-10-21T16:03:39Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 117786 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 117789 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 115678 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
