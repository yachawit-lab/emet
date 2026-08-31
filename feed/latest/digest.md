# Feed digest — 2026-08-31T19:42:24Z

**Desk grade: MAP_ONLY** (schema v1, run `20260831T194224Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4441.1001** (SINGLE) as-of 2026-08-31T19:42:08Z
- session: O 4483.2002 H 4521.5 L 4445.6001 · gap +5.1001
- prior: H 4625.5 L 4451.7998 C 4478.1001
- basis: bars (`yahoo:GC=F:1d`) run +48.2998 (+108.8 bps) vs anchor
- ATR14: 76.3065 pts (1.7%) · RSI14: 57.69
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -0.3544)
- VWAP (UTC day): 4485.6532 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29418.778** (SINGLE) as-of 2026-08-31T19:42:25Z
- session: O 29404.293 H 29465.0 L 29304.4922 · gap -29.1367
- prior: H 29752.7793 L 29383.9199 C 29433.4297
- basis: bars (`yahoo:^NDX:1d`) run -3.2292 (-1.1 bps) vs anchor
- ATR14: 408.1467 pts (1.388%) · RSI14: 51.47
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -18.9402)
- VWAP (session): 29366.927 — price above
- OR15: 29342.5488–29460.5137

## BTCUSD — MAP_ONLY
- price: **78941.96** (SINGLE) as-of 2026-08-31T19:42:26Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 44564 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 44567 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 42456 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
