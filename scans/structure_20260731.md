# Structure Core — 2026-07-31
Seeded at 19:00 BKK by /premarket. Each section refreshes independently when stale — either a
new day, or price closing through one of that instrument's break-check levels. All levels are
prev-close OI (2026-07-30 OCC settlement) run through a derived proxy conversion — this is normal
OI cadence, not staleness, but every level carries the honest slop caveat noted in each section.

**Desk-wide context:** Thursday's MSFT-driven melt-up (biggest single-day gain since 2008, SPX to
a record close) left the entire index complex sitting almost exactly on its zero-gamma flip
level, and six of eight mega-caps closed pinned to a round-number call wall. This is a
regime-boundary open, not a trending one — read every "positive gamma" call below as marginal
and conditional on holding above the stated flip, not as settled fact. Today is a Friday weekly
options expiry plus month-end, not the monthly OpEx (that was July 17).

## NAS100 / NDX (QQQ proxy)

As of 19:00 BKK, based on options open interest as of the 2026-07-30 settlement (OI updates once
daily via OCC).

### Gamma regime
POSITIVE, but only marginally — treat this as "regime undecided" rather than a confident call.
InsiderFinance reports NDX net GEX of +$336.8M with a zero-gamma flip at 28,056.70 against a
quoted spot of 28,100.72. The complication: QQQ's actual Thursday close was $683.60, which
converts to roughly NDX 28,008 — below the flip the vendor itself quotes. The vendor's own spot
print (685.85) sits about 0.3% above where the cash index actually settled, so the "positive"
call is being asserted from a spot that's already inside this desk's usual ±slop band on
proxy-derived levels. Practically: fade extremes only while NDX holds above roughly 28,060, and
switch to breakout/momentum expectations the moment it closes under 28,000.

### The key levels

| Level | QQQ | NDX cash | NAS100 CFD (est.) | OI behind it |
|---|---|---|---|---|
| Call wall (aggregate) | 730 | 28,550 | ~28,610 | 218.7K contracts |
| Weekly call OI (Jul-31 expiry) | 730 / 740 | — | — | 45,907 / 32,745 contracts |
| Max pain (Jul-31 expiry) | 690 | ~28,270 | ~28,330 | — |
| Zero-gamma flip | 687.24 | 28,056.70 | ~28,115 | — |
| Spot (Thu close) | 683.60 | ~28,008 | ~28,069 | — |
| Put wall (near, weekly) | 680 | ~27,860 | ~27,920 | 38,617 contracts |
| Put wall (structural) | 660 | 27,045 | ~27,100 | 487.5K contracts |

### The call
Max pain sits above spot (690 vs 683.60), which points to a mild upward pin pull of roughly 0.9%
into today's close — an unusual configuration worth noting. Whether that materializes depends on
holding the flip; today's actual price action (per market-agent's QQQ read of $683.55 close then
$689.92 overnight) is already leaning into that pull.

### Break-check levels
Upside: a close above NDX 28,270 / NAS100 ~28,330 confirms the max-pain magnet and opens the run
to the 28,550 call wall (NAS100 ~28,610) — very little OI sits above the wall until QQQ 740.
Downside: a close below NDX 28,000 / NAS100 ~28,060 breaks both the put wall and the flip in one
move; below it the next real OI shelf is QQQ 680 (NDX ~27,860), and nothing meaningful sits below
that until the QQQ 660 / NDX 27,045 structural put wall that held on 2026-07-30.

### Conversion & limits
QQQ→NDX ratio is 40.97 (derived from the vendor's own spot/flip pair and cross-checked against
Thursday's actual close). QQQ→NAS100 CFD ratio is 41.06 per the playbook's basis table, implying
the broker trades roughly 60 points above NDX cash. Standing error on any converted level here is
±30–40 NAS100 points before adding the roughly 0.3% vendor spot disagreement already described
above — use these levels to know which side of a line price is on, not to place a tick-precise
stop.

### What's missing
No max-pain figure from a source this desk would stand behind for NDX at today's expiry — the
690/28,270 figure above is QQQ's per-expiry number from ChartExchange; a separate whole-chain
figure from WhaleQuant (653) disagrees badly enough that it was discarded rather than averaged
in. No intraday GEX is available — everything here is Thursday's prev-close OI run through a
model, and given how close the whole complex sits to its flip, intraday repositioning matters
more than usual today but isn't visible in this data. No notable block/sweep flow was sourceable.

## Mega-cap gamma snapshot (NVDA / MSFT / AAPL / AMZN / GOOGL / AMD / TSLA / META)

As of 19:00 BKK, all figures from InsiderFinance GEX pages, prev-close 2026-07-30 settlement.
Six of eight names closed within about 2% of a round-number call wall — the mechanical read is
that dealers short those calls are selling into every push toward the strike, which is why the
group looks capped even after Thursday's rally. The index cannot extend meaningfully without
NVDA clearing 200 and MSFT clearing 450; those two are the gate. AAPL (flip at 313.07, put wall
at 312.50 — literally straddling both) and TSLA (flip at 307.45, the thinnest GEX on the board)
are the two most fragile names — they're the ones most likely to turn a dip into an acceleration
rather than dampen it.

| Name | Spot | Net GEX | Zero-gamma flip | Call wall | Put wall | Read |
|---|---|---|---|---|---|---|
| NVDA | 196.50 | +$717.3M | 191.09 (-2.75%) | 200 (804.1K OI) | 190 (390.8K) | Tight positive box, 200 is a large wall |
| MSFT | 447.50 | +$1.90B | not published | 450 (179.9K) | 350 (122.4K) | Largest GEX on the board, pinned to 450 after +15% |
| AAPL | 313.00 | +$377.8M | 313.07 (+0.02%) | 350 | 312.50 | Sitting on the flip, put wall 0.16% away |
| AMZN | 257.13 | +$882.9M | 229.29 (-10.8%) | 260 | 220 | Deepest positive gamma, magnet toward 260 |
| GOOGL | 334.44 | +$447.4M | 322.23 (-3.65%) | 335 (+0.17%) | 320 | Pinned at 335 |
| AMD | 499.40 | +$263.7M | 474.66 (-4.95%) | 500 (+0.12%) | 400 | Pinned at 500 |
| TSLA | 309.00 | +$48.4M | 307.45 (-0.50%) | 315 | 300 (197.7K) | Thinnest GEX, nearest flip — likeliest to flip negative |
| META | 543.00 | -$12.8M | 549.58 (+1.21%) | 750 | 500 | The one name already in NEGATIVE gamma — momentum, not fade; carries the 0.75× haircut on its own |

AAPL's put/call ratio is 0.79 on 4.7M total OI, the only chain-level P/C figure sourced this pass.

## Gold (XAUUSD, via GLD proxy)

As of 19:00 BKK, based on options open interest as of the 2026-07-30 settlement.

### Gamma regime
POSITIVE (an upgrade from an earlier UNKNOWN read). InsiderFinance sources GLD net GEX at
+$285.3M with a zero-gamma flip at $371.31, about 0.52% below the vendor's own quoted spot of
$373.24. Spot gold itself is trading around $4,076–4,086, down roughly 0.4–0.5% on the day after
the BoJ held rates at 1% on an 8-1 vote. Because gold is trading above its gamma flip, dealers
should be dampening moves here — this favors Mean Reversion and VWAP Bounce over breakout setups,
and no gamma haircut applies while that holds.

### The key levels

| Level | GLD | Gold equivalent | Evidence |
|---|---|---|---|
| Call wall (aggregate) | 400 | ~4,349 | +7.17% from spot |
| Prior weekly call wall | 380-381 | ~4,130-4,140 | 4,862 / 5,837 contracts |
| Spot (Thu close) | 377.17 | 4,076.53 (Fri read) | — |
| Zero-gamma flip | 371.31 | ~4,035-4,060 | -0.52% from vendor spot |
| Max pain / pin strike (Jul-31 expiry) | 370 | ~4,020 | 72,826 puts vs 22,464 calls at the same strike |
| Put wall (aggregate) | 350 | ~3,805 | -6.23% from spot |

### The call
The single most notable fact in this section: GLD 370 is simultaneously the highest call-OI and
the highest put-OI strike for today's expiry, with puts outweighing calls nearly 3-to-1. That
makes it a genuine pin magnet sitting roughly 55 gold points below spot. The put/call ratio on
the Jul-31 chain is 0.74, mildly call-leaning, consistent with a prior 0.48 weekly / 0.13
August-monthly call skew — corroborating rather than contradicting the positive-gamma read.

### Break-check levels
Upside: a close above roughly 4,140 (the GLD 380-381 near-dated call wall) reopens the path
toward 4,200 and beyond, with nothing heavy overhead until the GLD 400 / ~4,349 call wall.
Downside: a close below roughly 4,035-4,060 loses the flip and flips the whole gold book
negative-gamma; the 4,020 pin catches first, but beneath that there is genuinely no put support
until the GLD 350 / ~3,805 shelf — a break of 4,020 should be expected to move fast, not grind.

### Conversion & limits
The slop here is larger than usual: two vendors disagree on GLD's own price by $3.93
(InsiderFinance spot $373.24 vs ChartExchange's Thursday close of $377.17), which is roughly 43
gold points — the reason the flip above is quoted as a zone (4,035-4,060) rather than a single
number. The working ratio is approximately 10.87-10.92 gold points per GLD point, derived by
percentage offset from spot rather than absolute strike, which is the more robust method given
the vendor disagreement. Standing error is at least ±15-20 gold points, wider near the flip
itself.

### What's missing
No COMEX/GC strike-level open interest was sourced — GLD remains the sole gold proxy this pass,
uncross-checked against futures positioning. Gold miners (GDX) were not pulled. Nothing here is
tick-precise; every level is Thursday's OI run through a proxy conversion carrying the slop
described above.

## SPX500

As of 19:00 BKK, based on options open interest as of the 2026-07-30 settlement.

### Gamma regime
POSITIVE, just barely — the most knife-edge print in this sweep. SPX closed Thursday at 7,437.63,
just 2.6 points above InsiderFinance's quoted flip of 7,435.03 and 2.4 points under the 7,440
call wall. Net GEX from that source reads +$6.62B.

Three vendors returned three different GEX signs this pass, which at first looked like a repeat
of an earlier vendor conflict, but the timestamps resolve it cleanly rather than requiring a
rejection: FlashAlpha (Thursday, 13:31 ET, spot 7,386.67) read net GEX at -$32.6B; ZeroGEX (dated
Wednesday, spot 7,429) read -$13.24B; InsiderFinance (spot matching the confirmed 7,437.63 close)
read +$6.62B. All three put the flip in the same 7,435-7,481 band — the negative readings were
simply taken while SPX was below that band, and the positive reading was taken after the late
Thursday-session rally carried price through it. This is one coherent story, not a fabrication:
SPX crossed into positive gamma in the final two hours of Thursday's session, by about 2.6 points.

### The key levels

| Level | SPX | Evidence |
|---|---|---|
| Call wall (near) | 7,440 | InsiderFinance |
| Call wall (wider) | 7,500 | FlashAlpha |
| Zero-gamma flip | 7,435.03 | InsiderFinance; corroborated by the 7,435-7,481 band across all three vendors |
| Spot (Thu close) | 7,437.63 | confirmed close |
| Put wall | 7,300 | agreed by two of three vendors |
| Max pain | 7,175 | FlashAlpha, Thursday midday — far enough below spot that its pin pull reads weak |

### The call
Given the 2.6-point margin above the flip, this reads as freshly, marginally positive rather than
settled — a small pullback below 7,435 puts the whole index straight back into negative gamma.

### Break-check levels
Upside: 7,440 is both the call wall and only 2.4 points away — clearing and holding it is the
first real signal, with 7,500 the next cap. Downside: losing 7,435 re-enters negative gamma
immediately, and there is no options-structure support until the 7,300 put wall — a 1.8% gap of
unsupported air between the flip and that shelf.

### Conversion & limits
SPX levels here are direct (no proxy conversion needed), but they still carry the "prev-close OI,
not intraday" limitation common to this whole file.

### What's missing
No fresh max-pain figure for today's expiry from a source this desk would stand behind — the
7,175 figure is Thursday midday data, not aligned to today's session. No intraday GEX or
notable-flow data was sourceable.

## US30 (via DIA proxy)

As of 19:00 BKK, based on options open interest as of the 2026-07-30 settlement. This is the
softest read in the file — flagged accordingly.

### Gamma regime
POSITIVE. DIA spot 522.69, net GEX +$203.6M, zero-gamma flip at 520.17 (-0.48% from spot), call
wall 535 (+2.35%), put wall 518 (-0.90%). Converting at the conventional DIA-to-DJIA ratio of
roughly 100x gives an implied DJIA flip near 52,020, call wall near 53,500, and put wall near
51,800.

### The key levels

| Level | DIA | US30 (est.) |
|---|---|---|
| Call wall | 535 | ~53,500 |
| Zero-gamma flip | 520.17 | ~52,020 |
| Spot | 522.69 | ~52,270 (est.) |
| Put wall | 518 | ~51,800 |

Max pain: data unavailable this pass.

### The call
The flip and put wall are stacked within about 0.9% below spot, so a loss of roughly 52,000
breaks both at once — a single downside trigger rather than two separate levels.

### Break-check levels
Upside: a close above ~53,500 (the call wall) is the confirmation level. Downside: a close below
~52,000 breaks the flip and put wall together — no clean intermediate level exists between them.

### Conversion & limits
This conversion is unverified this pass — the DIA-to-index ratio drifts with dividend accrual,
and the Thursday DJIA close could not be independently confirmed (the only sourced figure,
51,594.14 / -1,153.18 / -2.2%, is dated Tuesday 7/28, the worst-day-since-April-2025 print, not
Thursday). Treat every US30 level here as accurate to roughly ±50-100 index points.

### What's missing
Max pain, an independently confirmed Thursday close, and any verification of the DIA-to-DJIA
ratio itself. This section should be the first re-checked once a cleaner source is available.

## BTC

Skipped per playbook §1 weekday default — not seeded this pass. Pull with `/scan BTC` or
`/gamma BTC` if wanted; that call will spawn options-agent fresh since no cache exists here.

## Sources

- [ChartExchange — QQQ option chain, 2026-07-31](https://chartexchange.com/symbol/nasdaq-qqq/optionchain/?date=20260731)
- [ChartExchange — QQQ max pain summary](https://chartexchange.com/symbol/nasdaq-qqq/optionchain/summary/)
- [ChartExchange — GLD max pain summary](https://chartexchange.com/symbol/nyse-gld/optionchain/summary/)
- [InsiderFinance — QQQ GEX](https://www.insiderfinance.io/gamma-exposure/QQQ)
- [InsiderFinance — NDX GEX](https://www.insiderfinance.io/gamma-exposure/NDX)
- [InsiderFinance — SPX GEX](https://www.insiderfinance.io/gamma-exposure/SPX)
- [InsiderFinance — GLD GEX](https://www.insiderfinance.io/gamma-exposure/GLD)
- [InsiderFinance — DIA GEX](https://www.insiderfinance.io/gamma-exposure/DIA)
- [InsiderFinance — NVDA GEX](https://www.insiderfinance.io/gamma-exposure/NVDA)
- [InsiderFinance — MSFT GEX](https://www.insiderfinance.io/gamma-exposure/MSFT)
- [InsiderFinance — AAPL GEX](https://www.insiderfinance.io/gamma-exposure/AAPL)
- [InsiderFinance — TSLA GEX](https://www.insiderfinance.io/gamma-exposure/TSLA)
- [InsiderFinance — AMD GEX](https://www.insiderfinance.io/gamma-exposure/AMD)
- [InsiderFinance — AMZN GEX](https://www.insiderfinance.io/gamma-exposure/AMZN)
- [InsiderFinance — META GEX](https://www.insiderfinance.io/gamma-exposure/META)
- [InsiderFinance — GOOGL GEX](https://www.insiderfinance.io/gamma-exposure/GOOGL)
- [FlashAlpha — SPX](https://flashalpha.com/stock/spx)
- [WhaleQuant — QQQ options analytics](https://whalequant.io/en/stocks/QQQ/options-analytics)
- [Barchart — QQQ max pain / IV](https://www.barchart.com/etfs-funds/quotes/QQQ/max-pain-chart)
- [FXLeaders — gold slips to $4,077 as BoJ holds, 2026-07-31](https://www.fxleaders.com/news/2026/07/31/why-gold-price-down-today-xauusd-slips-boj-holds-rates/)
- [Yahoo Finance — market close 2026-07-30 (MSFT +15%)](https://finance.yahoo.com/markets/live/stock-market-today-thursday-july-30-dow-sp-500-nasdaq-treasury-yields-microsoft-082255995.html)
