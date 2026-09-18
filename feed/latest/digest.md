# Feed digest — 2026-09-18T10:28:10Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260918T102810Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4380.8999** (SINGLE) as-of 2026-09-18T10:28:08Z
- session: O 4381.6001 H 4439.7998 L 4372.2002 · gap -18.1001
- prior: H 4423.2998 L 4294.5 C 4399.7002
- basis: bars (`yahoo:GC=F:1d`) run +37.8003 (+86.3 bps) vs anchor
- ATR14: 108.688 pts (2.46%) · RSI14: 49.8
- EMA: mixed / no clean stack
- MACD: bearish (hist -21.2473)
- VWAP (UTC day): 4410.7359 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29446.9805** (STALE) as-of 2026-09-17T20:00:00Z
- session: O 29401.5391 H 29494.9492 L 29305.9004 · gap +456.4785
- prior: H 29235.8906 L 28753.2891 C 28945.0605
- ATR14: 388.5742 pts (1.32%) · RSI14: 52.88
- EMA: mixed / no clean stack
- MACD: bearish (hist -29.6207)
- VWAP (session): 29409.9098 — price above
- OR15: 29308.9238–29412.2305
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 10:28)

## BTCUSD — MAP_ONLY
- price: **78180.7** (SINGLE) as-of 2026-09-18T10:28:11Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 69930 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 69933 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 868 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 10:28)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 67822 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
