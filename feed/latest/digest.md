# Feed digest — 2026-09-21T11:51:37Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260921T115137Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4368.2998** (SINGLE) as-of 2026-09-21T11:51:33Z
- session: O 4413.0 H 4422.1001 L 4377.5 · gap -11.8999
- prior: H 4439.7998 L 4372.2002 C 4424.8999
- basis: bars (`yahoo:GC=F:1d`) run +31.6001 (+72.3 bps) vs anchor
- ATR14: 104.3008 pts (2.371%) · RSI14: 48.2
- EMA: mixed / no clean stack
- MACD: bearish (hist -17.9813)
- VWAP (UTC day): 4395.9772 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29644.168** (STALE) as-of 2026-09-18T20:00:00Z
- session: O 29529.6406 H 29647.8008 L 29371.8906 · gap +82.6602
- prior: H 29494.9492 L 29305.9004 C 29446.9805
- ATR14: 380.5293 pts (1.284%) · RSI14: 55.83
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 3.1557)
- VWAP (session): 29487.8219 — price above
- OR15: 29514.3613–29560.2988
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:51)

## BTCUSD — MAP_ONLY
- price: **84857.81** (SINGLE) as-of 2026-09-21T11:51:38Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 74334 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 74337 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 3832 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:51)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 72226 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
