# Feed digest — 2026-08-19T11:52:11Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260819T115211Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4364.8999** (SINGLE) as-of 2026-08-19T11:52:07Z
- session: O 4391.3999 H 4429.1001 L 4378.0 · gap +25.3999
- prior: H 4434.1001 L 4330.7002 C 4366.0
- basis: bars (`yahoo:GC=F:1d`) run +53.8003 (+123.3 bps) vs anchor
- ATR14: 74.5678 pts (1.688%) · RSI14: 64.43
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 24.0013)
- VWAP (UTC day): 4404.3818 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29490.957** (STALE) as-of 2026-08-18T20:00:00Z
- session: O 29594.8906 H 29677.2891 L 29425.0898 · gap -400.4902
- prior: H 30195.7207 L 29971.9199 C 29995.3809
- ATR14: 501.4841 pts (1.7%) · RSI14: 52.2
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 111.9551)
- VWAP (session): 29519.5543 — price below
- OR15: 29540.2891–29676.7695
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:52)

## BTCUSD — MAP_ONLY
- price: **64460.69** (SINGLE) as-of 2026-08-19T11:52:13Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 26814 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 26817 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 952 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:52)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 24706 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
