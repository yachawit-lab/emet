# Feed digest — 2026-08-11T09:34:26Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260811T093426Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4374.1001** (SINGLE) as-of 2026-08-11T09:34:05Z
- session: O 4446.8999 H 4495.0 L 4415.7002 · gap +85.1001
- prior: H 4390.1001 L 4336.1001 C 4361.7998
- basis: bars (`yahoo:GC=F:1d`) run +58.3999 (+133.5 bps) vs anchor
- ATR14: 81.0262 pts (1.828%) · RSI14: 69.24
- EMA: mixed / no clean stack
- MACD: bullish (hist 48.4483)
- VWAP (UTC day): 4453.7767 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29621.8047** (STALE) as-of 2026-08-10T20:00:00Z
- session: O 29709.4902 H 29784.2109 L 29606.4707 · gap -12.8105
- prior: H 29747.1504 L 29452.7109 C 29722.3008
- ATR14: 583.18 pts (1.969%) · RSI14: 56.14
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 186.1659)
- VWAP (session): 29682.6319 — price below
- OR15: 29612.5391–29724.0469
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 09:34)

## BTCUSD — MAP_ONLY
- price: **64127.3** (SINGLE) as-of 2026-08-11T09:34:28Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 15156 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 15159 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 814 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 09:34)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 13048 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
