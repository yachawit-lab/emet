# Feed digest — 2026-11-18T14:59:51Z

**Desk grade: MAP_ONLY** (schema v1, run `20261118T145951Z`)

> Feed is corroboration. The live broker print remains primary truth (playbook §2b).

## XAUUSD — MAP_ONLY
- price: **3767.25** (SINGLE) as-of 2026-11-18T14:59:31Z
- session: O 3855.2 H 3859.3 L 3744.6001 · gap -9.0
- prior: H 3894.0 L 3839.2 C 3864.2
- basis: bars (`yahoo:GC=F:1d`) run +4.45 (+11.8 bps) vs anchor
- ATR14: 89.8745 pts (2.383%) · RSI14: 30.58
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -16.8773)
- VWAP (UTC day): 3784.4399 — price below
- ⚠ FALLBACK: bars are GC=F futures ~156 bps above spot. ATR/RSI/MACD transfer across the basis; bar-derived LEVELS do not — do not read them as spot levels

## NAS100 — MAP_ONLY
- price: **27149.206** (SINGLE) as-of 2026-11-18T14:59:52Z
- session: O 27177.4102 H 27223.0508 L 26874.5117 · gap +175.6309
- prior: H 27258.8398 L 26580.8594 C 27001.7793
- basis: bars (`yahoo:^NDX:1d`) run -11.3193 (-4.2 bps) vs anchor
- ATR14: 651.0228 pts (2.399%) · RSI14: 37.86
- EMA: bearish stack (9<20<50)
- MACD: bearish (hist -59.8436)
- VWAP (session): 27035.0541 — price above
- OR15: 26927.3066–27213.4336

## BTCUSD — MAP_ONLY
- price: **63561.16** (SINGLE) as-of 2026-11-18T14:59:53Z

## Data gaps

- `XAUUSD` **quote** — mt5:XAUUSDm:tick is 158042 min old — excluded from anchor
- `XAUUSD` **quote[2]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **daily bars[0]** — twelvedata: TWELVEDATA_API_KEY not set
- `XAUUSD` **proxy check** — https://api.binance.com/api/v3/ticker/price?symbol=XAUTUSDT -> HTTP 451
- `XAUUSD` **opening_range_15m** — no session open to anchor to (utc_day)
- `NAS100` **quote** — mt5:USTECm:tick is 158045 min old — excluded from anchor
- `BTCUSD` **quote[0]** — https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT -> HTTP 451
- `BTCUSD` **quote** — mt5:BTCUSDm:tick is 155934 min old — excluded from anchor
- `BTCUSD` **daily bars[0]** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=1d&limit=200 -> HTTP 451
- `BTCUSD` **intraday bars** — https://api.binance.com/api/v3/klines?symbol=BTCUSDT&interval=5m&limit=288 -> HTTP 451
- `BTCUSD` **session** — no daily bars — levels and indicators unavailable
- `BTCUSD` **vwap** — no intraday source — VWAP and OR unavailable

## Warnings

- XAUUSD: primary bar source failed, using fallback yahoo:GC=F:1d
