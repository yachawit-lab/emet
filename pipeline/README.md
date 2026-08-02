# Feed pipeline

Deterministic data ingestion for the desk. No LLM runs in this directory — everything
here is plain Python, so every published number is reproducible from the archive.

```bash
python -m pipeline.build                      # all instruments -> feed/latest/
python -m pipeline.build --instrument BTCUSD  # one instrument
```

Stdlib only. No `requirements.txt`, no virtualenv, no API keys as of Phase 1.

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
| A — exchange/issuer direct | may stand alone | Binance, Deribit |
| B — vendor aggregator | needs corroboration | Yahoo chart API, gold-api.com |
| C — crowd | never becomes a number | *(not yet implemented)* |

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
- **NAS100 has no independent second source** since Stooq fell over, so it anchors
  `SINGLE` and caps at `MAP_ONLY`. A free Twelve Data key is the one addition that
  would buy real integrity here.

## Gates

`pipeline/gates.py` — each is a playbook §2c failure mode turned into a check.

- `agree()` — cross-source agreement in bps. **Disagreement is never averaged**; it
  emits both values as `DISPUTED`.
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
