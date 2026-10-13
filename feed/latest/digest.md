# Feed digest — 2026-10-13T13:26:45Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261013T132645Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4185.0** (SINGLE) as-of 2026-10-13T13:26:44Z
- session: O 4195.5 H 4224.7998 L 4173.7002 · gap +4.8999
- prior: H 4242.2998 L 4178.1001 C 4190.6001
- basis: bars (`yahoo:GC=F:1d`) run +15.5 (+37.0 bps) vs anchor
- ATR14: 84.5784 pts (2.014%) · RSI14: 42.55
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 0.8881)
- VWAP (UTC day): 4203.9871 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30664.6973** (STALE) as-of 2026-10-12T20:00:00Z
- session: O 30796.0391 H 30813.9609 L 30618.6406 · gap -87.1113
- prior: H 30946.7402 L 30770.0508 C 30883.1504
- ATR14: 367.4978 pts (1.198%) · RSI14: 56.53
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 3.2246)
- VWAP (session): 30684.9936 — price below
- OR15: 30718.7422–30809.9258
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 13:26)

## BTCUSD — MAP_ONLY
- price: **83319.95** (SINGLE) as-of 2026-10-13T13:26:47Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 106109 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 106112 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 1047 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 13:26)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 104001 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
