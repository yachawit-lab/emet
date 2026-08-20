# Feed digest — 2026-08-20T11:54:28Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260820T115428Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4469.6001** (SINGLE) as-of 2026-08-20T11:54:10Z
- session: O 4580.0 H 4583.7998 L 4532.2998 · gap +90.6001
- prior: H 4524.1001 L 4327.6001 C 4489.3999
- basis: bars (`yahoo:GC=F:1d`) run +63.1997 (+141.4 bps) vs anchor
- ATR14: 84.8326 pts (1.872%) · RSI14: 69.97
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 30.2972)
- VWAP (UTC day): 4549.3405 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29426.0234** (STALE) as-of 2026-08-19T20:00:00Z
- session: O 29580.8496 H 29652.3008 L 29288.75 · gap +89.8887
- prior: H 29677.2891 L 29425.0898 C 29490.9609
- ATR14: 495.2357 pts (1.683%) · RSI14: 51.06
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 69.6371)
- VWAP (session): 29452.1926 — price below
- OR15: 29471.8848–29647.6328
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:54)

## BTCUSD — MAP_ONLY
- price: **71982.72** (SINGLE) as-of 2026-08-20T11:54:30Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 28256 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 28259 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 954 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:54)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 26148 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
