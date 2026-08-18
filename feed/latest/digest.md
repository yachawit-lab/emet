# Feed digest — 2026-08-18T15:05:46Z

**Desk grade: MAP_ONLY** (schema v1, run `20260818T150546Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4376.8999** (SINGLE) as-of 2026-08-18T15:05:35Z
- session: O 4473.3999 H 4493.1001 L 4427.7998 · gap +55.6001
- prior: H 4428.5 L 4386.5 C 4417.7998
- basis: bars (`yahoo:GC=F:1d`) run +60.7002 (+138.7 bps) vs anchor
- ATR14: 73.4414 pts (1.655%) · RSI14: 67.83
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 31.481)
- VWAP (UTC day): 4453.7315 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29476.4** (SINGLE) as-of 2026-08-18T15:05:47Z
- session: O 29594.8887 H 29677.2871 L 29435.6895 · gap -451.252
- prior: H 30179.8203 L 29934.6602 C 30046.1406
- basis: bars (`yahoo:^NDX:1d`) run +0.0004 (+0.0 bps) vs anchor
- ATR14: 523.8041 pts (1.777%) · RSI14: 52.46
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 130.379)
- VWAP (session): 29553.0209 — price below
- OR15: 29540.2891–29676.7695

## BTCUSD — MAP_ONLY
- price: **64746.01** (SINGLE) as-of 2026-08-18T15:05:48Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 25568 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 25571 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 23460 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
