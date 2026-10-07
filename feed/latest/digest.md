# Feed digest — 2026-10-07T17:55:48Z

**Desk grade: MAP_ONLY** (schema v1, run `20261007T175548Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4110.7002** (SINGLE) as-of 2026-10-07T17:55:23Z
- session: O 4195.0 H 4197.7998 L 4091.3 · gap +7.8999
- prior: H 4212.3999 L 4130.7002 C 4187.1001
- basis: bars (`yahoo:GC=F:1d`) run +27.3999 (+66.7 bps) vs anchor
- ATR14: 93.415 pts (2.257%) · RSI14: 34.17
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -16.8882)
- VWAP (UTC day): 4135.8487 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **31106.494** (SINGLE) as-of 2026-10-07T17:55:49Z
- session: O 30976.248 H 31140.8223 L 30904.4648 · gap -248.2227
- prior: H 31361.3691 L 31208.1992 C 31224.4707
- basis: bars (`yahoo:^NDX:1d`) run -0.5409 (-0.2 bps) vs anchor
- ATR14: 370.6629 pts (1.192%) · RSI14: 67.03
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 90.5674)
- VWAP (session): 31034.0743 — price above
- OR15: 30906.6426–31029.2969

## BTCUSD — MAP_ONLY
- price: **83130.96** (SINGLE) as-of 2026-10-07T17:55:50Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 97738 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 97741 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 95630 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
