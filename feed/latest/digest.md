# Feed digest — 2026-10-15T17:53:43Z

**Desk grade: MAP_ONLY** (schema v1, run `20261015T175343Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4155.2002** (SINGLE) as-of 2026-10-15T17:53:15Z
- session: O 4128.2998 H 4189.8999 L 4120.8999 · gap +20.3999
- prior: H 4193.5 L 4095.0 C 4107.8999
- basis: bars (`yahoo:GC=F:1d`) run +18.8999 (+45.5 bps) vs anchor
- ATR14: 85.5643 pts (2.05%) · RSI14: 42.69
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.2179)
- VWAP (UTC day): 4169.9472 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29855.29** (SINGLE) as-of 2026-10-15T17:53:44Z
- session: O 29526.7051 H 29887.4707 L 29408.4102 · gap -424.1152
- prior: H 30436.5996 L 29861.0605 C 29950.8203
- basis: bars (`yahoo:^NDX:1d`) run +0.001 (+0.0 bps) vs anchor
- ATR14: 397.9765 pts (1.333%) · RSI14: 43.22
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -128.2306)
- VWAP (session): 29666.4379 — price above
- OR15: 29471.3066–29625.9609

## BTCUSD — MAP_ONLY
- price: **82356.18** (SINGLE) as-of 2026-10-15T17:53:44Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 109256 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 109259 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 107148 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
