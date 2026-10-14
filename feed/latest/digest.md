# Feed digest — 2026-10-14T18:11:12Z

**Desk grade: MAP_ONLY** (schema v1, run `20261014T181112Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4087.2** (SINGLE) as-of 2026-10-14T18:10:56Z
- session: O 4184.2002 H 4193.5 L 4095.0 · gap +6.9004
- prior: H 4224.7998 L 4169.7002 C 4177.2998
- basis: bars (`yahoo:GC=F:1d`) run +16.0998 (+39.4 bps) vs anchor
- ATR14: 85.8381 pts (2.092%) · RSI14: 34.68
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -3.4195)
- VWAP (UTC day): 4137.4385 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29923.754** (SINGLE) as-of 2026-10-14T18:11:13Z
- session: O 30316.0254 H 30436.5977 L 29886.6543 · gap -253.4551
- prior: H 30595.8008 L 30372.3008 C 30569.4805
- basis: bars (`yahoo:^NDX:1d`) run -0.3204 (-0.1 bps) vs anchor
- ATR14: 385.0386 pts (1.287%) · RSI14: 44.19
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -87.8442)
- VWAP (session): 30168.8414 — price below
- OR15: 30292.8848–30405.3027

## BTCUSD — MAP_ONLY
- price: **81469.13** (SINGLE) as-of 2026-10-14T18:11:14Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 107833 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 107836 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 105725 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
