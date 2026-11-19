# Feed digest — 2026-11-19T19:34:55Z

**Desk grade: MAP_ONLY** (schema v1, run `20261119T193455Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3677.3501** (SINGLE) as-of 2026-11-19T19:34:34Z
- session: O 3855.2 H 3759.5 L 3668.3999 · gap +113.3
- prior: H 3859.3 L 3721.8 C 3741.8999
- basis: bars (`yahoo:GC=F:1d`) run -1.8501 (-5.0 bps) vs anchor
- ATR14: 91.474 pts (2.489%) · RSI14: 26.66
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -26.0775)
- VWAP (UTC day): 3711.1793 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **26764.947** (SINGLE) as-of 2026-11-19T19:34:55Z
- session: O 27574.2363 H 27749.3477 L 26604.6406 · gap +457.9766
- prior: H 27236.1191 L 26848.9199 C 27116.2598
- basis: bars (`yahoo:^NDX:1d`) run -5.3786 (-2.0 bps) vs anchor
- ATR14: 688.8506 pts (2.574%) · RSI14: 35.24
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -75.8175)
- VWAP (session): 27135.6356 — price below
- OR15: 27559.9316–27740.0

## BTCUSD — MAP_ONLY
- price: **62565.55** (SINGLE) as-of 2026-11-19T19:34:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 159757 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 159760 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 157649 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
