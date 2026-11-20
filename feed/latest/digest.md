# Feed digest — 2026-11-20T14:49:09Z

**Desk grade: MAP_ONLY** (schema v1, run `20261120T144909Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3580.05** (SINGLE) as-of 2026-11-20T14:49:06Z
- session: O 3633.8 H 3638.1001 L 3515.0 · gap -51.7
- prior: H 3759.5 L 3620.6001 C 3685.5
- basis: bars (`yahoo:GC=F:1d`) run -4.25 (-11.9 bps) vs anchor
- ATR14: 100.2891 pts (2.805%) · RSI14: 23.24
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -34.6165)
- VWAP (UTC day): 3563.3245 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **26187.873** (SINGLE) as-of 2026-11-20T14:49:09Z
- session: O 26184.7637 H 26235.0781 L 26044.3691 · gap -332.2871
- prior: H 27749.3496 L 26481.8203 C 26517.0508
- basis: bars (`yahoo:^NDX:1d`) run -2.6582 (-1.0 bps) vs anchor
- ATR14: 681.5578 pts (2.603%) · RSI14: 31.85
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -121.1621)
- VWAP (session): 26125.5408 — price above
- OR15: 26048.2363–26190.3672

## BTCUSD — MAP_ONLY
- price: **61542.76** (SINGLE) as-of 2026-11-20T14:49:11Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 160911 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 160914 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 158803 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
