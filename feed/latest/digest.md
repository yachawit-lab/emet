# Feed digest — 2026-08-13T16:13:11Z

**Desk grade: MAP_ONLY** (schema v1, run `20260813T161311Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4360.2998** (SINGLE) as-of 2026-08-13T16:12:52Z
- session: O 4468.7998 H 4509.1001 L 4408.7998 · gap +59.8999
- prior: H 4434.0 L 4406.2998 C 4408.8999
- basis: bars (`yahoo:GC=F:1d`) run +62.9004 (+144.3 bps) vs anchor
- ATR14: 75.0889 pts (1.698%) · RSI14: 69.03
- EMA: mixed / no clean stack
- MACD: bullish (hist 44.7877)
- VWAP (UTC day): 4446.6805 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30051.361** (SINGLE) as-of 2026-08-13T16:13:11Z
- session: O 29784.0625 H 30159.5566 L 29757.6172 · gap +41.4629
- prior: H 29881.5 L 29715.8809 C 29742.5996
- basis: bars (`yahoo:^NDX:1d`) run -1.4606 (-0.5 bps) vs anchor
- ATR14: 537.452 pts (1.789%) · RSI14: 59.85
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 181.8532)
- VWAP (session): 30041.8259 — price above
- OR15: 29757.6172–29944.5293

## BTCUSD — MAP_ONLY
- price: **63391.45** (SINGLE) as-of 2026-08-13T16:13:12Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 18435 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 18438 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 16327 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
