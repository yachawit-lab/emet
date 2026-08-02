# Outcomes ledger — did the desk's calls actually work?

Append-only. Every `/scan` and every `/premarket` that produces a falsifiable prediction adds a
row here with status **PENDING**. Four hours later the desk asks what happened and fills the row
in. Rows are never deleted or rewritten once reviewed — a wrong call that stays on the page is the
entire point of the file.

This exists because the desk had no feedback signal at all. The playbook learns well from losses
(every `*Why:*` block is a real post-mortem), but only from losses painful enough to notice. Wins,
near-misses, and correct stand-asides taught it nothing. This file is the other side of that loop.

**What "right" means here:** the desk is graded on its *read*, not on your P&L. A scan that
correctly said "wait for a bounce into 4,077-4,083 that never came" is a **correct** call that paid
nothing — that's the no-trade case working, not a miss. Whether you took the trade is tracked
separately, because "the desk was right" and "you made money" are different questions.

## The ledger

| Date (BKK) | Instrument | Setup | Predicted | Status | What happened |
|---|---|---|---|---|---|
| 2026-08-01 | BTC | map only, no setup | watch triggers: close <$60,000 → short retest · close >$65,000 → long retest (squeeze risk) | **SKIPPED** | Not graded — user opted out for day 1. Not traded, but note that's separate from whether the read was right (§7c); the $60k/$65k call remains checkable if ever wanted. |
| 2026-07-31 | NAS100 | Plan B — Breakout Retest | close >28,610, retest holds · stop 28,590 · T1 28,700 (4.25R) | **PENDING** | — |
| 2026-07-31 | NAS100 | Plan A — Mean Reversion | fade 28,505-28,530 · stop 28,608 · T1 28,330 (2.05R) · invalid on close >28,610 | **PENDING** | — |
| 2026-07-31 | XAUUSD | Mean Reversion | fade 4,077-4,083 · stop 4,087 · T1 4,057 (3.3R) · T2 4,020 (8.6R) · invalid on close >4,110-4,118 | **PENDING** | — |

**Pre-ledger scans (2026-07-28 → 07-30):** five scans exist in `scans/` from before this file —
two NAS100, three gold. Their predictions were not captured here at the time and are not
reconstructed above, because writing them in from memory now would be exactly the kind of
after-the-fact fabrication §2e exists to catch. They stay unreviewed. The ledger starts clean from
2026-07-31.

## Specialist data-rejection tally

§2e sets a heightened corroboration bar on `news-agent`'s "actual print landed" claims, and says
that bar should be **loosened once a run of clean passes justifies it**. Nothing recorded clean
passes, so the bar could never come off by evidence — it could only ever ratchet tighter. This
section is the missing record.

Log a line whenever a specialist's read is rejected under §2e, *and* whenever a specialist makes a
clean pass on a claim type that's currently under a heightened bar. Both directions count.

| Date (BKK) | Agent | Rejected / Clean | What |
|---|---|---|---|
| 2026-08-01 | indicator-agent | rejected (caught by itself) | Barchart MAs internally impossible vs. spot ($77,796 200-day MA on a $63k asset); discarded MAs, kept only the independently-corroborated ATR% |
| 2026-08-01 | options-agent | rejected (caught by itself) | financewithfm "negative gamma" claim contradicted its own source page (which said positive), sub-bar source, predated the Jul 31 expiry — discarded rather than averaged |
| 2026-08-01 | market-agent | flagged, not rejected | CoinDesk spot-only volume (~$10.5B) vs. CoinGecko aggregated (~$22.6B); reported the conflict instead of picking one |
| 2026-08-01 | sentiment-agent | flagged, not rejected | crypto Fear & Greed diverged across providers (25/27/38/44) for the same window; reported the zone as reliable, the exact number as noisy |
| 2026-08-01 | news-agent | **clean** | correctly labeled every unreleased item "pending" and wrote "Data unavailable" for unsourceable consensus figures — no scheduled-as-confirmed error, the specific failure §2e watches it for |

## How to read this file later

Once there are ~15 reviewed rows, these are the questions it can answer that guesswork cannot:

- **Which setup actually pays?** Group by the Setup column. If Mean Reversion fades keep getting
  invalidated while Breakout Retests hit T1, the playbook's §3 table needs reweighting, not the
  individual scans.
- **Are the entry zones reachable?** A run of "zone never traded" rows means §5a's conditional
  entries are being set too far from price — correct in principle, useless in practice.
- **Is the 2R minimum real?** Compare predicted R against what the level structure actually
  delivered.
- **Can news-agent's §2e bar come off?** Count clean passes in the tally above.
