# Feed digest — 2026-09-16T17:45:51Z

**Desk grade: MAP_ONLY** (schema v1, run `20260916T174551Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4345.0** (SINGLE) as-of 2026-09-16T17:45:43Z
- session: O 4333.5 H 4405.2002 L 4315.2002 · gap +0.7002
- prior: H 4358.2002 L 4301.6001 C 4332.7998
- basis: bars (`yahoo:GC=F:1d`) run +44.8999 (+103.3 bps) vs anchor
- ATR14: 106.9848 pts (2.437%) · RSI14: 47.35
- EMA: mixed / no clean stack
- MACD: bearish (hist -30.9711)
- VWAP (UTC day): 4374.8699 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29121.067** (SINGLE) as-of 2026-09-16T17:45:51Z
- session: O 29110.0449 H 29235.8906 L 29068.2402 · gap +172.2051
- prior: H 29142.8008 L 28899.4297 C 28937.8398
- basis: bars (`yahoo:^NDX:1d`) run -0.5846 (-0.2 bps) vs anchor
- ATR14: 362.9772 pts (1.246%) · RSI14: 47.24
- EMA: mixed / no clean stack
- MACD: bearish (hist -48.1766)
- VWAP (session): 29153.4788 — price below
- OR15: 29068.2402–29115.5918

## BTCUSD — MAP_ONLY
- price: **75439.29** (SINGLE) as-of 2026-09-16T17:45:52Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 67488 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 67491 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 65380 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
