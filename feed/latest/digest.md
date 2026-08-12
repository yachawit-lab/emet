# Feed digest — 2026-08-12T09:46:48Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260812T094648Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4414.3999** (SINGLE) as-of 2026-08-12T09:46:38Z
- session: O 4430.0 H 4484.2002 L 4421.3999 · gap +47.0
- prior: H 4408.6001 L 4365.1001 C 4383.0
- basis: bars (`yahoo:GC=F:1d`) run +58.8999 (+133.4 bps) vs anchor
- ATR14: 76.7353 pts (1.715%) · RSI14: 71.13
- EMA: mixed / no clean stack
- MACD: bullish (hist 50.0797)
- VWAP (UTC day): 4459.6676 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29525.4785** (STALE) as-of 2026-08-11T20:00:00Z
- session: O 29694.6992 H 29705.8008 L 29427.6094 · gap +72.8984
- prior: H 29784.2109 L 29606.4707 C 29621.8008
- ATR14: 567.0096 pts (1.92%) · RSI14: 54.55
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 163.0512)
- VWAP (session): 29560.98 — price below
- OR15: 29576.5215–29698.6289
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 09:46)

## BTCUSD — MAP_ONLY
- price: **63978.61** (SINGLE) as-of 2026-08-12T09:46:50Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 16609 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 16612 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 827 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 09:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 14501 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
