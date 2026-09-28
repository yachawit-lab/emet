# Feed digest — 2026-09-28T18:41:29Z

**Desk grade: MAP_ONLY** (schema v1, run `20260928T184129Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4137.7998** (SINGLE) as-of 2026-09-28T18:41:07Z
- session: O 4315.0 H 4315.6001 L 4143.1001 · gap -6.2002
- prior: H 4351.6001 L 4289.2002 C 4321.2002
- basis: bars (`yahoo:GC=F:1d`) run +29.9004 (+72.3 bps) vs anchor
- ATR14: 103.517 pts (2.484%) · RSI14: 32.93
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -27.0221)
- VWAP (UTC day): 4191.6798 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30317.511** (SINGLE) as-of 2026-09-28T18:41:30Z
- session: O 30426.6328 H 30480.4004 L 30081.0625 · gap -181.498
- prior: H 30667.5605 L 30413.5898 C 30608.1309
- basis: bars (`yahoo:^NDX:1d`) run +0.0007 (+0.0 bps) vs anchor
- ATR14: 400.444 pts (1.321%) · RSI14: 59.2
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 117.4763)
- VWAP (session): 30294.0618 — price above
- OR15: 30328.5879–30472.7617

## BTCUSD — MAP_ONLY
- price: **83781.85** (SINGLE) as-of 2026-09-28T18:41:30Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 84824 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 84827 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 82715 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
