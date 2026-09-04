# Feed digest — 2026-09-04T16:47:29Z

**Desk grade: MAP_ONLY** (schema v1, run `20260904T164729Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4439.2002** (SINGLE) as-of 2026-09-04T16:47:27Z
- session: O 4522.0 H 4537.7998 L 4412.0 · gap +30.2998
- prior: H 4510.0 L 4426.0 C 4491.7002
- basis: bars (`yahoo:GC=F:1d`) run +44.8999 (+101.1 bps) vs anchor
- ATR14: 86.6539 pts (1.932%) · RSI14: 56.24
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.1383)
- VWAP (UTC day): 4479.7678 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29544.522** (SINGLE) as-of 2026-09-04T16:47:30Z
- session: O 29539.5664 H 29655.2227 L 29450.3711 · gap +57.2461
- prior: H 29538.7598 L 29160.9609 C 29482.3203
- basis: bars (`yahoo:^NDX:1d`) run -0.0005 (-0.0 bps) vs anchor
- ATR14: 386.0412 pts (1.307%) · RSI14: 53.59
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -11.5441)
- VWAP (session): 29545.6543 — price below
- OR15: 29520.3105–29604.7812

## BTCUSD — MAP_ONLY
- price: **79759.41** (SINGLE) as-of 2026-09-04T16:47:31Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 50150 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 50153 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 48041 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
