# Feed digest — 2026-10-12T14:17:27Z

**Desk grade: MAP_ONLY** (schema v1, run `20261012T141727Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4166.8999** (SINGLE) as-of 2026-10-12T14:17:10Z
- session: O 4220.7998 H 4242.2998 L 4178.1001 · gap +4.5
- prior: H 4233.7002 L 4156.1001 C 4216.2998
- basis: bars (`yahoo:GC=F:1d`) run +30.2002 (+72.5 bps) vs anchor
- ATR14: 87.1537 pts (2.077%) · RSI14: 41.89
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -2.295)
- VWAP (UTC day): 4207.434 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30680.011** (SINGLE) as-of 2026-10-12T14:17:28Z
- session: O 30796.043 H 30813.9609 L 30643.2695 · gap -87.1074
- prior: H 30946.7402 L 30770.0508 C 30883.1504
- basis: bars (`yahoo:^NDX:1d`) run +0.8152 (+0.3 bps) vs anchor
- ATR14: 365.7385 pts (1.192%) · RSI14: 56.83
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 4.2538)
- VWAP (session): 30737.007 — price below
- OR15: 30718.7422–30809.9258

## BTCUSD — MAP_ONLY
- price: **82769.51** (SINGLE) as-of 2026-10-12T14:17:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 104719 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 104722 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 102611 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
