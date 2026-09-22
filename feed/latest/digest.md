# Feed digest — 2026-09-22T17:46:21Z

**Desk grade: MAP_ONLY** (schema v1, run `20260922T174621Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4340.5** (SINGLE) as-of 2026-09-22T17:46:07Z
- session: O 4382.5 H 4414.1001 L 4327.6001 · gap -1.3999
- prior: H 4422.1001 L 4360.2998 C 4383.8999
- basis: bars (`yahoo:GC=F:1d`) run +34.2998 (+79.0 bps) vs anchor
- ATR14: 104.1702 pts (2.381%) · RSI14: 46.2
- EMA: mixed / no clean stack
- MACD: bearish (hist -17.5627)
- VWAP (UTC day): 4366.9325 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30651.696** (SINGLE) as-of 2026-09-22T17:46:22Z
- session: O 30496.4316 H 30698.9961 L 30496.4316 · gap +14.082
- prior: H 30557.3398 L 29933.2207 C 30482.3496
- basis: bars (`yahoo:^NDX:1d`) run +0.3099 (+0.1 bps) vs anchor
- ATR14: 404.1482 pts (1.319%) · RSI14: 67.28
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 129.8845)
- VWAP (session): 30625.2211 — price above
- OR15: 30507.2852–30629.375

## BTCUSD — MAP_ONLY
- price: **86432.56** (SINGLE) as-of 2026-09-22T17:46:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 76128 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 76131 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 74020 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
