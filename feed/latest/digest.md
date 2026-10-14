# Feed digest — 2026-10-14T15:55:41Z

**Desk grade: MAP_ONLY** (schema v1, run `20261014T155541Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4086.7** (SINGLE) as-of 2026-10-14T15:55:26Z
- session: O 4184.2002 H 4193.5 L 4101.0 · gap +6.9004
- prior: H 4224.7998 L 4169.7002 C 4177.2998
- basis: bars (`yahoo:GC=F:1d`) run +19.8 (+48.4 bps) vs anchor
- ATR14: 85.4096 pts (2.08%) · RSI14: 34.89
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -3.2153)
- VWAP (UTC day): 4142.4964 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30136.548** (SINGLE) as-of 2026-10-14T15:55:42Z
- session: O 30316.0254 H 30436.5977 L 30092.3613 · gap -253.4551
- prior: H 30595.8008 L 30372.3008 C 30569.4805
- basis: bars (`yahoo:^NDX:1d`) run +0.0008 (+0.0 bps) vs anchor
- ATR14: 370.3453 pts (1.229%) · RSI14: 47.18
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -74.2437)
- VWAP (session): 30264.9912 — price below
- OR15: 30292.8848–30405.3027

## BTCUSD — MAP_ONLY
- price: **81639.74** (SINGLE) as-of 2026-10-14T15:55:43Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 107698 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 107701 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 105590 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
