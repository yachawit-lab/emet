# Feed digest — 2026-10-08T00:12:08Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261008T001208Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4107.3999** (SINGLE) as-of 2026-10-08T00:11:54Z
- session: O 4139.8999 H 4140.7998 L 4128.1001 · gap -47.2002
- prior: H 4212.3999 L 4130.7002 C 4187.1001
- basis: bars (`yahoo:GC=F:1d`) run +27.3999 (+66.7 bps) vs anchor
- ATR14: 90.0222 pts (2.177%) · RSI14: 33.96
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -17.0989)
- VWAP (UTC day): 4134.2668 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **31160.0762** (STALE) as-of 2026-10-07T20:00:00Z
- session: O 30976.248 H 31170.1191 L 30904.4648 · gap -248.2227
- prior: H 31361.3691 L 31208.1992 C 31224.4707
- ATR14: 370.6549 pts (1.19%) · RSI14: 68.28
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 94.0254)
- VWAP (session): 31064.1872 — price above
- OR15: 30906.6426–31029.2969
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 00:12)

## BTCUSD — MAP_ONLY
- price: **83203.18** (SINGLE) as-of 2026-10-08T00:12:11Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 98114 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 98117 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 176 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 00:12)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 96006 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
