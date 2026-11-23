# Feed digest — 2026-11-23T17:14:19Z

**Desk grade: MAP_ONLY** (schema v1, run `20261123T171419Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3662.7** (SINGLE) as-of 2026-11-23T17:14:12Z
- session: O 3570.5 H 3691.0 L 3552.3 · gap +55.1001
- prior: H 3638.1001 L 3502.8999 C 3515.3999
- basis: bars (`yahoo:GC=F:1d`) run +3.1 (+8.5 bps) vs anchor
- ATR14: 106.473 pts (2.904%) · RSI14: 34.22
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -34.2717)
- VWAP (UTC day): 3637.0029 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **26811.08** (SINGLE) as-of 2026-11-23T17:14:20Z
- session: O 26889.291 H 27018.8828 L 26386.416 · gap +1860.3105
- prior: H 26429.0898 L 24910.4805 C 25028.9805
- basis: bars (`yahoo:^NDX:1d`) run -6.1386 (-2.3 bps) vs anchor
- ATR14: 850.2275 pts (3.172%) · RSI14: 42.41
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -130.5533)
- VWAP (session): 26721.1503 — price above
- OR15: 26392.9004–26866.623

## BTCUSD — MAP_ONLY
- price: **61955.25** (SINGLE) as-of 2026-11-23T17:14:20Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 165376 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 165379 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 163268 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
