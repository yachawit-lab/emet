# Feed digest — 2026-11-03T18:36:41Z

**Desk grade: MAP_ONLY** (schema v1, run `20261103T183641Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3932.6001** (SINGLE) as-of 2026-11-03T18:36:27Z
- session: O 3960.5 H 3980.7 L 3904.1001 · gap -9.1001
- prior: H 3980.8 L 3889.0 C 3969.6001
- basis: bars (`yahoo:GC=F:1d`) run +9.1999 (+23.4 bps) vs anchor
- ATR14: 81.7252 pts (2.073%) · RSI14: 34.44
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -10.3978)
- VWAP (UTC day): 3942.0425 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28276.609** (SINGLE) as-of 2026-11-03T18:36:41Z
- session: O 28085.4961 H 28307.8984 L 28085.4961 · gap +95.6758
- prior: H 28753.3906 L 27967.4395 C 27989.8203
- basis: bars (`yahoo:^NDX:1d`) run +0.0472 (+0.0 bps) vs anchor
- ATR14: 524.7517 pts (1.856%) · RSI14: 36.13
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -181.0398)
- VWAP (session): 28209.5618 — price above
- OR15: 28098.0703–28242.1758

## BTCUSD — MAP_ONLY
- price: **77765.07** (SINGLE) as-of 2026-11-03T18:36:42Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 136659 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 136662 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 134551 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
