# Feed digest — 2026-10-05T21:16:31Z

**Desk grade: RE_ANCHOR** (schema v1, run `20261005T211631Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4141.5** (SINGLE) as-of 2026-10-05T21:16:08Z
- session: O 4169.3999 H 4198.8999 L 4150.3999 · gap +7.1001
- prior: H 4259.0 L 4153.7998 C 4162.2998
- basis: bars (`yahoo:GC=F:1d`) run +26.1001 (+63.0 bps) vs anchor
- ATR14: 93.2322 pts (2.237%) · RSI14: 34.8
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -22.2235)
- VWAP (UTC day): 4175.0684 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — RE_ANCHOR
- price: **31076.441** (STALE) as-of 2026-10-05T21:15:59Z
- session: O 30812.7617 H 31117.3574 L 30798.4219 · gap +4.832
- prior: H 31017.5293 L 30737.0703 C 30807.9297
- basis: bars (`yahoo:^NDX:1d`) run +0.0004 (+0.0 bps) vs anchor
- ATR14: 381.4544 pts (1.227%) · RSI14: 68.3
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 86.7888)
- VWAP (session): 31002.4812 — price above
- OR15: 30798.9355–30961.7754
- ⚠ US equities closed — outside 13:30–20:00 UTC (now 21:16)

## BTCUSD — MAP_ONLY
- price: **85772.33** (SINGLE) as-of 2026-10-05T21:16:32Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 95059 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 95062 min old — excluded from anchor
- `NAS100` **price_freshness** — US equities closed — outside 13:30–20:00 UTC (now 21:16)
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 92951 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
