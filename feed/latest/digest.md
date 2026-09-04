# Feed digest — 2026-09-04T17:08:33Z

**Desk grade: MAP_ONLY** (schema v1, run `20260904T170833Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4434.6001** (SINGLE) as-of 2026-09-04T17:08:27Z
- session: O 4522.0 H 4537.7998 L 4412.0 · gap +30.2998
- prior: H 4510.0 L 4426.0 C 4491.7002
- basis: bars (`yahoo:GC=F:1d`) run +49.1997 (+110.9 bps) vs anchor
- ATR14: 86.6539 pts (1.933%) · RSI14: 56.22
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.1575)
- VWAP (UTC day): 4479.8195 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29514.578** (SINGLE) as-of 2026-09-04T17:08:34Z
- session: O 29539.5664 H 29655.2227 L 29450.3711 · gap +57.2461
- prior: H 29538.7598 L 29160.9609 C 29482.3203
- basis: bars (`yahoo:^NDX:1d`) run +2.7521 (+0.9 bps) vs anchor
- ATR14: 386.0412 pts (1.308%) · RSI14: 53.2
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -13.2793)
- VWAP (session): 29545.6055 — price below
- OR15: 29520.3105–29604.7812

## BTCUSD — MAP_ONLY
- price: **79722.93** (SINGLE) as-of 2026-09-04T17:08:35Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 50171 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 50174 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 48063 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
