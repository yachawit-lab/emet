# Feed digest — 2026-08-31T18:05:27Z

**Desk grade: MAP_ONLY** (schema v1, run `20260831T180527Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4433.3999** (SINGLE) as-of 2026-08-31T18:05:08Z
- session: O 4483.2002 H 4521.5 L 4445.6001 · gap +5.1001
- prior: H 4625.5 L 4451.7998 C 4478.1001
- basis: bars (`yahoo:GC=F:1d`) run +53.8003 (+121.4 bps) vs anchor
- ATR14: 76.3065 pts (1.701%) · RSI14: 57.55
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -0.4947)
- VWAP (UTC day): 4485.769 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29398.937** (SINGLE) as-of 2026-08-31T18:05:29Z
- session: O 29404.293 H 29465.0 L 29304.4922 · gap -29.1367
- prior: H 29752.7793 L 29383.9199 C 29433.4297
- basis: bars (`yahoo:^NDX:1d`) run -1.3159 (-0.4 bps) vs anchor
- ATR14: 408.1467 pts (1.388%) · RSI14: 51.2
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.0843)
- VWAP (session): 29364.3315 — price above
- OR15: 29342.5488–29460.5137

## BTCUSD — MAP_ONLY
- price: **78799.22** (SINGLE) as-of 2026-08-31T18:05:31Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 44467 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 44470 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 42359 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
