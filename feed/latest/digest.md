# Feed digest — 2026-08-25T20:46:25Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260825T204625Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4662.5** (SINGLE) as-of 2026-08-25T20:45:59Z
- session: O 4710.1001 H 4755.0 L 4660.5 · gap +69.3003
- prior: H 4670.8999 L 4635.1001 C 4640.7998
- basis: bars (`yahoo:GC=F:1d`) run +55.8999 (+119.9 bps) vs anchor
- ATR14: 82.9405 pts (1.758%) · RSI14: 77.05
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 39.9023)
- VWAP (UTC day): 4697.521 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29209.228** (STALE) as-of 2026-08-25T20:46:26Z
- session: O 29231.1797 H 29338.7734 L 29077.7188 · gap +208.0
- prior: H 29151.9707 L 28875.9609 C 29023.1797
- basis: bars (`yahoo:^NDX:1d`) run +0.0005 (+0.0 bps) vs anchor
- ATR14: 450.5586 pts (1.543%) · RSI14: 48.93
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -46.1524)
- VWAP (session): 29192.405 — price above
- OR15: 29234.6953–29304.7051
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 20:46)

## BTCUSD — MAP_ONLY
- price: **78450.67** (SINGLE) as-of 2026-08-25T20:46:27Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 35988 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 35991 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 20:46)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 33880 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
