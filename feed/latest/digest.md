# Feed digest — 2026-08-28T18:08:15Z

**Desk grade: MAP_ONLY** (schema v1, run `20260828T180815Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **4461.2998** (SINGLE) as-of 2026-08-28T18:07:58Z
- session: O 4656.0 H 4688.0 L 4510.5 · gap +46.2998
- prior: H 4609.7002 L 4609.7002 C 4609.7002
- basis: bars (`yahoo:GC=F:1d`) run +58.8003 (+131.8 bps) vs anchor
- ATR14: 76.6092 pts (1.695%) · RSI14: 60.57
- EMA: bullish stack (9>20>50)
- MACD: bullish (hist 11.7859)
- VWAP (UTC day): 4605.41 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **29448.888** (SINGLE) as-of 2026-08-28T18:08:16Z
- session: O 29545.9004 H 29752.7812 L 29383.918 · gap -95.6602
- prior: H 29643.5293 L 29366.4199 C 29641.5605
- basis: bars (`yahoo:^NDX:1d`) run -0.4857 (-0.2 bps) vs anchor
- ATR14: 427.1961 pts (1.451%) · RSI14: 51.95
- EMA: bullish stack (9>20>50)
- MACD: bearish (hist -19.1927)
- VWAP (session): 29563.1052 — price below
- OR15: 29518.7812–29645.0449

## BTCUSD — MAP_ONLY
- price: **77782.23** (SINGLE) as-of 2026-08-28T18:08:16Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 40150 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 40153 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 38042 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
