# Feed digest — 2026-10-07T19:34:22Z

**Desk grade: MAP_ONLY** (schema v1, run `20261007T193422Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4107.5** (SINGLE) as-of 2026-10-07T19:33:53Z
- session: O 4195.0 H 4197.7998 L 4091.3 · gap +7.8999
- prior: H 4212.3999 L 4130.7002 C 4187.1001
- basis: bars (`yahoo:GC=F:1d`) run +28.0 (+68.2 bps) vs anchor
- ATR14: 93.415 pts (2.259%) · RSI14: 34.01
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -17.0542)
- VWAP (UTC day): 4135.8963 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **31132.913** (SINGLE) as-of 2026-10-07T19:34:15Z
- session: O 30976.248 H 31148.0391 L 30904.4648 · gap -248.2227
- prior: H 31361.3691 L 31208.1992 C 31224.4707
- basis: bars (`yahoo:^NDX:1d`) run -0.7528 (-0.2 bps) vs anchor
- ATR14: 370.6629 pts (1.191%) · RSI14: 67.63
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 92.2398)
- VWAP (session): 31053.689 — price above
- OR15: 30906.6426–31029.2969

## BTCUSD — MAP_ONLY
- price: **83433.13** (SINGLE) as-of 2026-10-07T19:34:23Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 97836 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 97839 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 95728 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
