# Feed digest — 2026-10-12T21:38:56Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261012T213856Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4172.7998** (SINGLE) as-of 2026-10-12T21:38:41Z
- session: O 4220.7998 H 4242.2998 L 4178.1001 · gap +4.5
- prior: H 4233.7002 L 4156.1001 C 4216.2998
- basis: bars (`yahoo:GC=F:1d`) run +23.1001 (+55.4 bps) vs anchor
- ATR14: 87.1537 pts (2.077%) · RSI14: 41.79
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -2.3716)
- VWAP (UTC day): 4202.4661 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **30664.697** (STALE) as-of 2026-10-12T21:15:59Z
- session: O 30796.043 H 30813.9609 L 30618.6445 · gap -87.1074
- prior: H 30946.7402 L 30770.0508 C 30883.1504
- basis: bars (`yahoo:^NDX:1d`) run +0.0003 (+0.0 bps) vs anchor
- ATR14: 367.4975 pts (1.198%) · RSI14: 56.53
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 3.2245)
- VWAP (session): 30687.474 — price below
- OR15: 30718.7422–30809.9258
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:38)

## BTCUSD — MAP_ONLY
- price: **82816.21** (SINGLE) as-of 2026-10-12T21:38:58Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 105161 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 105164 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:38)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 103053 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
