# Feed digest — 2026-08-03T19:06:31Z

**Desk grade: MAP_ONLY** (schema v1, run `20260803T190631Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4049.1001** (SINGLE) as-of 2026-08-03T19:06:22Z
- session: O 4135.2002 H 4145.5 L 4074.0 · gap +86.1001
- prior: H 4102.3999 L 4022.3999 C 4049.1001
- basis: bars (`yahoo:GC=F:1d`) run +50.8999 (+125.7 bps) vs anchor
- ATR14: 71.6261 pts (1.747%) · RSI14: 49.76
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 15.1951)
- VWAP (UTC day): 4101.9594 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28801.369** (SINGLE) as-of 2026-08-03T19:06:32Z
- session: O 28278.5879 H 28842.3574 L 28196.877 · gap +4.3887
- prior: H 28606.7793 L 27954.2402 C 28274.1992
- basis: bars (`yahoo:^NDX:1d`) run -5.4276 (-1.9 bps) vs anchor
- ATR14: 629.8535 pts (2.187%) · RSI14: 50.19
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -31.6608)
- VWAP (session): 28599.0814 — price above
- OR15: 28202.1738–28417.9219

## BTCUSD — MAP_ONLY
- price: **63823.19** (SINGLE) as-of 2026-08-03T19:06:32Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 4209 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 4212 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 2101 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
