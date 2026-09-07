# Feed digest — 2026-09-07T18:10:16Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260907T181016Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4409.7002** (SINGLE) as-of 2026-09-07T18:09:48Z
- session: O 4466.5 H 4481.2998 L 4426.2002 · gap +36.7002
- prior: H 4429.7998 L 4429.7998 C 4429.7998
- basis: bars (`yahoo:GC=F:1d`) run +66.8999 (+151.7 bps) vs anchor
- ATR14: 80.1642 pts (1.791%) · RSI14: 55.22
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -20.8863)
- VWAP (UTC day): 4479.243 — price below
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

## BTCUSD — MAP_ONLY
- price: **79172.71** (SINGLE) as-of 2026-09-07T18:10:17Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 54552 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 54555 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 4210 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 52444 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
