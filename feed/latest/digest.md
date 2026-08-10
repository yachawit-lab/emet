# Feed digest — 2026-08-10T22:19:29Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260810T221929Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4393.5** (SINGLE) as-of 2026-08-10T22:19:07Z
- session: O 4446.8999 H 4451.8999 L 4443.2002 · gap +106.1997
- prior: H 4371.5 L 4274.0 C 4340.7002
- basis: bars (`yahoo:GC=F:1d`) run +56.1001 (+127.7 bps) vs anchor
- ATR14: 81.0981 pts (1.823%) · RSI14: 69.69
- EMA: mixed / no clean stack
- MACD: bullish (hist 48.6407)
- VWAP (UTC day): 4405.8592 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29621.8047** (STALE) as-of 2026-08-10T20:00:00Z
- session: O 29709.4863 H 29784.207 L 29606.4746 · gap -12.8145
- prior: H 29747.1504 L 29452.7109 C 29722.3008
- ATR14: 583.1794 pts (1.969%) · RSI14: 56.14
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 186.1662)
- VWAP (session): 29681.7113 — price below
- OR15: 29612.5391–29724.0469
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 22:19)

## BTCUSD — MAP_ONLY
- price: **64001.41** (SINGLE) as-of 2026-08-10T22:19:31Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 14482 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 14485 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 64 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 22:19)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 12373 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
