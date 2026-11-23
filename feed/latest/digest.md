# Feed digest — 2026-11-23T22:51:38Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261123T225138Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3635.6001** (SINGLE) as-of 2026-11-23T22:51:13Z
- session: O 3570.5 H 3691.0 L 3552.3 · gap +55.1001
- prior: H 3638.1001 L 3502.8999 C 3515.3999
- basis: bars (`yahoo:GC=F:1d`) run -1.2002 (-3.3 bps) vs anchor
- ATR14: 106.473 pts (2.93%) · RSI14: 31.93
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -36.2756)
- VWAP (UTC day): 3639.3125 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26746.096** (STALE) as-of 2026-11-23T22:15:59Z
- session: O 26889.291 H 27018.8828 L 26386.416 · gap +1860.3105
- prior: H 26429.0898 L 24910.4805 C 25028.9805
- basis: bars (`yahoo:^NDX:1d`) run -0.0003 (-0.0 bps) vs anchor
- ATR14: 850.2275 pts (3.179%) · RSI14: 41.99
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -134.3087)
- VWAP (session): 26726.5324 — price below
- OR15: 26392.9004–26866.623
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:51)

## BTCUSD — MAP_ONLY
- price: **61056.22** (SINGLE) as-of 2026-11-23T22:51:40Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 165714 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 165717 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 163606 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
