# Feed digest — 2026-10-08T12:43:11Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261008T124311Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4124.1001** (SINGLE) as-of 2026-10-08T12:43:07Z
- session: O 4139.8999 H 4166.7998 L 4128.1001 · gap -0.8003
- prior: H 4197.7998 L 4091.2 C 4140.7002
- basis: bars (`yahoo:GC=F:1d`) run +24.6997 (+59.9 bps) vs anchor
- ATR14: 89.5119 pts (2.158%) · RSI14: 35.4
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -13.9524)
- VWAP (UTC day): 4149.0645 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **31160.0762** (STALE) as-of 2026-10-07T20:00:00Z
- session: O 30976.25 H 31170.1191 L 30904.4609 · gap -248.2207
- prior: H 31361.3691 L 31208.1992 C 31224.4707
- ATR14: 370.6551 pts (1.19%) · RSI14: 68.28
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 94.0257)
- VWAP (session): 31066.5361 — price above
- OR15: 30906.6426–31029.2969
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 12:43)

## BTCUSD — MAP_ONLY
- price: **82341.73** (SINGLE) as-of 2026-10-08T12:43:12Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 98865 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 98868 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1003 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 12:43)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 96757 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
