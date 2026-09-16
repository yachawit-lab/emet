# Feed digest — 2026-09-16T15:29:55Z

**Desk grade: MAP_ONLY** (schema v1, run `20260916T152955Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4346.8999** (SINGLE) as-of 2026-09-16T15:29:43Z
- session: O 4333.5 H 4402.8999 L 4315.2002 · gap +0.7002
- prior: H 4358.2002 L 4301.6001 C 4332.7998
- basis: bars (`yahoo:GC=F:1d`) run +48.8999 (+112.5 bps) vs anchor
- ATR14: 106.8205 pts (2.43%) · RSI14: 47.81
- EMA: mixed / no clean stack
- MACD: bearish (hist -30.5946)
- VWAP (UTC day): 4372.4382 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29199.471** (SINGLE) as-of 2026-09-16T15:29:56Z
- session: O 29110.0449 H 29223.4941 L 29068.2402 · gap +172.2051
- prior: H 29142.8008 L 28899.4297 C 28937.8398
- basis: bars (`yahoo:^NDX:1d`) run -1.5355 (-0.5 bps) vs anchor
- ATR14: 362.0918 pts (1.24%) · RSI14: 48.54
- EMA: mixed / no clean stack
- MACD: bearish (hist -43.2338)
- VWAP (session): 29145.7871 — price above
- OR15: 29068.2402–29115.5918

## BTCUSD — MAP_ONLY
- price: **75579.57** (SINGLE) as-of 2026-09-16T15:29:56Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 67352 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 67355 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 65244 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
