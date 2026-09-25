# Feed digest — 2026-09-25T17:50:47Z

**Desk grade: MAP_ONLY** (schema v1, run `20260925T175047Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4285.2002** (SINGLE) as-of 2026-09-25T17:50:30Z
- session: O 4309.5 H 4351.6001 L 4289.2002 · gap +11.5
- prior: H 4338.0 L 4278.2998 C 4298.0
- basis: bars (`yahoo:GC=F:1d`) run +34.8999 (+81.4 bps) vs anchor
- ATR14: 97.7822 pts (2.263%) · RSI14: 42.68
- EMA: mixed / no clean stack
- MACD: bearish (hist -19.3663)
- VWAP (UTC day): 4319.9003 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30636.788** (SINGLE) as-of 2026-09-25T17:50:48Z
- session: O 30517.457 H 30667.5586 L 30413.5859 · gap +38.5977
- prior: H 30529.3496 L 30204.1602 C 30478.8594
- basis: bars (`yahoo:^NDX:1d`) run +0.0011 (+0.0 bps) vs anchor
- ATR14: 390.7082 pts (1.275%) · RSI14: 65.02
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 147.5537)
- VWAP (session): 30564.1837 — price above
- OR15: 30506.4883–30613.0

## BTCUSD — MAP_ONLY
- price: **83749.59** (SINGLE) as-of 2026-09-25T17:50:49Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 80453 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 80456 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 78345 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
