# NAS100 Scan — 2026-07-31, Pass 1 (Map), 15:43 BKK

**Live anchor:** sell 28,462.1 / buy 28,464.9 (mid 28,463.5), user's own OANDA chart, 15:43 BKK
(~08:43 UTC) — live, ~0 min old. Freshness gate (§2a): **≤30 min → sizeable trade allowed.**

**Basis check flagged, not resolved as a mismatch:** several web futures/ETF quotes disagreed with
the anchor by more than the usual drift — MNQ (28,471) corroborated closely, but QQQ (~$688.33,
implying ~28,254 at the 41.06 ratio) sat ~209 pts below the anchor, and a separate NQ print
(28,367.75) was internally inconsistent with its own stated range. Treated as stale/unreliable web
data (§2e-adjacent judgement call), not as evidence the live anchor is wrong — the anchor stands.

**Macro Core and Structure Core reused, not re-derived.** Price 28,463.5 sits above this morning's
cached max-pain (~28,330) and gamma flip (~28,115), still below the call wall (~28,610) — no level
break, options-agent not respawned.

## Fusion

- **Market** (live): strong uptrend day, two rally legs off today's session low (28,125.0) to a
  swing high of 28,530-28,540, now pulling back to 28,463.5 on a higher-low structure — an
  orderly pullback inside a trend day, not a reversal signature yet. Support: 28,448.8
  (intraday) / 28,294.6 (prior consolidation) / 28,125.0 (session base, trend invalidation).
  Resistance: 28,497.6, then the 28,530-28,540 swing high. Bias: LONG, conviction 3/5.
- **Indicator** (live chart — Stochastic(9,3,3) + MACD(12,26,9) only; no VWAP/RSI/EMA stack
  plotted, correctly left unresolved rather than web-guessed): Stochastic 82.79/80.42, overbought
  and rolling over from the highs. MACD just crossed bearish (35.8 vs 38.9 signal, histogram
  -3.1, widening negative) — momentum decelerating. Flagged genuine ambiguity between Trend
  Pullback and Mean Reversion/overbought-fade, explicitly deferring to options-agent's gamma sign
  to resolve it (per §3). Daily EMA200/720 web pull rejected (§2e — internally inconsistent with
  the live anchor by >1,000 pts). ATR ~611-622 pts / ~2.1-2.2% (daily, web-corroborated).
- **Options** (cached Structure Core): index gamma POSITIVE but only marginally so, call wall
  ~28,610 (the mechanical resistance the whole complex is capped under, per this morning's
  mega-cap gamma snapshot — NVDA needs to clear 200, MSFT needs to clear 450 for this to extend).
  Max-pain ~28,330, gamma flip ~28,115. This resolves the Indicator's ambiguity toward **Mean
  Reversion** — a positive-gamma tape with a nearby call wall favors fading the extreme over
  chasing the trend, per §5d structural primacy.
- **Social** (unverified chatter, HIGH intensity): retail split — euphoric MSFT call-buying
  ("safest earnings play," 943k contracts, +16% above average volume) vs. bearish rejection of
  META. **Explicit counter-narrative flagged**: MSFT itself is in NEGATIVE gamma (per this
  morning's Structure Core mega-cap snapshot) with heavy retail call-buying — a real squeeze-risk
  scenario where dealer hedging could drag the index straight through the 28,610 call wall rather
  than respecting it as resistance. This is a genuine conflict with the options-structure primacy
  call, not a manufactured one — carried into two separate plans below rather than picked for the
  user.
- **Macro** (cached): today's remaining calendar — US Employment Cost Index 19:30 BKK (tier-1 by
  classification), Chicago PMI 20:45, Michigan Sentiment final 21:00 (all tier-2 otherwise). US
  cash equity open is 20:30 BKK — expect a volume/volatility step-up as RTH equities open and
  reconcile with the CFD/futures complex trading now.

**Judgement calls:**
- Setup ambiguity (Trend Pullback vs. Mean Reversion) resolved toward Mean Reversion using
  options' structural primacy (§5d) — nearby call wall + marginally-positive gamma.
- **Smart-money review flagged that the initial stop (28,545) sat inside, not beyond, the obvious
  liquidity-hunt zone** (the 28,530-28,610 corridor between today's swing high and the call wall)
  — widened Plan A's stop to 28,608 (just under the call wall itself) to survive a wick through
  that corridor before either the fade or the squeeze resolves. This lowers Plan A's R:R to ~2.05
  on T1, right at the playbook's 2.0 minimum — a real trade-off, not a free improvement.
- Two web sources (QQQ-implied NAS100 ~28,254, a self-inconsistent NQ print) were discarded as
  unreliable rather than averaged into the anchor.

**Data gaps:** no volume feed for the index CFD. VWAP, RSI, and a 9/20/50 EMA stack are not
plotted on the user's chart — correctly left unsourced. Daily EMA200/720 rejected as internally
inconsistent (§2e). No max-pain/gamma data was re-derived fresh this pass (cached, prev-close OI,
±30-40 pt slop per §5d).

## Plan A — Mean Reversion fade (primary, structure-led)

```
NAS100 · Mean Reversion (fade) · bias: LONG-side fade, i.e. SHORT the bounce (conviction 3/5)
entry:  bounce/retest into 28,505-28,530 (today's earlier swing-high zone, just under the 28,610
        call wall), needs MACD to stay bearish AND Stochastic to fail reclaiming 80 AND a
        rejection/lower-high candle to form in the zone — arrival alone is not a signal.
        A push that stalls and reverses back under 28,530 on fading momentum is the real fade
        signal; a push that closes through 28,545-28,610 on rising momentum is the squeeze
        scenario (Plan B territory), not something to fade into.
        If price doesn't bounce back into this zone and instead breaks down through 28,448
        directly, there is no trade from this zone — that is a correct outcome.
stop:   28,608 (structural — just under the call wall itself, widened per smart-money review to
        clear the 28,530-28,610 liquidity corridor rather than sitting inside it) ≈ 91 pts risk
target: T1 28,330 (options max-pain, ~2.05R) · T2 28,294.6 (chart support, ~2.44R, borderline
        against today's remaining ATR budget) · T3 28,125 (session/trend base, MULTI-DAY — ~392
        pts exceeds the ~210 pt ATR budget remaining today)
size:   ~2.75 lots (Model B — structural stop; conviction 1.0x [3/5], gamma 1.0x [index still
        marginally positive]) · 1R ≈ $250 (NAS100 confirmed $1/pt/lot)
levels: call wall ~28,610 · max-pain ~28,330 · gamma flip ~28,115 · structural put wall ~27,100
        (all cached Structure Core, prev-close OI, ±30-40 pt slop per §5d)
catalyst: US Employment Cost Index 19:30 BKK — tier-1 by classification. ⚠️ US cash open 20:30
        BKK — expect a volume/volatility step-up as RTH equities open into this level.

risk factors & invalidation conditions:
  - event: ⚠️ ECI 19:30 BKK (tier-1) — first move on a held position isn't necessarily the real one
  - level break: a confirmed close above 28,610 kills this thesis outright — that's Plan B's own
    trigger, not just noise to fade through
  - macro shift: MSFT's earnings-driven strength reversing (guidance walked back, sympathy fading)
    removes the single-name engine currently driving the whole index
```

## Plan B — Breakout continuation (fallback if you're too late / the squeeze plays out)

```
NAS100 · Breakout Retest · bias: LONG (conviction 2/5 — the lower-evidence counter-thesis)
entry:  a confirmed close above 28,610 (the call wall), THEN a retest of 28,610 (now support)
        holds with a reclaim/bounce candle — not just a touch.
        If price closes above 28,610 and never comes back to retest it, don't chase it live —
        that is not this plan, wait for the next scan.
stop:   28,590 (~20 pts below the broken wall — smart-money review flagged mild risk of a deeper
        retest wick clipping this, but did not find a specific level to justify moving it further)
target: T1 28,700 (round number, ~4.25R) · T2 open/trail — no mapped OI structure exists above
        28,610, this is beyond the cached Structure Core's range
size:   ~6.25 lots (conviction 0.5x [2/5, deliberately sized down as the lower-evidence side],
        gamma 1.0x) · 1R ≈ $250

risk factors & invalidation conditions:
  - event: same ⚠️ ECI 19:30 BKK tier-1 warning applies if held into it
  - level break: a close back below 28,610 after the retest fails negates this plan — don't hold
    through that hoping for a second chance
  - macro shift: same MSFT-strength dependency as Plan A, opposite direction — this plan needs the
    squeeze narrative (retail call-buying → dealer hedging) to actually be the dominant force
```

**Which plan applies:** if you check the chart and price is at or below ~28,530 (hasn't reclaimed
today's swing-high zone), Plan A is live — wait for its bounce-and-reject trigger. If price has
already closed above 28,610, Plan A is dead and Plan B is what to watch for (the retest-and-hold).
If price is sitting between 28,530 and 28,610 with no resolution yet, neither has triggered —
wait, don't force an entry in the middle.

One-line read: the whole index is riding MSFT's single-name gamma, and the desk itself is split on
whether that ends in a fade back to max-pain or a squeeze through the call wall — both plans are
built off the same structural map, sized so the higher-evidence side (the fade) carries the larger
position.

**Contrarian note (smart-money-agent):** Plan A's original stop (28,545) sat inside the obvious
28,530-28,610 liquidity corridor rather than beyond it — widened to 28,608 in the plan above,
which is why R:R on T1 is tight (2.05R, right at the playbook minimum) rather than generous. Plan
B's entry is already sweep-aware (requires a close-and-retest, not just a level touch); its 28,590
stop carries only a minor, uncited residual risk of being clipped by retest depth. The core
tension — "everyone expects 28,610 to hold" vs. the MSFT negative-gamma squeeze risk — is real and
cited (social-agent), not manufactured; that tension is exactly why this scan produced two plans
instead of one.

## Sources

- [Nasdaq 100 E-Mini Prices - Barchart.com](https://www.barchart.com/futures/quotes/NQ*0/futures-prices)
- [Nasdaq 100 Futures - Investing.com](https://www.investing.com/indices/nq-100-futures)
- [Micro E-mini Nasdaq-100 Index Futures - TradingView](https://www.tradingview.com/symbols/CME_MINI-MNQ1!/)
- [Invesco QQQ Trust ETF - Investing.com](https://www.investing.com/etfs/powershares-qqqq)
- [QQQ Historical Stock Price Data - stockanalysis.com](https://stockanalysis.com/etf/qqq/history/)
- [Benzinga - MSFT Whale Activity & Call Options](https://www.benzinga.com/markets/options/26/07/60813346/10-information-technology-stocks-whale-activity-today-s-session)
- [Yahoo Finance - Nasdaq Earnings & Sentiment](https://finance.yahoo.com/markets/stocks/articles/nasdaq-p-500-futures-rise-085915709.html)
- [StockTwits - Nasdaq/Tech News & Sentiment](https://stocktwits.com/news-articles/markets/equity/nasdaq-p-500-futures-microsoft-meta-apple-amazon-pce-why-mu-ibrx-capr-sbux-are-in-focus/cZNPvxgRJc7)
- [FXLeaders - MSFT +15%, META -8.5% Earnings](https://www.fxleaders.com/news/2026/07/30/meta-shares-tumble-to-540-range-as-earnings-miss-sparks-selloff/)
- [TradeKey - Market Movers MSFT +16%](https://www.tradingkey.com/news/market-movers/262064852-market-movers-tsla-20260730)
- [CNBC - Profit-taking at Historic Pace](https://www.cnbc.com/2026/07/29/stock-market-today-live-updates.html)
- [Schaeffer's - Microsoft & Meta Bookend the Nasdaq](https://www.schaeffersresearch.com/content/news/2026/07/30/microsoft-meta-stocks-bookend-the-nasdaq-after-earnings)
- [SpotGamma - Big Tech Earnings & Gamma Risk July 2026](https://spotgamma.com/dispersion-unwind-mag-7-earnings-fomc-july-2026/)
- [Barchart.com - Nasdaq 100 Technical Analysis (ATR)](https://www.barchart.com/stocks/quotes/$IUXX/technical-analysis)
- Structure Core (cached) original sources — see `scans/structure_20260731.md` NAS100 and mega-cap sections.
