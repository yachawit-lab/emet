# Feed digest — 2026-11-04T18:46:32Z

**Desk grade: MAP_ONLY** (schema v1, run `20261104T184632Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4063.0** (SINGLE) as-of 2026-11-04T18:46:29Z
- session: O 3940.8 H 4080.8999 L 3928.2 · gap +0.4001
- prior: H 3981.7 L 3904.1001 C 3940.3999
- basis: bars (`yahoo:GC=F:1d`) run +11.3999 (+28.1 bps) vs anchor
- ATR14: 86.8611 pts (2.132%) · RSI14: 47.0
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -0.8377)
- VWAP (UTC day): 4029.4499 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **28493.197** (SINGLE) as-of 2026-11-04T18:46:33Z
- session: O 28346.8086 H 28829.6621 L 28276.2188 · gap +166.5488
- prior: H 28307.9004 L 28085.5 C 28180.2598
- basis: bars (`yahoo:^NDX:1d`) run +1.9592 (+0.7 bps) vs anchor
- ATR14: 533.6554 pts (1.873%) · RSI14: 39.23
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -160.4886)
- VWAP (session): 28569.6508 — price below
- OR15: 28286.498–28671.4961

## BTCUSD — MAP_ONLY
- price: **80270.32** (SINGLE) as-of 2026-11-04T18:46:33Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 138109 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 138112 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 136001 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
