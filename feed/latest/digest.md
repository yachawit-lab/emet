# Feed digest — 2026-08-03T18:18:08Z

**Desk grade: MAP_ONLY** (schema v1, run `20260803T181808Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4038.8999** (SINGLE) as-of 2026-08-03T18:17:52Z
- session: O 4135.2002 H 4145.5 L 4074.0 · gap +86.1001
- prior: H 4102.3999 L 4022.3999 C 4049.1001
- basis: bars (`yahoo:GC=F:1d`) run +50.1001 (+124.0 bps) vs anchor
- ATR14: 71.6261 pts (1.752%) · RSI14: 48.9
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 14.4931)
- VWAP (UTC day): 4102.2294 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28822.441** (SINGLE) as-of 2026-08-03T18:18:09Z
- session: O 28278.5879 H 28842.3574 L 28196.877 · gap +4.3887
- prior: H 28606.7793 L 27954.2402 C 28274.1992
- basis: bars (`yahoo:^NDX:1d`) run +0.0004 (+0.0 bps) vs anchor
- ATR14: 629.8535 pts (2.185%) · RSI14: 50.42
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -29.9696)
- VWAP (session): 28578.6565 — price above
- OR15: 28202.1738–28417.9219

## BTCUSD — MAP_ONLY
- price: **63883.89** (SINGLE) as-of 2026-08-03T18:18:10Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 4160 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 4163 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 2052 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
