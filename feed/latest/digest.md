# Feed digest — 2026-09-14T17:00:55Z

**Desk grade: MAP_ONLY** (schema v1, run `20260914T170055Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4316.7998** (SINGLE) as-of 2026-09-14T17:00:38Z
- session: O 4375.0 H 4396.7998 L 4293.0 · gap +8.7998
- prior: H 4389.5 L 4365.7998 C 4366.2002
- basis: bars (`yahoo:GC=F:1d`) run +38.1001 (+88.3 bps) vs anchor
- ATR14: 74.9269 pts (1.721%) · RSI14: 47.04
- EMA: mixed / no clean stack
- MACD: bearish (hist -28.215)
- VWAP (UTC day): 4337.0717 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29243.825** (SINGLE) as-of 2026-09-14T17:01:00Z
- session: O 28890.9316 H 29256.1562 L 28867.668 · gap -477.5078
- prior: H 29473.1191 L 29313.5098 C 29368.4395
- basis: bars (`yahoo:^NDX:1d`) run +0.2844 (+0.1 bps) vs anchor
- ATR14: 377.5564 pts (1.291%) · RSI14: 48.56
- EMA: mixed / no clean stack
- MACD: bearish (hist -25.3684)
- VWAP (session): 29036.5207 — price above
- OR15: 28868.6641–28938.5078

## BTCUSD — MAP_ONLY
- price: **78748.58** (SINGLE) as-of 2026-09-14T17:01:01Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 64563 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 64566 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 62455 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
