# Feed digest — 2026-09-11T15:09:12Z

**Desk grade: MAP_ONLY** (schema v1, run `20260911T150912Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4367.2998** (SINGLE) as-of 2026-09-11T15:08:57Z
- session: O 4359.3999 H 4444.8999 L 4333.0 · gap -5.1001
- prior: H 4420.0 L 4330.7002 C 4364.5
- basis: bars (`yahoo:GC=F:1d`) run +45.6001 (+104.4 bps) vs anchor
- ATR14: 78.9077 pts (1.788%) · RSI14: 51.24
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -25.2721)
- VWAP (UTC day): 4395.9611 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29395.77** (SINGLE) as-of 2026-09-11T15:09:13Z
- session: O 29331.4805 H 29446.2363 L 29313.5117 · gap +227.9707
- prior: H 29250.4102 L 29038.2207 C 29103.5098
- basis: bars (`yahoo:^NDX:1d`) run -0.5591 (-0.2 bps) vs anchor
- ATR14: 366.1566 pts (1.246%) · RSI14: 51.08
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -19.2466)
- VWAP (session): 29386.47 — price above
- OR15: 29326.4863–29408.8047

## BTCUSD — MAP_ONLY
- price: **78634.03** (SINGLE) as-of 2026-09-11T15:09:14Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 60131 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 60134 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 58023 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
