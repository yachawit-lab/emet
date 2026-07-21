import { EnrichedTrade } from "./types";

function csvEscape(v: string | number): string {
  const s = String(v);
  if (/[",\n]/.test(s)) return `"${s.replace(/"/g, '""')}"`;
  return s;
}

export function tradesToCsv(trades: EnrichedTrade[]): string {
  const headers = [
    "date",
    "symbol",
    "side",
    "qty",
    "entryPrice",
    "exitPrice",
    "setup",
    "grade",
    "netPnl",
    "rMultiple",
    "mfeR",
    "maeR",
    "holdMin",
    "followedPlan",
    "tags",
  ];
  const rows = trades.map((t) => [
    t.entryTime.slice(0, 10),
    t.symbol,
    t.side,
    t.qty,
    t.entryPrice,
    t.exitPrice,
    t.setup,
    t.grade,
    t.d.netPnl.toFixed(2),
    t.d.rMultiple.toFixed(2),
    t.d.mfeR.toFixed(2),
    t.d.maeR.toFixed(2),
    Math.round(t.d.durationMin),
    t.followedPlan ? "yes" : "no",
    t.tags.join(" | "),
  ]);
  return [headers, ...rows].map((row) => row.map(csvEscape).join(",")).join("\n");
}

export function downloadCsv(filename: string, csv: string) {
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
}
