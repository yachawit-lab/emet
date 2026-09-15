# Feed digest — 2026-09-15T17:34:09Z

**Desk grade: MAP_ONLY** (schema v1, run `20260915T173409Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4298.5** (SINGLE) as-of 2026-09-15T17:33:40Z
- session: O 4340.2998 H 4358.2002 L 4301.6001 · gap -11.6001
- prior: H 4396.7998 L 4293.0 C 4351.8999
- basis: bars (`yahoo:GC=F:1d`) run +35.7002 (+83.1 bps) vs anchor
- ATR14: 108.2913 pts (2.499%) · RSI14: 42.54
- EMA: mixed / no clean stack
- MACD: bearish (hist -35.0054)
- VWAP (UTC day): 4328.3122 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28958.471** (SINGLE) as-of 2026-09-15T17:34:10Z
- session: O 29100.1641 H 29142.8047 L 28913.4883 · gap -26.9961
- prior: H 29285.5 L 28867.6699 C 29127.1602
- basis: bars (`yahoo:^NDX:1d`) run -0.1761 (-0.1 bps) vs anchor
- ATR14: 366.9677 pts (1.267%) · RSI14: 44.17
- EMA: mixed / no clean stack
- MACD: bearish (hist -49.6333)
- VWAP (session): 29014.9481 — price below
- OR15: 29066.1934–29136.2598

## BTCUSD — MAP_ONLY
- price: **76888.37** (SINGLE) as-of 2026-09-15T17:34:11Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 66036 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 66039 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 63928 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
