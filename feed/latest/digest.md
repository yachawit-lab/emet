# Feed digest — 2026-08-07T16:11:07Z

**Desk grade: MAP_ONLY** (schema v1, run `20260807T161107Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4348.0** (SINGLE) as-of 2026-08-07T16:10:50Z
- session: O 4298.2998 H 4432.2998 L 4288.0 · gap +56.2998
- prior: H 4297.0 L 4228.0 C 4242.0
- basis: bars (`yahoo:GC=F:1d`) run +52.0 (+119.6 bps) vs anchor
- ATR14: 83.1241 pts (1.889%) · RSI14: 67.51
- EMA: mixed / no clean stack
- MACD: bullish (hist 41.9413)
- VWAP (UTC day): 4380.6836 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29711.319** (SINGLE) as-of 2026-08-07T16:11:08Z
- session: O 29596.4531 H 29738.9414 L 29452.709 · gap +223.123
- prior: H 29569.7598 L 29123.3809 C 29373.3301
- basis: bars (`yahoo:^NDX:1d`) run +0.9427 (+0.3 bps) vs anchor
- ATR14: 613.7773 pts (2.066%) · RSI14: 57.17
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 181.2773)
- VWAP (session): 29624.3751 — price above
- OR15: 29595.2148–29701.5059

## BTCUSD — MAP_ONLY
- price: **64969.43** (SINGLE) as-of 2026-08-07T16:11:09Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 9793 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 9796 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 7685 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
