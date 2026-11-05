# Feed digest — 2026-11-05T20:31:02Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261105T203102Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4106.0** (SINGLE) as-of 2026-11-05T20:30:33Z
- session: O 4075.3999 H 4155.7998 L 4067.0 · gap +2.3999
- prior: H 4081.2 L 3928.2 C 4073.0
- basis: bars (`yahoo:GC=F:1d`) run +10.5 (+25.6 bps) vs anchor
- ATR14: 87.02 pts (2.114%) · RSI14: 50.25
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 8.5338)
- VWAP (UTC day): 4122.8607 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26692.54** (STALE) as-of 2026-11-05T20:31:03Z
- session: O 28078.1855 H 28078.1855 L 26617.8535 · gap -358.9844
- prior: H 28829.6602 L 28276.2207 C 28437.1699
- basis: bars (`yahoo:^NDX:1d`) run +0.001 (+0.0 bps) vs anchor
- ATR14: 625.4891 pts (2.343%) · RSI14: 27.29
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -249.9535)
- VWAP (session): 27109.2147 — price below
- OR15: 27585.1543–28071.373
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:31)

## BTCUSD — MAP_ONLY
- price: **75835.88** (SINGLE) as-of 2026-11-05T20:31:03Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 139653 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 139656 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:31)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 137545 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
