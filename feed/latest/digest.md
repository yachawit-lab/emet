# Feed digest — 2026-10-21T11:04:20Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261021T110420Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4129.2998** (SINGLE) as-of 2026-10-21T11:04:05Z
- session: O 4143.3999 H 4149.7998 L 4124.3999 · gap +0.7998
- prior: H 4174.8999 L 4130.1001 C 4142.6001
- basis: bars (`yahoo:GC=F:1d`) run +15.5 (+37.5 bps) vs anchor
- ATR14: 75.2627 pts (1.816%) · RSI14: 40.5
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 4.3527)
- VWAP (UTC day): 4136.7466 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **29490.2832** (STALE) as-of 2026-10-20T20:00:00Z
- session: O 29393.9609 H 29711.5293 L 29208.8301 · gap -135.3887
- prior: H 29788.7598 L 29461.3203 C 29529.3496
- ATR14: 449.5289 pts (1.524%) · RSI14: 40.72
- EMA: mixed / no clean stack
- MACD: bearish (hist -204.7318)
- VWAP (session): 29529.821 — price below
- OR15: 29222.4414–29387.1133
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 11:04)

## BTCUSD — MAP_ONLY
- price: **83369.12** (SINGLE) as-of 2026-10-21T11:04:22Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 117486 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 117489 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 904 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 11:04)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 115378 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
