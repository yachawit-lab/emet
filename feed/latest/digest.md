# Feed digest — 2026-10-08T19:30:11Z

**Desk grade: MAP_ONLY** (schema v1, run `20261008T193011Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4131.1001** (SINGLE) as-of 2026-10-08T19:30:09Z
- session: O 4139.8999 H 4170.7002 L 4128.1001 · gap -0.8003
- prior: H 4197.7998 L 4091.2 C 4140.7002
- basis: bars (`yahoo:GC=F:1d`) run +22.2998 (+54.0 bps) vs anchor
- ATR14: 89.7905 pts (2.162%) · RSI14: 35.99
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -13.6588)
- VWAP (UTC day): 4149.467 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30698.786** (SINGLE) as-of 2026-10-08T19:30:11Z
- session: O 30985.2324 H 31125.1309 L 30556.3965 · gap -174.8477
- prior: H 31170.1191 L 30904.4609 C 31160.0801
- basis: bars (`yahoo:^NDX:1d`) run +1.3859 (+0.5 bps) vs anchor
- ATR14: 387.3 pts (1.262%) · RSI14: 58.28
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 53.7124)
- VWAP (session): 30863.0084 — price below
- OR15: 30960.2031–31036.6328

## BTCUSD — MAP_ONLY
- price: **81644.63** (SINGLE) as-of 2026-10-08T19:30:12Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 99272 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 99275 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 97164 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
