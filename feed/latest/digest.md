# Feed digest — 2026-10-15T10:47:00Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261015T104700Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4154.0** (SINGLE) as-of 2026-10-15T10:46:44Z
- session: O 4128.2998 H 4183.2998 L 4120.8999 · gap +20.3999
- prior: H 4193.5 L 4095.0 C 4107.8999
- basis: bars (`yahoo:GC=F:1d`) run +22.7002 (+54.6 bps) vs anchor
- ATR14: 85.0929 pts (2.037%) · RSI14: 42.96
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.3838)
- VWAP (UTC day): 4165.5826 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29950.8164** (STALE) as-of 2026-10-14T20:00:00Z
- session: O 30316.0293 H 30436.5996 L 29861.0605 · gap -253.4512
- prior: H 30595.8008 L 30372.3008 C 30569.4805
- ATR14: 386.8663 pts (1.292%) · RSI14: 44.55
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -86.0925)
- VWAP (session): 30097.8475 — price below
- OR15: 30292.8848–30405.3027
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:47)

## BTCUSD — MAP_ONLY
- price: **80782.09** (SINGLE) as-of 2026-10-15T10:47:02Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 108829 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 108832 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 887 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:47)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 106721 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
