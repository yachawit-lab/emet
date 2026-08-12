# Feed digest — 2026-08-12T16:41:56Z

**Desk grade: MAP_ONLY** (schema v1, run `20260812T164156Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4415.1001** (SINGLE) as-of 2026-08-12T16:41:38Z
- session: O 4430.0 H 4502.7002 L 4421.3999 · gap +47.0
- prior: H 4408.6001 L 4365.1001 C 4383.0
- basis: bars (`yahoo:GC=F:1d`) run +65.8999 (+149.3 bps) vs anchor
- ATR14: 78.0568 pts (1.742%) · RSI14: 71.43
- EMA: mixed / no clean stack
- MACD: bullish (hist 50.5711)
- VWAP (UTC day): 4474.0189 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29788.65** (SINGLE) as-of 2026-08-12T16:41:57Z
- session: O 29875.1797 H 29881.502 L 29715.8828 · gap +349.6992
- prior: H 29705.8008 L 29427.6094 C 29525.4805
- basis: bars (`yahoo:^NDX:1d`) run -0.1188 (-0.0 bps) vs anchor
- ATR14: 546.7207 pts (1.835%) · RSI14: 57.49
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 175.0415)
- VWAP (session): 29780.5607 — price above
- OR15: 29750.5879–29876.7266

## BTCUSD — MAP_ONLY
- price: **63461.84** (SINGLE) as-of 2026-08-12T16:41:58Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 17024 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 17027 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 14916 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
