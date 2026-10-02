# Feed digest — 2026-10-02T18:16:36Z

**Desk grade: MAP_ONLY** (schema v1, run `20261002T181636Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4140.2998** (SINGLE) as-of 2026-10-02T18:16:27Z
- session: O 4204.6001 H 4259.0 L 4153.7998 · gap +2.3003
- prior: H 4222.7998 L 4169.3999 C 4202.2998
- basis: bars (`yahoo:GC=F:1d`) run +26.2002 (+63.3 bps) vs anchor
- ATR14: 96.673 pts (2.32%) · RSI14: 34.39
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -24.603)
- VWAP (UTC day): 4205.1446 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **30784.761** (SINGLE) as-of 2026-10-02T18:16:37Z
- session: O 30869.1406 H 31017.5254 L 30737.0664 · gap +367.5801
- prior: H 30616.2402 L 30274.6504 C 30501.5605
- basis: bars (`yahoo:^NDX:1d`) run +2.2898 (+0.7 bps) vs anchor
- ATR14: 386.2602 pts (1.255%) · RSI14: 65.07
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 70.016)
- VWAP (session): 30874.4695 — price below
- OR15: 30804.8555–30916.5332

## BTCUSD — MAP_ONLY
- price: **84732.4** (SINGLE) as-of 2026-10-02T18:16:37Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 90559 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 90562 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 88451 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
