# Feed digest — 2026-11-11T18:50:02Z

**Desk grade: MAP_ONLY** (schema v1, run `20261111T185002Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3989.8** (SINGLE) as-of 2026-11-11T18:50:00Z
- session: O 4043.7 H 4074.7 L 3994.5 · gap +13.5
- prior: H 4156.2002 L 4020.8 C 4030.2
- basis: bars (`yahoo:GC=F:1d`) run +8.2 (+20.6 bps) vs anchor
- ATR14: 89.9067 pts (2.249%) · RSI14: 42.2
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 9.8777)
- VWAP (UTC day): 4037.0019 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28578.401** (SINGLE) as-of 2026-11-11T18:50:03Z
- session: O 28267.334 H 28593.5234 L 28102.748 · gap +526.5449
- prior: H 27990.3398 L 27421.1797 C 27740.7891
- basis: bars (`yahoo:^NDX:1d`) run +0.0052 (+0.0 bps) vs anchor
- ATR14: 667.3371 pts (2.335%) · RSI14: 47.63
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -64.339)
- VWAP (session): 28356.6036 — price above
- OR15: 28153.6719–28319.1543

## BTCUSD — MAP_ONLY
- price: **74446.06** (SINGLE) as-of 2026-11-11T18:50:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 148192 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 148195 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 146084 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
