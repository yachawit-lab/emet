# Feed digest — 2026-08-19T20:45:49Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260819T204549Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4520.2002** (SINGLE) as-of 2026-08-19T20:45:38Z
- session: O 4391.3999 H 4582.2002 L 4378.0 · gap +25.3999
- prior: H 4434.1001 L 4330.7002 C 4366.0
- basis: bars (`yahoo:GC=F:1d`) run +59.1997 (+131.0 bps) vs anchor
- ATR14: 85.5036 pts (1.867%) · RSI14: 71.6
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 34.2567)
- VWAP (UTC day): 4495.5057 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29426.023** (STALE) as-of 2026-08-19T20:45:50Z
- session: O 29580.8516 H 29652.2949 L 29288.7539 · gap +89.8906
- prior: H 29677.2891 L 29425.0898 C 29490.9609
- basis: bars (`yahoo:^NDX:1d`) run +0.0004 (+0.0 bps) vs anchor
- ATR14: 491.631 pts (1.671%) · RSI14: 51.39
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 68.5982)
- VWAP (session): 29456.953 — price below
- OR15: 29471.8848–29647.6328
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:45)

## BTCUSD — MAP_ONLY
- price: **68649.33** (SINGLE) as-of 2026-08-19T20:45:50Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 27348 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 27351 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:45)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 25240 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
