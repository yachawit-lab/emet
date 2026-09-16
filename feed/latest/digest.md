# Feed digest — 2026-09-16T10:46:01Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260916T104601Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4350.1001** (SINGLE) as-of 2026-09-16T10:45:42Z
- session: O 4333.5 H 4390.2002 L 4315.2002 · gap +0.7002
- prior: H 4358.2002 L 4301.6001 C 4332.7998
- basis: bars (`yahoo:GC=F:1d`) run +38.3999 (+88.3 bps) vs anchor
- ATR14: 105.9134 pts (2.413%) · RSI14: 47.24
- EMA: mixed / no clean stack
- MACD: bearish (hist -31.0605)
- VWAP (UTC day): 4360.9814 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **28937.8379** (STALE) as-of 2026-09-15T20:00:00Z
- session: O 29100.1602 H 29142.8008 L 28899.4297 · gap -27.0
- prior: H 29285.5 L 28867.6699 C 29127.1602
- ATR14: 367.9716 pts (1.272%) · RSI14: 43.88
- EMA: mixed / no clean stack
- MACD: bearish (hist -50.9387)
- VWAP (session): 28985.3236 — price below
- OR15: 29066.1934–29136.2598
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:46)

## BTCUSD — MAP_ONLY
- price: **75922.8** (SINGLE) as-of 2026-09-16T10:46:02Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 67068 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 67071 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 886 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 64960 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
