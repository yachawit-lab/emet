# Feed digest — 2026-08-03T15:59:07Z

**Desk grade: MAP_ONLY** (schema v1, run `20260803T155907Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4038.3999** (SINGLE) as-of 2026-08-03T15:58:52Z
- session: O 4135.2002 H 4145.5 L 4074.0 · gap +86.1001
- prior: H 4102.3999 L 4022.3999 C 4049.1001
- basis: bars (`yahoo:GC=F:1d`) run +55.8001 (+138.2 bps) vs anchor
- ATR14: 71.6261 pts (1.749%) · RSI14: 49.31
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 14.8249)
- VWAP (UTC day): 4103.5032 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28663.941** (SINGLE) as-of 2026-08-03T15:59:07Z
- session: O 28278.5879 H 28688.3633 L 28196.877 · gap +4.3887
- prior: H 28606.7793 L 27954.2402 C 28274.1992
- basis: bars (`yahoo:^NDX:1d`) run +1.8403 (+0.6 bps) vs anchor
- ATR14: 618.8539 pts (2.159%) · RSI14: 48.98
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -39.9673)
- VWAP (session): 28506.0835 — price above
- OR15: 28202.1738–28417.9219

## BTCUSD — MAP_ONLY
- price: **63592.84** (SINGLE) as-of 2026-08-03T15:59:08Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 4021 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 4024 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 1913 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
