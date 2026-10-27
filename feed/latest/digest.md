# Feed digest — 2026-10-27T19:00:12Z

**Desk grade: MAP_ONLY** (schema v1, run `20261027T190012Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4057.7** (SINGLE) as-of 2026-10-27T18:59:54Z
- session: O 4032.8 H 4079.0 L 4001.6001 · gap -5.5999
- prior: H 4044.0 L 3990.8999 C 4038.3999
- basis: bars (`yahoo:GC=F:1d`) run +12.1999 (+30.1 bps) vs anchor
- ATR14: 77.3755 pts (1.901%) · RSI14: 38.68
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -4.9358)
- VWAP (UTC day): 4039.7903 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29653.807** (SINGLE) as-of 2026-10-27T19:00:13Z
- session: O 29407.1895 H 29713.2676 L 29340.5449 · gap +133.7891
- prior: H 29404.4395 L 29011.9102 C 29273.4004
- basis: bars (`yahoo:^NDX:1d`) run -0.0004 (-0.0 bps) vs anchor
- ATR14: 470.6388 pts (1.587%) · RSI14: 47.27
- EMA: mixed / no clean stack
- MACD: bearish (hist -134.3623)
- VWAP (session): 29555.5868 — price above
- OR15: 29389.7441–29529.0332

## BTCUSD — MAP_ONLY
- price: **80520.72** (SINGLE) as-of 2026-10-27T19:00:14Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 126602 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 126605 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 124494 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
