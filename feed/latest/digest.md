# Feed digest — 2026-08-02T06:50:55Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260802T065055Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4043.7** (SINGLE) as-of 2026-08-02T06:50:48Z
- session: O 4163.8999 H 4170.7002 L 4076.3999 · gap +63.7998
- prior: H 4118.5 L 4028.5 C 4100.1001
- basis: bars (`yahoo:GC=F:1d`) run +63.3 (+156.5 bps) vs anchor
- ATR14: 70.7464 pts (1.723%) · RSI14: 49.97
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 17.0023)
- ⚠ bars are GC=F futures; anchor is spot. ATR/RSI/MACD transfer across the basis, but bar-derived LEVELS are futures levels — do not read them as spot

## NAS100 — RE_ANCHOR
- price: **28274.1953** (STALE) as-of 2026-07-31T20:00:00Z
- session: O 28446.9902 H 28606.7793 L 27954.2402 · gap +340.6406
- prior: H 28168.4199 L 27686.3691 C 28106.3496
- ATR14: 628.6574 pts (2.223%) · RSI14: 44.96
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -105.7199)
- VWAP: 28237.0922 — price above
- OR15: 28304.7969–28604.3008

## BTCUSD — SIZEABLE
- price: **63494.01** (VERIFIED) as-of 2026-08-02T06:50:57Z
- session: O 62823.65 H 63634.0 L 62806.58 · gap +0.01
- prior: H 63150.0 L 62275.0 C 62823.64
- basis: bars (`binance:BTCUSDT:1d`) run -0.01 (-0.0 bps) vs anchor
- ATR14: 1637.0658 pts (2.578%) · RSI14: 47.32
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -218.4321)
- VWAP: 63024.762 — price above
- OR15: 63080.63–63083.74

## Data gaps

- `XAUUSD` **intraday bars** — yahoo: unexpected payload for GC=F: 'timestamp'
- `XAUUSD` **vwap_session** — no intraday source — VWAP and OR unavailable
