# Feed digest — 2026-09-29T12:02:07Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260929T120207Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4155.0** (SINGLE) as-of 2026-09-29T12:01:38Z
- session: O 4150.1001 H 4193.2998 L 4145.2002 · gap -18.2998
- prior: H 4315.6001 L 4143.1001 C 4168.3999
- basis: bars (`yahoo:GC=F:1d`) run +32.1001 (+77.3 bps) vs anchor
- ATR14: 99.5586 pts (2.378%) · RSI14: 34.93
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -29.0869)
- VWAP (UTC day): 4170.0517 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30276.8105** (STALE) as-of 2026-09-28T20:00:00Z
- session: O 30426.6309 H 30480.4004 L 30081.0605 · gap -181.5
- prior: H 30667.5605 L 30413.5898 C 30608.1309
- ATR14: 400.4441 pts (1.323%) · RSI14: 58.5
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 114.8789)
- VWAP (session): 30289.1785 — price below
- OR15: 30328.5879–30472.7617
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:02)

## BTCUSD — MAP_ONLY
- price: **84361.31** (SINGLE) as-of 2026-09-29T12:02:09Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 85864 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 85867 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 962 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:02)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 83756 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
