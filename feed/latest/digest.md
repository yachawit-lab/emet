# Feed digest — 2026-08-25T14:29:16Z

**Desk grade: MAP_ONLY** (schema v1, run `20260825T142916Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4626.8999** (SINGLE) as-of 2026-08-25T14:28:58Z
- session: O 4710.1001 H 4755.0 L 4660.5 · gap +69.3003
- prior: H 4670.8999 L 4635.1001 C 4640.7998
- basis: bars (`yahoo:GC=F:1d`) run +50.8003 (+109.8 bps) vs anchor
- ATR14: 82.9405 pts (1.773%) · RSI14: 75.7
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 37.3049)
- VWAP (UTC day): 4695.558 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29155.55** (SINGLE) as-of 2026-08-25T14:29:17Z
- session: O 29231.1797 H 29338.7734 L 29140.627 · gap +208.0
- prior: H 29151.9707 L 28875.9609 C 29023.1797
- basis: bars (`yahoo:^NDX:1d`) run -0.2453 (-0.1 bps) vs anchor
- ATR14: 450.56 pts (1.545%) · RSI14: 48.2
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -49.5891)
- VWAP (session): 29240.0967 — price below
- OR15: 29234.6953–29304.7051

## BTCUSD — MAP_ONLY
- price: **79249.74** (SINGLE) as-of 2026-08-25T14:29:18Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 35611 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 35614 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 33503 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
