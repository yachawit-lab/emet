# Feed digest — 2026-08-26T13:57:20Z

**Desk grade: MAP_ONLY** (schema v1, run `20260826T135720Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4629.2998** (SINGLE) as-of 2026-08-26T13:57:13Z
- session: O 4715.7002 H 4730.8999 L 4653.2998 · gap +77.6001
- prior: H 4638.1001 L 4626.2002 C 4638.1001
- basis: bars (`yahoo:GC=F:1d`) run +48.4004 (+104.6 bps) vs anchor
- ATR14: 77.0393 pts (1.647%) · RSI14: 75.61
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 33.6692)
- VWAP (UTC day): 4685.8285 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29261.002** (SINGLE) as-of 2026-08-26T13:57:21Z
- session: O 29130.7695 H 29262.0391 L 29127.9219 · gap -78.4609
- prior: H 29338.7695 L 29077.7207 C 29209.2305
- basis: bars (`yahoo:^NDX:1d`) run +0.9335 (+0.3 bps) vs anchor
- ATR14: 427.9554 pts (1.462%) · RSI14: 49.68
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -47.2511)
- VWAP (session): 29201.306 — price above
- OR15: 29135.5781–29239.4141

## BTCUSD — MAP_ONLY
- price: **78288.48** (SINGLE) as-of 2026-08-26T13:57:21Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 37019 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 37022 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 34911 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
