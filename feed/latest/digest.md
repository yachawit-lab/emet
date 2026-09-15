# Feed digest — 2026-09-15T15:39:02Z

**Desk grade: MAP_ONLY** (schema v1, run `20260915T153902Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4287.1001** (SINGLE) as-of 2026-09-15T15:38:40Z
- session: O 4340.2998 H 4358.2002 L 4301.6001 · gap -11.6001
- prior: H 4396.7998 L 4293.0 C 4351.8999
- basis: bars (`yahoo:GC=F:1d`) run +38.6001 (+90.0 bps) vs anchor
- ATR14: 108.2913 pts (2.503%) · RSI14: 42.0
- EMA: mixed / no clean stack
- MACD: bearish (hist -35.5479)
- VWAP (UTC day): 4327.6549 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28973.478** (SINGLE) as-of 2026-09-15T15:39:03Z
- session: O 29100.1641 H 29142.8047 L 28913.4883 · gap -26.9961
- prior: H 29285.5 L 28867.6699 C 29127.1602
- basis: bars (`yahoo:^NDX:1d`) run +0.9439 (+0.3 bps) vs anchor
- ATR14: 366.9677 pts (1.267%) · RSI14: 44.4
- EMA: mixed / no clean stack
- MACD: bearish (hist -48.6041)
- VWAP (session): 29040.7859 — price below
- OR15: 29066.1934–29136.2598

## BTCUSD — MAP_ONLY
- price: **76345.76** (SINGLE) as-of 2026-09-15T15:39:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 65921 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 65924 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 63813 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
