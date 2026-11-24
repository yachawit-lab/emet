# Feed digest — 2026-11-24T00:39:07Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261124T003907Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3648.8999** (SINGLE) as-of 2026-11-24T00:38:43Z
- session: O 3636.3999 H 3647.3 L 3618.5 · gap +121.0
- prior: H 3638.1001 L 3502.8999 C 3515.3999
- basis: bars (`yahoo:GC=F:1d`) run -4.8999 (-13.4 bps) vs anchor
- ATR14: 103.3516 pts (2.836%) · RSI14: 32.64
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -35.6629)
- VWAP (UTC day): 3635.4277 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **26746.0957** (STALE) as-of 2026-11-23T21:00:00Z
- session: O 26889.291 H 27018.8828 L 26386.416 · gap +1860.3105
- prior: H 26429.0898 L 24910.4805 C 25028.9805
- ATR14: 850.2275 pts (3.179%) · RSI14: 41.99
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -134.3087)
- VWAP (session): 26726.5324 — price below
- OR15: 26392.9004–26866.623
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 00:39)

## BTCUSD — MAP_ONLY
- price: **61108.65** (SINGLE) as-of 2026-11-24T00:39:08Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 165821 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 165824 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 143 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 00:39)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 163713 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
