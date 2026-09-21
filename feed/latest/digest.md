# Feed digest — 2026-09-21T17:09:13Z

**Desk grade: MAP_ONLY** (schema v1, run `20260921T170913Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4345.5** (SINGLE) as-of 2026-09-21T17:09:03Z
- session: O 4413.0 H 4422.1001 L 4360.2998 · gap -11.8999
- prior: H 4439.7998 L 4372.2002 C 4424.8999
- basis: bars (`yahoo:GC=F:1d`) run +35.6001 (+81.9 bps) vs anchor
- ATR14: 105.5294 pts (2.409%) · RSI14: 46.73
- EMA: mixed / no clean stack
- MACD: bearish (hist -19.1811)
- VWAP (UTC day): 4391.1234 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30378.6** (SINGLE) as-of 2026-09-21T17:09:14Z
- session: O 29947.1641 H 30402.6992 L 29933.2188 · gap +302.9941
- prior: H 29647.8008 L 29371.8906 C 29644.1699
- basis: bars (`yahoo:^NDX:1d`) run +0.1148 (+0.0 bps) vs anchor
- ATR14: 407.5256 pts (1.341%) · RSI14: 64.72
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 70.3835)
- VWAP (session): 30203.3358 — price above
- OR15: 29941.4043–30045.6953

## BTCUSD — MAP_ONLY
- price: **86117.8** (SINGLE) as-of 2026-09-21T17:09:15Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 74651 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 74654 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 72543 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
