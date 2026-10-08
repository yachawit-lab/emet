# Feed digest — 2026-10-08T19:11:57Z

**Desk grade: MAP_ONLY** (schema v1, run `20261008T191157Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4130.2002** (SINGLE) as-of 2026-10-08T19:11:39Z
- session: O 4139.8999 H 4170.7002 L 4128.1001 · gap -0.8003
- prior: H 4197.7998 L 4091.2 C 4140.7002
- basis: bars (`yahoo:GC=F:1d`) run +24.0 (+58.1 bps) vs anchor
- ATR14: 89.7905 pts (2.161%) · RSI14: 36.09
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -13.6077)
- VWAP (UTC day): 4149.4475 — price above
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30662.712** (SINGLE) as-of 2026-10-08T19:11:58Z
- session: O 30985.2324 H 31125.1309 L 30556.3965 · gap -174.8477
- prior: H 31170.1191 L 30904.4609 C 31160.0801
- basis: bars (`yahoo:^NDX:1d`) run +0.0009 (+0.0 bps) vs anchor
- ATR14: 387.3 pts (1.263%) · RSI14: 57.6
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 51.3218)
- VWAP (session): 30872.3789 — price below
- OR15: 30960.2031–31036.6328

## BTCUSD — MAP_ONLY
- price: **81470.89** (SINGLE) as-of 2026-10-08T19:11:59Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 99254 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 99257 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 97146 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
