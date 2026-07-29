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

### 2c. Timezone — UTC internally, Bangkok (UTC+7) on final display

Specialists, the Macro Core file (`scans/macro_YYYYMMDD.md`), and all citations/timestamps
stay in **UTC** — that's what news sources, economic calendars, and freshness checks are
published in, and it's what keeps cross-agent times comparable.

The **Analyst's final output** — the block the user actually reads at the end of `/scan` and
`/premarket` — converts every clock time shown (event calendar, catalyst times, flat-by /
event-risk windows, `as-of`) to **Bangkok time (UTC+7), shown as BKK only** (e.g. `18:00 UTC`
FOMC → display as `01:00 BKK`). Do the conversion as the last step, after fusion, so the
underlying UTC-based freshness gate (§2a) and macro file are unaffected.

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

---

## 5. The Strategy Filter (Analyst runs this after fusing specialists)

0. **Freshness gate (§2a) first.** How old is the anchor? >2 h → re-anchor before anything else.
   30 min–2 h → map only, no size. Never skip this step.
1. Fuse the specialist verdicts → regime + best instrument (in priority order) + levels.
2. Does it match a setup in §3? **No → stand aside.**
3. Is planned R:R ≥ 2.0? **No → stand aside.**
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

---

## 7. Journaling back into Ledger (post-session)

Draft entries mapping to `lib/types.ts` `Trade` fields: `setup`, `thesis`,
`grade` (A+/A/B/C), `emotion`, `confidence` (1–5), `tags`
(from MISTAKE/QUALITY/MARKET tag sets), `followedPlan`, and `review`
(right / wrong / thesisCorrect / oneChange). Never invent fills — only journal
trades the user actually took.
