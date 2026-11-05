# Feed digest — 2026-11-05T20:49:58Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261105T204958Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4101.3999** (SINGLE) as-of 2026-11-05T20:49:33Z
- session: O 3940.8 H 4155.7998 L 4067.0 · gap -132.2
- prior: H 4081.2 L 3928.2 C 4073.0
- basis: bars (`yahoo:GC=F:1d`) run +12.5 (+30.5 bps) vs anchor
- ATR14: 87.02 pts (2.115%) · RSI14: 50.06
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 8.3679)
- VWAP (UTC day): 4122.8067 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26750.198** (STALE) as-of 2026-11-05T20:49:58Z
- session: O 28078.1855 H 28078.1855 L 26617.8535 · gap -358.9844
- prior: H 28829.6602 L 28276.2207 C 28437.1699
- basis: bars (`yahoo:^NDX:1d`) run +0.0012 (+0.0 bps) vs anchor
- ATR14: 625.4891 pts (2.338%) · RSI14: 27.55
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -246.2738)
- VWAP (session): 27109.2147 — price below
- OR15: 27585.1543–28071.373
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:49)

## BTCUSD — MAP_ONLY
- price: **76096.59** (SINGLE) as-of 2026-11-05T20:49:59Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 139672 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 139675 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:49)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 137564 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
