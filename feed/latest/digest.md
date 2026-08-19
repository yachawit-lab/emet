# Feed digest — 2026-08-19T13:48:27Z

**Desk grade: MAP_ONLY** (schema v1, run `20260819T134827Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4456.5** (SINGLE) as-of 2026-08-19T13:48:07Z
- session: O 4391.3999 H 4524.0 L 4378.0 · gap +25.3999
- prior: H 4434.1001 L 4330.7002 C 4366.0
- basis: bars (`yahoo:GC=F:1d`) run +55.1001 (+123.6 bps) vs anchor
- ATR14: 81.3464 pts (1.803%) · RSI14: 68.96
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 29.9299)
- VWAP (UTC day): 4450.6882 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29460.257** (SINGLE) as-of 2026-08-19T13:48:25Z
- session: O 29580.8516 H 29652.2949 L 29453.7578 · gap +89.8906
- prior: H 29677.2891 L 29425.0898 C 29490.9609
- basis: bars (`yahoo:^NDX:1d`) run -6.4992 (-2.2 bps) vs anchor
- ATR14: 483.449 pts (1.641%) · RSI14: 51.4
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 71.393)
- VWAP (session): 29541.8366 — price below
- OR15: 29471.8848–29647.6328

## BTCUSD — MAP_ONLY
- price: **65085.48** (SINGLE) as-of 2026-08-19T13:48:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 26930 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 26933 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 24822 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
