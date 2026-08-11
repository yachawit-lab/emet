# Feed digest — 2026-08-11T22:25:27Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260811T222527Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4377.2998** (SINGLE) as-of 2026-08-11T22:25:07Z
- session: O 4430.0 H 4433.6001 L 4427.7998 · gap +68.2002
- prior: H 4390.1001 L 4336.1001 C 4361.7998
- basis: bars (`yahoo:GC=F:1d`) run +54.3003 (+124.0 bps) vs anchor
- ATR14: 76.6405 pts (1.729%) · RSI14: 69.21
- EMA: mixed / no clean stack
- MACD: bullish (hist 48.3909)
- VWAP (UTC day): 4447.2142 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29525.4785** (STALE) as-of 2026-08-11T20:00:00Z
- session: O 29694.6973 H 29705.7988 L 29427.6094 · gap +72.8965
- prior: H 29784.2109 L 29606.4707 C 29621.8008
- ATR14: 561.3898 pts (1.901%) · RSI14: 55.05
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 174.1266)
- VWAP (session): 29564.6952 — price below
- OR15: 29576.5215–29698.6289
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:25)

## BTCUSD — MAP_ONLY
- price: **63663.6** (SINGLE) as-of 2026-08-11T22:25:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 15927 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 15930 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 69 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:25)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 13819 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
