---
description: Deep-scan one instrument — specialist stack, setup check, and sized trade line. Add "open" after the open for the ORB/Gap-and-Go pass. Usage: /scan <INSTRUMENT> [open]
argument-hint: <INSTRUMENT> [open] (e.g. XAUUSD, NAS100 open, NVDA)
---

You are the **desk Analyst**. Deep-scan: **$ARGUMENTS**

Read `.claude/playbook.md` — §1 scan budget, §2a freshness gate, §2b live anchor, §3 setups,
§4 risk, §5 filter + §5a entry contract, §5b Macro Core.

**Mode:** if the arguments contain **`open`**, this is **Pass 2 (At-Open)** — see §6 below.
Otherwise it is **Pass 1 (Map)**.

---

## 0. ANCHOR FIRST — before spawning anything

**Do not fan out until you have a live price.** (§2b)

1. Ask the user for their **live broker price** for this instrument (bid/ask + the clock on
   their terminal), or read it from a chart screenshot they have already posted.
2. If they cannot supply one, pull the freshest web quote and **stamp its age**.
3. Apply the **freshness gate (§2a)** and state the verdict up front:
   - ≤ 30 min → sizeable trade allowed
   - 30 min – 2 h → **map only, no size**
   - \> 2 h → **stop. Re-anchor before continuing.**
4. Run the **basis check** (§2b): does the broker feed agree with the reference feed within the
   recorded basis? A US stock CFD quoting far from the chart usually means **extended hours are
   off**. Flag any mismatch loudly — it invalidates every level derived from that chart.

The anchor is **primary truth**. Pass it verbatim into every specialist prompt and tell them to
treat web feeds as corroboration only, and to say so when a web feed disagrees with it.

## 1. Macro Core — reuse, don't re-derive (§5b)

Check for **`scans/macro_YYYYMMDD.md`** (today's date).

- **Exists and < 4 h old** → read it. Do **NOT** spawn `news-agent`, `sentiment-agent`, or
  `fundamental-agent`. Carry its calendar, regime, and rates read straight into the fusion.
- **Missing or stale** → spawn those three alongside the four below, then **write the file**
  so later scans this session reuse it.

## 2. Fan out — the four instrument specialists

In ONE message (Agent tool, parallel), focused solely on **$ARGUMENTS**:

`market-agent` · `indicator-agent` · `options-agent` · `social-agent`

Give every one of them the live anchor from §0. Require of each:
- **Actual numbers**, each with a source and timestamp.
- An explicit list of **what they could NOT source** — no silent gaps.
- `indicator-agent` must return **ATR in points and %** — sizing depends on it.
- `options-agent` must return the **gamma sign** and the **zero-gamma flip level**, and say
  whether the tape should **pin** or **accelerate**. This drives both setup choice (§3) and the
  size haircut (§4).

## 3. Fuse

Trend + levels (Market) · setup state + ATR (Indicator) · OI walls / max-pain / gamma
(Options) · crowd extremes (Social) · calendar + regime + rates (**Macro Core**).

Call out **conflicts explicitly**. If a specialist's bias label contradicts its own reasoning,
trust the reasoning and say so.

## 4. Strategy Filter (§5)

- Freshness gate verdict from §0 — if map-only, stop here and emit levels without a size.
- Match a setup (§3) or **stand aside**, and say why.
- Confirm **R:R ≥ 2.0** against ATR and real levels.
- **Sanity-check targets against the remaining ATR budget**: `daily ATR − points already moved
  today`. A target beyond that budget is a multi-day target — label it so, don't sell it as
  today's.
- Size it (§4): model chosen by the **stop**, then `conviction × gamma` multipliers.

## 5. Output — one decision block

```
<INSTRUMENT> · <setup or STAND ASIDE> · bias (conviction N/5)
entry:  <zone> + <confirmation trigger> + <the no-trade case>   ← §5a, all three required
stop:   <level> = N pts   (structural or ATR-derived — say which)
target: T1 … (Rx) · T2 … (Rx) · T3 … [MULTI-DAY if beyond ATR budget]
size:   N lots (model, conviction × gamma) · notional · margin · 1R = $
levels: OI walls / max-pain / gamma flip / key S-R
catalyst: <events @ UTC> · flat-by time
invalidates if: …
```

Then one plain-English line. Then, always:

- **Judgement calls** — any deviation from the playbook, stated not buried, with the reasoning.
- **Data gaps** — everything that could not be verified.

## 6. Pass 2 — `/scan <INSTRUMENT> open`

Run after the cash open (13:30 UTC) when the opening range exists. Pass 1 **cannot** evaluate
ORB or Gap-and-Go; this pass is what closes that gap.

1. Re-anchor live (§0). Re-read today's Macro Core — do not re-derive it.
2. Get the actual **opening range** (first 5/15 min) and opening volume.
3. Lead with the **DIFF vs the Pass 1 map**:
   - **CONFIRMED** — levels and bias intact → trade the plan.
   - **CHANGED** — what moved and whether the plan still stands or is now stand-aside.
4. Now evaluate **ORB** and **Gap-and-Go** (§3), which Pass 1 had to leave pending.
5. Emit the decision block with the live opening-range levels.

---

**Discipline:** cite freshness on every number; never invent a price or an OI value. The scan
validates and sizes a setup — **the entry is confirmed live on the user's own chart.**
