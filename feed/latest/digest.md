# Feed digest — 2026-09-09T17:19:43Z

**Desk grade: MAP_ONLY** (schema v1, run `20260909T171943Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4419.2998** (SINGLE) as-of 2026-09-09T17:19:23Z
- session: O 4399.0 H 4479.0 L 4384.1001 · gap +5.1001
- prior: H 4406.1001 L 4384.3999 C 4393.8999
- basis: bars (`yahoo:GC=F:1d`) run +43.9004 (+99.3 bps) vs anchor
- ATR14: 80.5734 pts (1.805%) · RSI14: 54.34
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -22.6365)
- VWAP (UTC day): 4444.0055 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29439.747** (SINGLE) as-of 2026-09-09T17:19:43Z
- session: O 29431.9414 H 29563.5977 L 29334.4043 · gap -75.7578
- prior: H 29655.7305 L 29400.6992 C 29507.6992
- basis: bars (`yahoo:^NDX:1d`) run +0.0069 (+0.0 bps) vs anchor
- ATR14: 366.7721 pts (1.246%) · RSI14: 51.72
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -3.2555)
- VWAP (session): 29451.89 — price below
- OR15: 29393.2598–29478.8516

## BTCUSD — MAP_ONLY
- price: **78815.0** (SINGLE) as-of 2026-09-09T17:19:44Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 57382 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 57385 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 55274 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
