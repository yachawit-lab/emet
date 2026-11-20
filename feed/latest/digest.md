# Feed digest — 2026-11-20T21:33:28Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261120T213328Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **3522.8201** (STALE) as-of 2026-11-20T21:33:06Z
- session: O 3633.8 H 3638.1001 L 3503.2 · gap -51.7
- prior: H 3759.5 L 3620.6001 C 3685.5
- basis: bars (`yahoo:GC=F:1d`) run +0.0798 (+0.2 bps) vs anchor
- ATR14: 101.132 pts (2.871%) · RSI14: 21.77
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -37.9925)
- VWAP (UTC day): 3554.2935 — price below
- ⚠ spot metals/FX closed — closed Friday 21:00 UTC
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **25028.982** (STALE) as-of 2026-11-20T21:33:27Z
- session: O 26184.7637 H 26429.0898 L 24910.4785 · gap -332.2871
- prior: H 27749.3496 L 26481.8203 C 26517.0508
- basis: bars (`yahoo:^NDX:1d`) run +0.0004 (+0.0 bps) vs anchor
- ATR14: 762.5528 pts (3.047%) · RSI14: 26.54
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -194.9468)
- VWAP (session): 25727.938 — price below
- OR15: 26048.2363–26190.3672
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:33)

## BTCUSD — MAP_ONLY
- price: **58573.25** (SINGLE) as-of 2026-11-20T21:33:29Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 161315 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **price_freshness** — spot metals/FX closed — closed Friday 21:00 UTC
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 161318 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:33)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 159207 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
