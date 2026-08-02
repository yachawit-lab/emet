"""
Backfills real MFE/MAE and the real per-minute price path for each trade, using 1-minute
OHLC bars pulled directly from a running MT5 terminal — the same price feed your trades
executed against, so both the numbers and the chart match what actually happened to your
account rather than an independent third-party feed's version of the price.

Setup:
    pip install MetaTrader5
    (MT5 desktop terminal must be installed, running, and logged into your account)

Usage:
    python backfill_mfe_mae.py <exness_export.csv> <output.csv>

Expects the Exness account-history CSV export columns:
    ticket, opening_time_utc, closing_time_utc, type, lots,
    original_position_size, symbol, opening_price, closing_price,
    stop_loss, take_profit, commission, swap, profit, equity,
    margin_level, close_reason

Writes the same rows back out with three extra columns — `mfe`, `mae` (best/worst price
excursion from entry, in price units) and `priceSeries` (the real M1 bars covering the
trade window, as JSON) — ready to re-import via Ledger's Import CSV. Ledger uses
priceSeries to draw the trade's actual price path instead of a synthetic placeholder.
"""

import csv
import json
import sys
from datetime import datetime, timedelta, timezone

import MetaTrader5 as mt5

# Small pad around the trade window so M1 bar-boundary rounding doesn't clip the
# real high/low right at entry or exit, and so the chart shows a little lead-in/lead-out.
BUFFER_MINUTES = 2

# Hard cap on bars embedded per trade, to keep the CSV/localStorage size sane for
# long-held swing trades. mfe/mae are computed from the full, un-downsampled data first.
MAX_CHART_POINTS = 500


def parse_utc(value: str) -> datetime:
    return datetime.strptime(value.strip(), "%Y-%m-%dT%H:%M:%S").replace(tzinfo=timezone.utc)


def fetch_bars(symbol: str, start: datetime, end: datetime):
    if not mt5.symbol_select(symbol, True):
        raise RuntimeError(f"MT5 doesn't recognize symbol '{symbol}' — check it's visible in Market Watch")

    rates = mt5.copy_rates_range(
        symbol,
        mt5.TIMEFRAME_M1,
        start - timedelta(minutes=BUFFER_MINUTES),
        end + timedelta(minutes=BUFFER_MINUTES),
    )
    if rates is None or len(rates) == 0:
        return None
    return rates


def compute_mfe_mae(side: str, entry_price: float, bar_high: float, bar_low: float):
    if side.startswith("b"):  # buy / long
        mfe = max(0.0, bar_high - entry_price)
        mae = max(0.0, entry_price - bar_low)
    else:  # sell / short
        mfe = max(0.0, entry_price - bar_low)
        mae = max(0.0, bar_high - entry_price)
    return round(mfe, 5), round(mae, 5)


def bars_to_json(rates) -> str:
    n = len(rates)
    if n > MAX_CHART_POINTS:
        step = (n - 1) / (MAX_CHART_POINTS - 1)
        idx = sorted({int(round(i * step)) for i in range(MAX_CHART_POINTS)})
        rates = rates[idx]
    points = [
        [
            datetime.fromtimestamp(int(r["time"]), tz=timezone.utc).strftime("%Y-%m-%dT%H:%M:%S"),
            float(r["open"]),
            float(r["high"]),
            float(r["low"]),
            float(r["close"]),
        ]
        for r in rates
    ]
    return json.dumps(points, separators=(",", ":"))


def main(in_path: str, out_path: str) -> None:
    if not mt5.initialize():
        sys.exit(f"mt5.initialize() failed: {mt5.last_error()} — is the MT5 terminal open and logged in?")

    with open(in_path, newline="", encoding="utf-8-sig") as f:
        reader = csv.DictReader(f)
        rows = list(reader)
        fieldnames = list(reader.fieldnames or []) + ["mfe", "mae", "priceSeries"]

    missing_windows = 0
    for row in rows:
        symbol = row["symbol"].strip()
        side = row["type"].strip().lower()
        entry_price = float(row["opening_price"])
        entry_time = parse_utc(row["opening_time_utc"])
        exit_time = parse_utc(row["closing_time_utc"])

        try:
            rates = fetch_bars(symbol, entry_time, exit_time)
        except RuntimeError as e:
            print(f"Ticket {row['ticket']}: {e}")
            rates = None

        if rates is None:
            missing_windows += 1
            print(
                f"Ticket {row['ticket']} ({symbol}, {row['opening_time_utc']}): "
                "no MT5 history for this window — open an M1 chart for this symbol "
                "and scroll back to force MT5 to download older bars, then re-run."
            )
            row["mfe"], row["mae"], row["priceSeries"] = "", "", ""
            continue

        bar_high = float(max(r["high"] for r in rates))
        bar_low = float(min(r["low"] for r in rates))
        mfe, mae = compute_mfe_mae(side, entry_price, bar_high, bar_low)
        row["mfe"], row["mae"] = mfe, mae
        row["priceSeries"] = bars_to_json(rates)

    with open(out_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames)
        writer.writeheader()
        writer.writerows(rows)

    mt5.shutdown()
    print(f"\nWrote {len(rows)} rows to {out_path} ({missing_windows} missing MT5 history).")


if __name__ == "__main__":
    if len(sys.argv) != 3:
        sys.exit("Usage: python backfill_mfe_mae.py <exness_export.csv> <output.csv>")
    main(sys.argv[1], sys.argv[2])
