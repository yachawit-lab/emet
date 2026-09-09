# Feed digest — 2026-09-09T10:41:10Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260909T104110Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4399.6001** (SINGLE) as-of 2026-09-09T10:40:52Z
- session: O 4399.0 H 4456.2998 L 4384.1001 · gap +5.1001
- prior: H 4406.1001 L 4384.3999 C 4393.8999
- basis: bars (`yahoo:GC=F:1d`) run +38.1997 (+86.8 bps) vs anchor
- ATR14: 78.9519 pts (1.779%) · RSI14: 52.79
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -24.2575)
- VWAP (UTC day): 4431.1175 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29507.7012** (STALE) as-of 2026-09-08T20:00:00Z
- session: O 29645.1797 H 29655.7305 L 29400.6992 · gap +101.0293
- prior: H 29655.2207 L 29440.1504 C 29544.1504
- ATR14: 377.355 pts (1.279%) · RSI14: 52.95
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -3.6034)
- VWAP (session): 29534.5669 — price below
- OR15: 29440.8086–29653.1875
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:41)

## BTCUSD — MAP_ONLY
- price: **79092.53** (SINGLE) as-of 2026-09-09T10:41:11Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 56983 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 56986 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 881 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:41)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 54875 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
