# Feed digest — 2026-08-02T07:32:50Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260802T073250Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4043.7** (STALE) as-of 2026-08-02T07:32:49Z
- session: O 4163.8999 H 4170.7002 L 4076.3999 · gap +63.7998
- prior: H 4118.5 L 4028.5 C 4100.1001
- basis: bars (`yahoo:GC=F:1d`) run +63.3 (+156.5 bps) vs anchor
- ATR14: 70.7464 pts (1.723%) · RSI14: 49.97
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 17.0023)
- VWAP (UTC day): 4108.9985 — price below
- proxy check: XAUT (tokenized gold) 4048.29 (+11.4 bps) — ok
- ⚠ spot metals/FX closed — reopens Sunday 22:00 UTC
- ⚠ bars are GC=F futures; anchor is spot. ATR/RSI/MACD transfer across the basis, but bar-derived LEVELS are futures levels — do not read them as spot

## NAS100 — RE_ANCHOR
- price: **28274.1953** (STALE) as-of 2026-07-31T20:00:00Z
- session: O 28446.9902 H 28606.7793 L 27954.2402 · gap +340.6406
- prior: H 28168.4199 L 27686.3691 C 28106.3496
- ATR14: 628.6574 pts (2.223%) · RSI14: 44.96
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -105.7199)
- VWAP (session): 28237.0922 — price above
- OR15: 28304.7969–28604.3008
- ⚠ US equities closed — weekend

## BTCUSD — SIZEABLE
- price: **63427.22** (VERIFIED) as-of 2026-08-02T07:32:53Z
- session: O 62823.65 H 63634.0 L 62806.58 · gap +0.01
- prior: H 63150.0 L 62275.0 C 62823.64
- basis: bars (`binance:BTCUSDT:1d`) run +67.79 (+10.7 bps) vs anchor
- ATR14: 1637.0658 pts (2.578%) · RSI14: 47.33
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -218.3677)
- VWAP (rolling 24h): 63037.1636 — price above

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 2075 min old — excluded from anchor
- `XAUUSD` **quote** — twelvedata:XAU/USD:quote is 633 min old — excluded from anchor
- `XAUUSD` **price_freshness** — spot metals/FX closed — reopens Sunday 22:00 UTC
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 2078 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — weekend
- `BTCUSD` **opening_range_15m** — no session open to anchor to (rolling_24h)
