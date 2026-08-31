# Feed digest — 2026-08-31T23:51:06Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260831T235106Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4447.7002** (SINGLE) as-of 2026-08-31T23:50:39Z
- session: O 4498.7002 H 4504.7998 L 4490.2998 · gap +20.6001
- prior: H 4625.5 L 4451.7998 C 4478.1001
- basis: bars (`yahoo:GC=F:1d`) run +45.1997 (+101.6 bps) vs anchor
- ATR14: 72.7922 pts (1.62%) · RSI14: 57.91
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -0.131)
- VWAP (UTC day): 4486.3546 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29456.9727** (STALE) as-of 2026-08-31T20:00:00Z
- session: O 29404.293 H 29483.9004 L 29304.4922 · gap -29.1367
- prior: H 29752.7793 L 29383.9199 C 29433.4297
- ATR14: 409.4967 pts (1.39%) · RSI14: 52.07
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -16.2966)
- VWAP (session): 29377.7562 — price above
- OR15: 29342.5488–29460.5137
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 23:51)

## BTCUSD — MAP_ONLY
- price: **78554.92** (SINGLE) as-of 2026-08-31T23:51:08Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 44813 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 44816 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 155 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 23:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 42705 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
