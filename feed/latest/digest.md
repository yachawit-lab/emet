# Feed digest — 2026-10-14T11:04:33Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261014T110433Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4138.2002** (SINGLE) as-of 2026-10-14T11:04:20Z
- session: O 4184.2002 H 4193.5 L 4162.7998 · gap +6.9004
- prior: H 4224.7998 L 4169.7002 C 4177.2998
- basis: bars (`yahoo:GC=F:1d`) run +27.5996 (+66.7 bps) vs anchor
- ATR14: 80.9953 pts (1.944%) · RSI14: 39.28
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.5691)
- VWAP (UTC day): 4176.2246 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30569.4805** (STALE) as-of 2026-10-13T20:00:00Z
- session: O 30404.1992 H 30595.8008 L 30372.3008 · gap -260.5
- prior: H 30813.9609 L 30618.6406 C 30664.6992
- ATR14: 362.1319 pts (1.185%) · RSI14: 54.69
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -26.2594)
- VWAP (session): 30528.0932 — price above
- OR15: 30377.0723–30570.4355
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:04)

## BTCUSD — MAP_ONLY
- price: **83278.42** (SINGLE) as-of 2026-10-14T11:04:35Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 107407 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 107410 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 905 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:04)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 105299 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
