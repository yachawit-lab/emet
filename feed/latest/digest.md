# Feed digest — 2026-08-02T07:47:13Z

**Desk grade: RE_ANCHOR** (schema v1, run `20260802T074713Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — RE_ANCHOR
- price: **4043.7** (STALE) as-of 2026-08-02T07:46:49Z
- session: O 4042.6794 H 4042.8612 L 4042.6187 · gap -0.0616
- prior: H 4044.9187 L 4042.0372 C 4042.741
- basis: bars (`twelvedata:XAU/USD:1day`) run -0.9264 (-2.3 bps) vs anchor
- ATR14: 61.0757 pts (1.511%) · RSI14: 46.21
- EMA: bearish stack (9<20<50)
- MACD: bullish (hist 4.3891)
- VWAP (UTC day): 4108.9985 — price below
- proxy check: XAUT (tokenized gold) 4048.07 (+10.8 bps) — ok
- ⚠ spot metals/FX closed — reopens Sunday 22:00 UTC

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
- price: **63433.44** (VERIFIED) as-of 2026-08-02T07:47:16Z
- session: O 62823.65 H 63634.0 L 62806.58 · gap +0.01
- prior: H 63150.0 L 62275.0 C 62823.64
- basis: bars (`binance:BTCUSDT:1d`) run +61.81 (+9.7 bps) vs anchor
- ATR14: 1637.0658 pts (2.578%) · RSI14: 47.33
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -218.3524)
- VWAP (rolling 24h): 63045.7133 — price above

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 2089 min old — excluded from anchor
- `XAUUSD` **quote** — twelvedata:XAU/USD:quote is 647 min old — excluded from anchor
- `XAUUSD` **price_freshness** — spot metals/FX closed — reopens Sunday 22:00 UTC
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 2092 min old — excluded from anchor
- `NAS100` **quote** — cnbc:NDX:quote is 2147 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — weekend
- `BTCUSD` **opening_range_15m** — no session open to anchor to (rolling_24h)
