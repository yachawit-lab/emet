# Feed digest — 2026-09-01T15:31:11Z

**Desk grade: MAP_ONLY** (schema v1, run `20260901T153111Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4366.2002** (SINGLE) as-of 2026-09-01T15:30:49Z
- session: O 4498.7002 H 4510.5 L 4374.1001 · gap +67.6001
- prior: H 4466.8999 L 4410.8999 C 4431.1001
- basis: bars (`yahoo:GC=F:1d`) run +46.5 (+106.5 bps) vs anchor
- ATR14: 80.0218 pts (1.813%) · RSI14: 51.67
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -14.2286)
- VWAP (UTC day): 4430.189 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29188.368** (SINGLE) as-of 2026-09-01T15:31:12Z
- session: O 29056.5781 H 29216.9961 L 28992.252 · gap -400.3926
- prior: H 29483.9004 L 29304.4902 C 29456.9707
- basis: bars (`yahoo:^NDX:1d`) run +0.339 (+0.1 bps) vs anchor
- ATR14: 413.4413 pts (1.416%) · RSI14: 48.02
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -30.9567)
- VWAP (session): 29105.6118 — price above
- OR15: 28993.6113–29088.1582

## BTCUSD — MAP_ONLY
- price: **77795.11** (SINGLE) as-of 2026-09-01T15:31:13Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 45753 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 45756 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 43645 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
