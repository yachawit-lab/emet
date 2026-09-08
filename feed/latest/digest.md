# Feed digest — 2026-09-08T10:30:01Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260908T103001Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4401.0** (SINGLE) as-of 2026-09-08T10:29:50Z
- session: O 4466.5 H 4488.7998 L 4426.2002 · gap +36.7002
- prior: H 4429.7998 L 4429.7998 C 4429.7998
- basis: bars (`yahoo:GC=F:1d`) run +41.5 (+94.3 bps) vs anchor
- ATR14: 80.6999 pts (1.817%) · RSI14: 53.15
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -23.0625)
- VWAP (UTC day): 4451.2243 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29544.1543** (STALE) as-of 2026-09-04T20:00:00Z
- session: O 29539.5703 H 29655.2207 L 29440.1504 · gap +57.25
- prior: H 29538.7598 L 29160.9609 C 29482.3203
- ATR14: 386.7709 pts (1.309%) · RSI14: 53.58
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -11.5781)
- VWAP (session): 29526.9486 — price above
- OR15: 29520.3105–29604.7812
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:30)

## BTCUSD — MAP_ONLY
- price: **78833.96** (SINGLE) as-of 2026-09-08T10:30:02Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 55532 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 55535 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 5190 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:30)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 53424 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
