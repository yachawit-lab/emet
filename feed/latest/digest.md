# Feed digest — 2026-09-18T17:15:50Z

**Desk grade: MAP_ONLY** (schema v1, run `20260918T171550Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4386.5** (SINGLE) as-of 2026-09-18T17:15:39Z
- session: O 4381.6001 H 4439.7998 L 4372.2002 · gap -18.1001
- prior: H 4423.2998 L 4294.5 C 4399.7002
- basis: bars (`yahoo:GC=F:1d`) run +37.2998 (+85.0 bps) vs anchor
- ATR14: 108.688 pts (2.457%) · RSI14: 50.22
- EMA: mixed / no clean stack
- MACD: bearish (hist -20.9218)
- VWAP (UTC day): 4406.6584 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29456.218** (SINGLE) as-of 2026-09-18T17:15:50Z
- session: O 29529.6445 H 29560.2988 L 29371.8887 · gap +82.6641
- prior: H 29494.9492 L 29305.9004 C 29446.9805
- basis: bars (`yahoo:^NDX:1d`) run -0.2785 (-0.1 bps) vs anchor
- ATR14: 374.2768 pts (1.271%) · RSI14: 53.02
- EMA: mixed / no clean stack
- MACD: bearish (hist -8.8433)
- VWAP (session): 29462.9764 — price below
- OR15: 29514.3613–29560.2988

## BTCUSD — MAP_ONLY
- price: **80887.66** (SINGLE) as-of 2026-09-18T17:15:51Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 70338 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 70341 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 68230 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
