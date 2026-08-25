# Feed digest — 2026-08-25T13:53:48Z

**Desk grade: MAP_ONLY** (schema v1, run `20260825T135348Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4610.5** (SINGLE) as-of 2026-08-25T13:53:29Z
- session: O 4710.1001 H 4755.0 L 4663.6001 · gap +69.3003
- prior: H 4670.8999 L 4635.1001 C 4640.7998
- basis: bars (`yahoo:GC=F:1d`) run +59.0 (+128.0 bps) vs anchor
- ATR14: 82.9405 pts (1.776%) · RSI14: 75.41
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 36.7816)
- VWAP (UTC day): 4698.4761 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29290.297** (SINGLE) as-of 2026-08-25T13:53:49Z
- session: O 29231.1797 H 29338.7734 L 29231.1797 · gap +208.0
- prior: H 29151.9707 L 28875.9609 C 29023.1797
- basis: bars (`yahoo:^NDX:1d`) run -0.2521 (-0.1 bps) vs anchor
- ATR14: 450.56 pts (1.538%) · RSI14: 49.99
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -40.9903)
- VWAP (session): 29284.714 — price above
- OR15: 29234.6953–29304.7051

## BTCUSD — MAP_ONLY
- price: **78281.25** (SINGLE) as-of 2026-08-25T13:53:50Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 35576 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 35579 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 33468 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
