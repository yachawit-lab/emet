# Trading Desk — Playbook (single source of truth)

This file defines the universe, priority, setups, risk, sizing, and the output
contract for the multi-agent desk. Every specialist and command reads from here.
Lines marked **EDIT ME** are yours to tune.

---

## 1. Universe & priority

Attention/budget flows top-down. Nasdaq gets the deepest read; crypto and index are lightest.

1. **Nasdaq & tech** — NAS100 / QQQ / NDX, plus the stock watchlist below
2. **Gold** — XAUUSD (proxies: GLD, GC, gold miners)
3. **Crypto** — BTC (Deribit + CME options); ETH secondary
4. **Index** — SPX500, US30, and NAS100 as an index read

### Stock watchlist (Nasdaq/tech) — big, liquid, day-tradeable

- **Core mega-cap (always scanned):** NVDA, TSLA, AAPL, AMZN, META, MSFT, GOOGL, AMD
- **Momentum / high-beta pool (scan when active):** AVGO, NFLX, PLTR, COIN, SMCI, MU, MSTR
- **Dynamic — "stocks of the day" (up to 3):** whatever the News + Social specialists
  surface as the session's real movers — gappers, earnings reactions, unusual volume,
  heavy social buzz. **Must clear a liquidity bar** (large-cap or very high volume) to
  be added — no illiquid lottery tickets. These get scanned *in addition to* the core list.

So a full sweep covers ~15 names + up to 3 movers of the day. **EDIT ME** to taste.

### Sweep budget vs scan budget — they are different

- **`/premarket` sweeps WIDE.** The whole universe above. Its job is a *map*: which names are
  in play today. Cheap per name, shallow.
- **`/scan` goes DEEP, and is capped at 3 instruments per session:**
  **Nasdaq · Gold · one "stock of the day."** Deep and expensive per name.

Scanning more than three is a symptom, not a strategy — it means the focus list was never
narrowed. If a fourth name looks compelling, it replaces one of the three rather than adding
to them.

`/scan <INSTRUMENT>` overrides priority for whatever you name.

Broker context: **CFDs** (lots + leverage). Sizing is in **lots**, not shares.
Reference asset for volatility-equivalent sizing is **gold (XAUUSD)**.

### BTC — weekend-default, weekday opt-in

**Weekdays (Mon-Fri):** BTC is dropped from automatic/default sweeps — `/premarket`'s "whole
universe" pass does **not** touch it, and `/ask` never routes to it unless the question names
BTC/crypto. An explicit request still works any day (`/scan BTC`, or a BTC-specific `/ask`) —
this only changes what happens *automatically*, it never blocks a direct request.

**Weekends (Sat/Sun):** BTC returns to the default sweep automatically, same as every other
instrument in §1 — this is when equities/gold desks are closed and crypto is naturally the
active market.

*Why: BTC trades 24/7 but the desk's other instruments don't — spending sweep budget on it
during the trading week when Nasdaq/Gold dominate attention was diluting the deeper reads those
get. Weekends flip the priority because there's nothing else open to compete for attention.*

---

## 2. The output contract (every specialist uses this)

Keep it compact and scannable. Never invent data.

```
[TAG] <INSTRUMENT>  bias: LONG|SHORT|NEUTRAL (conviction N/5)
  levels: support X / resistance Y | ATR ~Z%
  note: <one line, the "why">
  as-of: <time UTC or "prev close"> · source: <cite> · CONFIDENCE: live|delayed ~15m|stale
```

Data discipline (all agents):
- **Cite** every number with a source and a timestamp.
- **Never fabricate** a price, OI value, or headline. If unavailable, say so.
- Flag freshness: `live` / `delayed ~15m` / `prev close` / `stale`.
- Web quotes are delayed ~15 min — good for bias/levels/catalysts, **not** tick entries.

### 2c. Timezone — UTC internally, Bangkok (UTC+7) everywhere the user reads it

Specialists reason and cite in **UTC** internally — that's what news sources, economic
calendars, and freshness checks are published in, and it's what keeps cross-agent times
comparable while an agent is doing its own sourcing/reconciliation work.

**Everything the user actually reads converts to Bangkok time (UTC+7), shown as BKK only** —
this includes the Analyst's final chat output for `/ask`, `/scan`, and `/premarket`, **and every
saved file** (`scans/macro_YYYYMMDD.md`, `scans/<instrument>_scan_YYYYMMDD.md`). Event calendars,
catalyst times, flat-by / event-risk windows, `as-of` stamps — all of it, e.g. `18:00 UTC` FOMC
→ written as `01:00 BKK`. Do the conversion as the last step, after fusion/sourcing, so the
underlying UTC-based freshness gate (§2a) and any cross-checking against UTC-timestamped sources
happen before the display conversion, not after.

*Why the file scope changed: this was originally UTC-only in saved files, to stay directly
comparable against UTC-based sources. In practice the files get read directly (in an IDE, or
pasted back into a later session) far more often than that comparison actually matters — so BKK
now applies everywhere the user looks, not just the chat response.*

### 2a. The freshness gate (hard rule)

Every decision block carries an **anchor age** = now − the timestamp of the price it was
built on. The anchor determines what the output is allowed to be:

| Anchor age | What the scan may produce |
|---|---|
| **≤ 30 min** | A **sizeable trade** — decision block with entry/stop/size |
| **30 min – 2 h** | A **map only** — levels and bias, no size. Re-anchor before acting. |
| **> 2 h** | **Nothing actionable.** Must re-anchor, then re-run the filter. |

*Why: on 2026-07-28 a gold scan anchored at 02:17 UTC was used hours later. Price had moved
4,046 → 4,017 and broken the session low the whole plan was built on. T1 was already gone
before the plan was read.*

**Re-check at delivery, not just at spawn.** The anchor age above is measured from spawn time,
but a full scan can take 5-11 minutes of wall-clock time to fuse (options-agent in particular
runs long fighting vendor conflicts on OI data). A scan that was `≤30min` fresh at spawn can
still be built on a stale reference point by the time the decision block is written — the gate's
coarse bands don't catch this, because the elapsed time during fusion is usually well under
30 minutes even when it's enough to move price meaningfully relative to a tight entry zone.

**Before finalizing entry/stop/size — not before spawning, before *emitting* the block —**
check how much wall-clock time the scan itself took. If it's more than a couple of minutes,
say so explicitly and ask the user to confirm current price before treating the spawn-time
anchor as still valid for judging "has the zone been reached," "how far is stop from here."
Use the fresh check-in price for that judgment; the spawn anchor is what the specialists
reasoned against, not necessarily what's true when the plan reaches the user.

*Why: the 2026-07-30 gold scan spawned at 4,071.5, took several minutes to fuse across four
specialists, and by the time the decision block's entry zone was checked against live price,
price had already moved into it and printed a rejection — at a level and R:R the plan hadn't
accounted for. The scan was well inside the `≤30min` band throughout; the gate never fired,
because the gate wasn't built to catch fusion-latency drift, only long-gap staleness.*

### 2b. The live anchor (mandatory)

Every `/scan` starts from the user's **live broker price**, and that number is passed to every
specialist as **primary truth**. Web feeds are corroboration, never the anchor.

*Why: the NAS100 scan the same day was anchored to a live OANDA print, and the market-agent
caught that web futures feeds were stale to the downside — showing 27,840–27,940 while the
real price was 27,770. The unanchored gold scan drifted; the anchored one did not.*

**Basis check — run once per instrument, then record it here:**

| Instrument | Broker feed | vs reference | Basis |
|---|---|---|---|
| XAUUSD | OANDA / Exness | spot gold | ~+8 pts (broker higher) — *verify* |
| NAS100 / USTEC | OANDA / Exness | NDX cash | drifts; ratio to QQQ ≈ **41.06** |
| US stock CFDs | Exness | NASDAQ last | **must have extended hours ON** |

**Contract specs — confirmed from real fills, do not re-assume:**

| Instrument | Units per lot | Confirmed |
|---|---|---|
| NAS100 / USTEC | **$1 / point / lot** | ✅ 2026-07-28 fills (`0.47 × 255.71 pts = $120.18`) |
| XAUUSD | 100 oz / lot | unverified — confirm on next fill |

### 2d. Source citation & recency (mandatory)

- **Internal logging.** For every data point, news story, or economic metric pulled, hold the
  exact source URL, publication timestamp, and exact quote/number — not a paraphrase — so it
  can be checked or challenged later.
- **Output citation.** The final user-facing block cites the primary source for every core
  reason behind a trade recommendation, inline: `[Source: BLS CPI Release, Jul 2026]`,
  `[Source: NVDA 10-Q filing]`. A reason with no source doesn't go in the block.
- **Timestamp check.** Never base a trade signal on news older than **24 hours**, unless it's
  an explicitly multi-quarter macro trend (real yields, Fed path, AI-capex cycle). Before using
  a news-driven reason, state its age and confirm it's still current — don't assume a headline
  from yesterday's search still holds.
- **Actual vs. consensus.** For any earnings or economic print (CPI, NFP, GDP, EPS/revenue,
  etc.), report the **actual figure directly against Wall Street/consensus expectations** —
  `actual X vs. expected Y` — not the actual alone. This is what sets the market reaction, not
  the print in isolation.
- **No guessing on gaps.** If consensus or actual data cannot be sourced, write **"Data
  unavailable"** for that field. Never estimate, infer, or carry forward a stale number to fill
  the gap — a missing number is a data gap (§2 above), not a modeling problem.
- **Trustable sources for factual claims.** Prices, OI/gamma figures, economic prints, and
  earnings numbers must come from a reputable, identifiable source — an exchange, a regulator/
  official release (Fed, BEA, BLS, SEC), a recognized data vendor (Barchart, ChartExchange,
  TradingEconomics, Bloomberg/Reuters/CNBC, etc.), or a broker's own feed. This does **not**
  apply to `social-agent`'s chatter reads — reading unverified X/Reddit/StockTwits sentiment is
  its explicit job, already required to be labeled "unverified chatter" (its own agent spec).
  The line is: a *fact* needs a trustable source, a *chatter/sentiment read* needs to be labeled
  as such — don't hold social-agent's crowd-tone reporting to the same bar as a price or an OI
  number.
- **Sources section, every final output.** The Analyst's final block — chat output and any saved
  file (`scans/macro_YYYYMMDD.md`, `scans/<instrument>_scan_YYYYMMDD.md`) — ends with a
  consolidated **Sources** list of the actual links used, aggregated from every specialist that
  contributed, not just prose mentions like "per fxleaders" scattered through the text. Dedupe
  repeated links across specialists. `/ask`'s fast 2-4 line format can compress this to inline
  links rather than a separate section, but the links themselves are still mandatory, not optional.

### 2e. Fabricated data — detection and rejection (hard rule)

Specialists sometimes invent data. §2d instructs them not to; that instruction does not always
bind. This section is for the **Analyst**: how to catch it and what to do about it.

**Tells — any one of these is enough to distrust the whole read:**

- **Self-contradicting citation.** The cited source's own title or content argues against the
  claim it is offered as proof of.
- **Impossible timing.** A result reported for an event that has not happened yet, or a citation
  dated later than the live anchor.
- **Category error.** A claim structurally wrong regardless of the data — the wrong person in a
  role, an event on a date its own schedule rules out.
- **Independent conflict.** A figure that two or more other specialists, working separately,
  contradict.

**Response:**

1. **Reject the whole pass, not just the bad figure.** An agent that fabricated one number has
   shown its sourcing is unreliable *this run* — do not cherry-pick the parts that look plausible.
2. **Never average a suspect number into a consensus.** Discard it, then triangulate across what
   remains.
3. **Say so in the output.** The rejection belongs in judgement calls or data gaps, with the
   reason. It is a finding about the desk's own reliability, not housekeeping to bury.
4. **Fall back explicitly** — last known-good value with its original timestamp, or "Data
   unavailable" (§2d). A rejected figure is never silently replaced by a guess.

**Escalate to the user when the disputed fact is binary, real-world, and on their screen** — has
the print landed, what does the terminal say. One question settles what no amount of cross-agent
adjudication can.

**Rejection is per-pass, not permanent.** Re-run the agent; do not blacklist it.

**A demonstrated repeat pattern earns a standing, heightened bar — not a permanent ban.**
`news-agent`'s specific failure mode (marking a scheduled/expected figure as "confirmed"/
"actual") has recurred enough to be a known risk, not a one-off. Until that pattern stops
showing up, its **"Actual" print claims** (an economic release, an earnings result) need one of
the following before going into a Macro Core file or a decision block: **(a)** a direct citation
to the primary/official source (Fed, BEA, BLS, company IR — not a calendar-aggregator page), or
**(b)** independent corroboration from another specialist or the user's own screen. Its calendar/
timing work and catalyst framing don't carry this extra bar — only the specific "did this actual
number land" claim does, because that's the specific claim it's gotten wrong twice. Revisit this
bar (loosen it) once a run of clean passes justifies it — this is a proportionate response to a
track record, not a permanent downgrade of the seat.

*Why: news-agent fabricated data twice on 2026-07-29. First it reported 97.4% hold odds while
citing a source titled "hike odds tripled," alongside a quad-witching claim on a date that cannot
be quad-witching. Hours later it reported a completed FOMC outcome — vote split, named dissenters,
earnings reactions — for a decision that had not yet happened; the user settled it in one message.
A third incident on 2026-07-30 reported a GDP figure as "confirmed" from a pre-embargo calendar
page, contradicting its own "pending" labels on every other item in the same release table. Each
incident is the same root confusion — scheduled/expected vs. confirmed/actual — which is why the
fix is a standing corroboration bar on that specific claim type, not a one-time correction.*

---

## 3. The setups (the only trades the filter approves)

Match one of these or **stand aside**. Each lists its trigger, stop, target, and
which specialists must confirm.

| Setup | Trigger | Stop | Target | Confirmed by |
|---|---|---|---|---|
| **VWAP Bounce** | Price reclaims & holds VWAP in a trending tape | Below the reclaim swing / other side of VWAP | Prior day level or next OI wall; ≥2R | Indicator (VWAP), Market (trend) |
| **Opening Range Breakout** | Break of first 5/15-min range **on volume** | Opposite side of the range | Measured move of the range; ≥2R | Indicator (OR, volume), News (catalyst ok) |
| **Trend Pullback** | Pullback to rising/falling EMA or prior structure in an established trend | Below the pullback swing | Trend continuation to next level; ≥2R | Market (trend), Indicator (EMA) |
| **Gap-and-Go** | Gap **with a catalyst**, continuation off the open | Below the opening candle | Next level / measured move; ≥2R | News (catalyst REQUIRED), Market |
| **Mean Reversion** | Fade an extreme into an OI wall / max-pain, **positive-gamma** regime | Beyond the extreme | VWAP / range mid; ≥2R | Options (gamma, wall), Sentiment |
| **Breakout Retest** | Break a level, retest holds | Below the retest low | Next OI wall / level; ≥2R | Market, Options (wall), Indicator |

Options/OI note: high-OI **call walls / put walls / max-pain** are the primary
structural levels. **Positive gamma** = fade extremes (favor Mean Reversion,
VWAP Bounce). **Negative gamma** = moves amplify (favor breakout/trend setups,
size down, respect squeeze risk).

---

## 4. Risk model — "both, depends on setup"

Default is volatility-equivalent; defined-stop setups use %-to-stop. **2R minimum** on every trade.

**Base risk unit = $250** ( ≈ 1% of ~$25k capital ). **EDIT ME.**

**Model selection is decided by the STOP, not by the setup name.** Ask one question:
*where does the stop come from?*

- **Model B — %-risk-to-stop → use whenever the stop is STRUCTURAL** (a swing high/low, a
  broken level, an OI wall, the opposite side of the opening range). Risk the base unit across
  the distance to the stop → units → lots. **This is the common case intraday.**
- **Model A — Volatility-equivalent → use only when the stop is ATR-DERIVED** (no structural
  level to lean on, so the stop is set at some multiple of ATR). Size to the same target daily
  swing with `equivalentLot(targetSwing, { unitsPerLot, price, atrPct })` from
  `lib/position-size.ts`.

*Why this replaced the old per-setup mapping: on 2026-07-28 both the gold and NAS100 scans hit
the same conflict. The old rule sent Trend Pullback → Model A, but Model A sizes to a **full
daily ATR** (gold 93 pts, NAS100 535 pts) while the actual structural stops were 12 and 110 pts.
It under-risked by 4–5× — gold would have risked $48 against a $250 unit. The stop is what you
actually lose, so the stop must set the size.*

**Conviction scaling** (from the Analyst's fused conviction):

| Conviction | Multiplier |
|---|---|
| ≤ 2/5 | 0.5× (or skip) |
| 3/5 | 1.0× (base) |
| 4/5 | 1.25× |
| 5/5 | 1.5× (cap) |

**Gamma haircut** — applied *after* the conviction multiplier:

| Gamma regime | Multiplier | Why |
|---|---|---|
| Positive / unknown | 1.0× | dealers dampen moves |
| **Negative** | **0.75×** | dealers amplify moves — being right and still stopped out is the failure mode |

Compose them: `lots = baseLots × conviction × gamma`. A 4/5 conviction in a negative-gamma
tape is `1.25 × 0.75 ≈ 0.94` → effectively base size. Higher confidence in the **direction**
does not mean higher confidence in the **size**.

*Why: on 2026-07-28 NAS100 fused to 4/5 SHORT in a confirmed negative-gamma tape. §3 said
"size down" without a number. The trade worked (+2.13R) — and then price squeezed 430 points
off the low in ~2.5 h, exactly the amplified counter-move the haircut exists to survive.*

**Minimum R:R = 2.0.** Anything under 2R → **stand aside**, no exceptions.

**Daily guardrails (EDIT ME):**
- Max daily loss: **3R (≈ $750)** → stop trading for the day.
- Max concurrent open risk: **2R**.
- After 2 consecutive losses: half size until a green trade.

### 4a. Event-risk windows — high-volatility warning (advisory, NOT a block)

**The desk does not refuse a trade because an event is near.** The user trades these windows
deliberately and sizing is their call. What the desk owes them is an **unmissable warning** of
what they are stepping into — every time, never silently.

The macro specialists supply the **times**; this table supplies the **warning language**.

| Tier | Events | What the Analyst must say |
|---|---|---|
| **1 — binary macro** | FOMC decision + presser, CPI, NFP, PCE, GDP advance | ⚠️ **HIGH VOLATILITY WINDOW.** Violent two-way movement expected; the first move frequently reverses in full. |
| **2 — single-name / second-tier** | Mega-cap earnings prints, jobless claims, ECI, Michigan, Fed speakers with a live policy angle | ⚠️ **Elevated volatility** on that instrument and its correlated complex. State the implied move if sourceable. |
| **3 — background** | Minor data, routine speakers | Note it on the catalyst line. No warning needed. |

**A tier-1 window is a compound event.** FOMC means statement *and* presser, and the presser is
usually the bigger trigger because that is where tone lands. Warn through the end of the **last**
component, not just the headline print.

**"The first move is not the move."** In a tier-1 window the initial spike reverses often enough
that treating it as direction is a known way to get run over. Say this explicitly whenever the
tier-1 warning applies — it is the single most useful thing the desk can tell an event trader.

**This section gates nothing.** §2a (freshness) still governs whether a *sized* block may be
emitted, but that is a data-quality rule, unrelated to event risk. Being inside an event window
never downgrades a trade to map-only on its own.

*Why the warning is worth reading: on 2026-07-29 the Fed held rates, gold spiked to ~4,120 on the
headline, then Warsh's presser tone round-tripped it to ~4,053 inside the hour. Both directions
were tradeable; neither was predictable from the print itself. That is the shape of a tier-1
window — large range, low predictability, and a first move that lied.*

### 4b. Event-window ATR — size off the event's range, not the day's

Daily ATR is the wrong denominator inside a tier-1/tier-2 window. The event compresses a multiple
of a normal session's range into an hour or two, so daily-ATR math sets stops **too tight** and
makes perfectly reachable targets look like multi-day ones.

**Source the expected range, in this order of preference:**

1. **Options-implied move** for the event — the market's own priced range. Earnings prints publish
   it directly (`implied ±X%`); for macro events derive it from front-expiry straddle pricing
   where sourceable. `options-agent` supplies this.
2. **Realized range of the same event type** — what this instrument actually did on the last 2–3
   FOMC / CPI / NFP days.
3. **Fallback multiplier** — assume a tier-1 window can realize **1.0–1.5× the full daily ATR
   inside the window itself**. Tier-2 single-name prints: use the published implied move; there is
   rarely a good fallback.

**The daily ATR budget check is suspended inside the window.** §5's "daily ATR − points already
moved today" does not apply — an event *resets* the range rather than drawing down a fixed daily
allowance. Measure targets against the **event range** instead: a target at 60% of the expected
event range is a within-window target, not a multi-day one.

**Prefer Model B (structural stops) in event windows.** Structure survives a volatility-regime
change; an ATR-derived stop (Model A) is only as good as its ATR input, and that input is exactly
what the event invalidates. If Model A is unavoidable, feed it the **event** range — note this
mechanically produces a smaller position, which is the math working correctly, not a haircut.

**State the expected range explicitly in the decision block** whenever the §5 step-2 event
exception is used. The user is taking that entry live, and this number is what tells them whether
their stop sits inside the noise or outside it.

*Why: on 2026-07-29 gold's daily ATR was 85.6 pts (2.12%). The FOMC window alone realized ~79 pts
— essentially a full day's range — in about two hours, spiking to ~4,120 and round-tripping to
~4,053. Daily-ATR sizing would have placed stops well inside that noise, and the remaining-budget
check would have labelled a reachable target multi-day.*

---

## 5. The Strategy Filter (Analyst runs this after fusing specialists)

0. **Freshness gate (§2a) first.** How old is the anchor? >2 h → re-anchor before anything else.
   30 min–2 h → map only, no size. Never skip this step.
1. Fuse the specialist verdicts → regime + best instrument (in priority order) + levels.
2. Does it match a setup in §3? **No → stand aside.**
   - **Exception — event windows (§4a).** Inside a tier-1/tier-2 window, a missing §3 match does
     **not** force a stand-aside. The user takes event entries on live discretion, so the desk's
     job is to hand over levels, expected range, the ⚠️ warning and a size — not to refuse because
     no normal-tape pattern fits an event spike. State plainly that the entry trigger is the
     user's real-time call, not a playbook setup.
3. Is planned R:R ≥ 2.0? **No → stand aside.** (Under the event exception, compute R:R against the
   levels supplied and flag it — the binding check happens at the user's actual entry.)
4. Size it: pick Model A/B by the **stop** (§4), apply conviction × gamma multipliers → **lots**,
   margin, notional.
5. Emit the decision block — see the entry contract below.
6. If guardrails hit (§4), say so and refuse the trade.

### 5a. The entry contract — an entry is a CONDITION, never a bare price

A decision block is invalid unless the entry states **all three**:

1. **Zone** — the price band, not a single number.
2. **Confirmation trigger** — what price/indicator must *do* in that zone. A rejection candle,
   a reclaim, a Stoch reset, a failed retest. **Arrival in the zone is not a signal.**
3. **The no-trade case** — explicitly: "if price never reaches the zone, there is no trade,
   and that is a correct outcome."

```
✅ entry: bounce into 27,790–27,950, Stoch resets above ~50, THEN a rejection candle
          (needs an actual lower high — arrival at the zone is not a signal)
          no bounce = no trade
❌ entry: 27,870–27,950
```

*Why: on 2026-07-28 two static-price entry zones were both missed. Gold's 4,068–4,080 never
traded — price went the other way and the correct call paid nothing. The first NAS100 zone was
only reached after 330 pts had already run. The conditional version above is the one that
actually got filled, for +2.13R.*

---

## 5b. The Macro Core — derive session macro ONCE

`news-agent`, `sentiment-agent`, and `fundamental-agent` answer questions that are
**instrument-independent**: the event calendar, the rate/real-yield backdrop, the risk regime.
Re-running them per instrument is duplicated work *and* a correctness bug.

**The rule:**

- `/premarket` runs the three macro specialists **once** and writes **`scans/macro_YYYYMMDD.md`**.
- `/scan <X>` **reads that file** instead of respawning them, and fans out only the four
  instrument-specific specialists: `market-agent`, `indicator-agent`, `options-agent`,
  `social-agent`.
- If `scans/macro_<today>.md` is missing or **older than 4 hours**, `/scan` runs the macro three
  itself, writes the file, and every later scan that day reuses it.
- Anything in the Macro Core that is genuinely instrument-specific (gold ↔ real yields,
  Nasdaq ↔ mega-cap earnings) is recorded per-instrument **inside** the macro file.

**Cost:** 3 instruments went from 3 × 7 = **21** agent runs to 3 + (3 × 4) = **15**, and the
scan latency drops because the slow macro searches happen once.

*Why this matters more than the token saving: on 2026-07-28 the gold scan reported Fed hike odds
at 34% and the NAS100 scan at 31% — same day, same question, two answers, because they were
derived independently. One session, one macro truth.*

**`sentiment-agent` and `social-agent` look similar and are not — don't merge them.**
`sentiment-agent` is macro-tier, cached here, once per session: formal quantitative gauges (VIX,
Fear/Greed, broad equity put/call, breadth, CFTC/COT positioning, ETF flows). `social-agent` is
instrument-tier, reruns every `/scan`: informal chatter (X/Reddit/StockTwits) plus the
per-instrument movers-of-the-day nomination, which genuinely needs to be fresh each time.
Merging them would force one side to lose its correct cadence. The overlap that actually existed
was scope creep — social-agent reporting CFTC/ETF-flow data that belongs to sentiment-agent — not
a structural duplication; that's fixed in both agent specs. Keep them split.

---

## 5c. The smart-money pass — contrarian check, runs last

After every other specialist has reported and the Strategy Filter (§5) has produced its decision
block (a sized trade or a STAND ASIDE), run `smart-money-agent` **once, last**, on the finished
block — never before, never in the parallel fan-out with the others. It needs the other
specialists' levels and the plan itself to do its job; running it earlier gives it nothing to
check.

**What it does:** reads the decision block and flags whether the entry/trigger levels sit on
obvious, crowded liquidity (the level everyone's stop is resting behind) rather than a clean
technical trigger. It does **not** re-run the filter, resize the trade, or produce its own
decision block.

**What the Analyst does with it:** append its finding as a short **contrarian note** at the end
of the output — a few lines, not a rewrite. It is a flag to weigh, not a veto: the Strategy
Filter's decision block stands as the plan of record. If smart-money-agent finds nothing (the
plan is already sweep-aware, e.g. because §5a's confirmation trigger already requires travel
through the obvious level rather than anticipating it), say so plainly — don't manufacture a
manipulation story to justify running it.

```
contrarian note (smart-money-agent): <one-line read — trap flagged on which side, or "plan is
  already sweep-aware, no trap flagged"> — <one-line suggested adjustment if any, else "none">
```

---

## 5d. The Structure Core — options-agent's structural read, cached per instrument

`options-agent` has been the desk's strongest, most-relied-on read every session — both today's
decision blocks were built directly on its levels. It's also the one specialist whose core data
has a **natural daily cadence**: OI walls, max-pain, and gamma sign update once via OCC after the
prior close, not intraday. Re-running it from scratch on every `/scan` re-fights the same vendor
conflicts repeatedly (the ±$168M-vs-+$239M GEX fight got adjudicated twice in one session) for
data that hadn't actually changed. This is the same duplicated-work-plus-correctness-risk pattern
§5b fixed for macro — one layer down, at the instrument-structure level.

**The rule:**

- `/premarket`'s options-agent sweep (it already covers the whole universe in one pass) seeds
  **`scans/structure_YYYYMMDD.md`** — one file, sections per instrument (Gold, Nasdaq/NDX, BTC,
  Index), same pattern as the Macro Core's per-instrument section.
- `/scan <X>` and `/gamma <X>` **read that instrument's section** instead of respawning
  `options-agent`, if the section is fresh (see below).
- If the file or that instrument's section is missing or stale, spawn `options-agent` for that
  instrument, then **write/update just that section** — don't touch other instruments' sections.

**Freshness is NOT a clock, it's OI-cadence plus a break check** — this is different from the
Macro Core's 4-hour clock, because the underlying data genuinely doesn't move on a clock:

1. **Same calendar day (BKK)?** If not, the section is stale — yesterday's OCC snapshot doesn't
   describe today's book.
2. **Has price closed beyond a level the section recorded as the operative wall/flip?** If yes,
   the section is stale **for that instrument, immediately**, regardless of what day it is. A
   broken level means dealer positioning has very likely shifted even though the OI print won't
   confirm it until tomorrow's OCC — the cache must not keep asserting a wall that just failed.

**Primacy in fusion (§3):** when `options-agent`'s structural read (gamma sign, walls, flip,
max-pain) conflicts with another specialist's directional read, **the burden of proof sits with
the other specialist** — this is now the rule, not a case-by-case judgement call (it's what
resolved indicator-agent's flagged setup conflict in the 2026-07-30 gold scan, using options'
fresher data over a stale one). **This primacy is about structure existing, not about it being
unbreakable.** The instant a level actually closes-through, the break-check above fires and that
specific level loses its primacy immediately — a stale cache asserting a wall is exactly the
failure mode this section exists to prevent, not license.

**The honest limit — do not treat flip levels as tick-precise.** Every wall/flip is a **prev-close
OI figure run through a derived proxy conversion** (GLD→gold, QQQ→NAS100) — options-agent itself
has flagged ±15pt slop on this repeatedly. It cannot see intraday dealer repositioning. Use it to
know *which side of a level price is on*, not to place a stop at the exact number.

*Why: the 27,100 NAS100 put wall held on 2026-07-30 — a real, valuable, cacheable fact. The day
one gets blown through intraday, a naive cache would keep insisting it's there. The break-check
is what keeps the cache honest instead of just cheap.*

---

## 6. Two-pass session rhythm (Bangkok, UTC+7)

US regular open = 20:30 BKK (summer) / 21:30 BKK (winter). The desk runs twice:

- **Pass 1 — First Sign (scheduled, automatic).** A cloud routine runs `/premarket`
  ~1–1.5h before the open, whether or not the laptop is on. The user reads it on their
  phone during the commute home. This is the day's **thesis**: regime, catalysts, levels,
  the focus list.
- **Pass 2 — Confirmation (manual, at home before the open).** The user runs
  `/premarket confirm` and pastes (or summarizes) Pass 1. The desk re-sweeps fresh and
  **compares against the First Sign**, ending on one of:
  - **CONFIRMED** — thesis intact, levels/regime hold → trade the plan.
  - **CAUTION / CHANGED** — something moved since Pass 1 (news broke, gap shifted, regime
    flipped) → what changed, and whether the plan still stands or to stand aside.

The value is the **diff**: Pass 1 sets expectations early; Pass 2 catches anything
"unprecedented" that happened while the user was travelling, so they don't walk into a
stale thesis at the open.
