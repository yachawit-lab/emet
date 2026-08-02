# Feed pipeline

Deterministic data ingestion for the desk. No LLM runs in this directory — everything
here is plain Python, so every published number is reproducible from the archive.

```bash
python -m pipeline.build                      # all instruments -> feed/latest/
python -m pipeline.build --instrument BTCUSD  # one instrument
```

Stdlib only — no `requirements.txt`, no virtualenv. One optional API key
(`TWELVEDATA_API_KEY`); absent, it degrades to a coverage gap rather than a failure.

```bash
python -m unittest discover -s pipeline/tests -t .   # gate tests
python -m pipeline.publishers.mt5_local              # Windows + MT5 terminal only
```

## What it produces

`feed/latest/` is **overwritten every run** and always holds the same five files:

| File | Read by |
|---|---|
| `market.json` | `market-agent` — price, session, prior session, gap |
| `indicators.json` | `indicator-agent` — ATR/RSI/MACD/EMA/VWAP/OR, all derived |
| `digest.md` | the fusion step, and humans |
| `manifest.json` | `/scan` — desk grade, coverage, run id, byte sizes |
| `provenance.json` | nobody at runtime — audit trail, raw hashes, basis |

Nothing accumulates. History is git history:

```bash
git log -p feed/latest/market.json       # the time series
git show <sha>:feed/latest/market.json   # any past bundle
```

## The desk grade

`manifest.desk_grade` applies playbook §2a **in code**, so the decision about whether a
scan may be sized is not one an agent makes about itself.

| Grade | Condition | Desk may produce |
|---|---|---|
| `SIZEABLE` | `VERIFIED` anchor, ≤30 min old | full decision block with size |
| `MAP_ONLY` | fresh but `SINGLE`, or 30 min–2 h | levels and bias, no size |
| `RE_ANCHOR` | `STALE` / `DISPUTED` / >2 h | nothing actionable |

The bundle grade is the **floor** across instruments. `SINGLE` never reaches `SIZEABLE` —
one source is not a read (§2c).

## Source tiers

| Tier | Rule | Currently |
|---|---|---|
| A — exchange/venue direct | may stand alone | Binance, Deribit, **MT5 (Exness)** |
| B — vendor aggregator | needs corroboration | Yahoo, gold-api, Twelve Data, CNBC |
| C — crowd | never becomes a number | *(not yet implemented)* |

**Independence is about origin, not vendor.** Twelve Data's `BTC/USD` reports
exchange `Binance` — adding it beside our direct Binance read would manufacture
agreement between two copies of one source, which is worse than one source because
it *looks* like corroboration. Same reason `NQ=F` cannot corroborate `^NDX`: same
vendor, plus a futures basis.

**An index is not a price.** NDX has one official value from Nasdaq; CNBC and Yahoo
republish it identically to three decimals. That pairing is a transport-error check,
not a second opinion. Gold is the opposite — OTC, no official price, so its sources
genuinely quote different books and agreement means something.

### Source notes, learned the hard way

- **Stooq is dead as a keyless source** — it now serves a JS bot-challenge page to
  every symbol, with HTTP 200. It was the intended Tier-B second opinion.
- **Yahoo has no spot-gold symbol.** `XAUUSD=X` and `XAU=X` both 404. Only `GC=F`
  (futures) and `GLD` (ETF) resolve, and the playbook rules out both as anchors.
  Gold therefore anchors on gold-api.com spot and derives indicators from `GC=F` bars,
  with the split recorded in `market.caveat`.
- **The gold basis is real and large.** Measured 2026-08-02: spot 4043.70 vs GC=F
  4107.00, **+156 bps**. It is published as `provenance.basis_vs_bars`, never corrected
  for and never averaged away — a basis that moves suddenly means a feed has broken.
- **Twelve Data free tier has no indices** (`NDX` 404s), so it did not solve NAS100.
  MT5's `USTECm` did — the broker's own book is the genuinely independent read.
- **Web vendors lie about freshness.** On 2026-08-02, spot metals shut since Friday
  21:00 UTC: gold-api claimed a 12-minute-old price and Twelve Data reported
  `is_market_open: true`, while the Exness terminal honestly reported its last tick
  as 34.5 hours old. `pipeline/sessions.py` decides whether a market is open; vendors
  only get to report a price.
- **Twelve Data timestamps need `timezone=UTC`** or bars arrive ~10h ahead.

## Gates

`pipeline/gates.py` — each is a playbook §2c failure mode turned into a check.

- `agree()` — cross-source agreement in bps. **Disagreement is never averaged**; it
  emits both values as `DISPUTED`. With 3+ sources it clusters around the median and
  **excludes outliers by name** rather than letting one frozen feed veto the rest —
  otherwise a restamping source drags good sources to `RE_ANCHOR` exactly when the
  market is moving and a read matters most.
- `sessions.is_open()` — market-hours gate, catching the restamp the TTL cannot.
- proxy divergence — gold vs Binance XAUT (24/7, Tier A). A *check*, never an anchor.
- `check_freshness()` — per-kind TTL, demotes to `STALE`.
- `reconcile_atr()` — ATR points, ATR %, and price must describe the same instrument.
- `roll_suspect()` — futures bar band matching the *prior* spot session.
- `sanity_bounds()` — last-resort range check for decimal slips and symbol collisions.

## Deliberately not done yet

- **No JSON Schema.** The bundle shape changed twice while building it — freezing a
  contract now would be premature. Freeze it once a week of real bundles has run.
- **No size limits.** `manifest.bytes` records sizes every run so the trend exists if
  it ever matters. Nothing fails on a number nobody has measured yet.
- **No options / macro / news / social files.** Phases 3–5.
- **No holiday calendar.** A US market holiday still reads as an open session.
