# Feed digest — 2026-10-15T15:41:32Z

**Desk grade: MAP_ONLY** (schema v1, run `20261015T154132Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4153.6001** (SINGLE) as-of 2026-10-15T15:41:15Z
- session: O 4128.2998 H 4189.8999 L 4120.8999 · gap +20.3999
- prior: H 4193.5 L 4095.0 C 4107.8999
- basis: bars (`yahoo:GC=F:1d`) run +21.5 (+51.8 bps) vs anchor
- ATR14: 85.5643 pts (2.049%) · RSI14: 42.8
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.2817)
- VWAP (UTC day): 4169.915 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29780.873** (SINGLE) as-of 2026-10-15T15:41:34Z
- session: O 29526.7051 H 29854.0293 L 29408.4102 · gap -424.1152
- prior: H 30436.5996 L 29861.0605 C 29950.8203
- basis: bars (`yahoo:^NDX:1d`) run -0.7734 (-0.3 bps) vs anchor
- ATR14: 397.9765 pts (1.336%) · RSI14: 42.23
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -133.0291)
- VWAP (session): 29622.9076 — price above
- OR15: 29471.3066–29625.9609

## BTCUSD — MAP_ONLY
- price: **82397.4** (SINGLE) as-of 2026-10-15T15:41:35Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 109124 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 109127 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 107016 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
