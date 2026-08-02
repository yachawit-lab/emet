"use client";

import { useMemo, useRef, useState } from "react";
import Link from "next/link";
import { format } from "date-fns";
import { ArrowUpDown, ArrowUp, ArrowDown, Search, Download, Upload, Sparkles, Loader2 } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { Badge, PnlGlyph } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";
import { EmptyState } from "@/components/ui/EmptyState";
import { EnrichedTrade } from "@/lib/types";
import { useViewStore } from "@/store/view-store";
import { useTradeStore } from "@/store/trade-store";
import { pnlValue, formatPnlValue, maskValue } from "@/lib/value-mode";
import { formatDuration, formatR } from "@/lib/format";
import { tradesToCsv, downloadCsv, parseTradesCsv, tradesImportTemplate } from "@/lib/csv";
import { cn } from "@/lib/cn";

type SortKey =
  | "date"
  | "symbol"
  | "side"
  | "netPnl"
  | "r"
  | "mfeR"
  | "maeR"
  | "hold"
  | "setup"
  | "grade";

interface Column {
  key: SortKey;
  label: string;
  align?: "left" | "right";
}

const COLUMNS: Column[] = [
  { key: "date", label: "Date" },
  { key: "symbol", label: "Symbol" },
  { key: "side", label: "Side" },
  { key: "netPnl", label: "Net P&L", align: "right" },
  { key: "r", label: "R", align: "right" },
  { key: "mfeR", label: "MFE/R", align: "right" },
  { key: "maeR", label: "MAE/R", align: "right" },
  { key: "hold", label: "Hold", align: "right" },
  { key: "setup", label: "Setup" },
  { key: "grade", label: "Grade" },
];

function sortValue(t: EnrichedTrade, key: SortKey): number | string {
  switch (key) {
    case "date":
      return new Date(t.exitTime).getTime();
    case "symbol":
      return t.symbol;
    case "side":
      return t.side;
    case "netPnl":
      return t.d.netPnl;
    case "r":
      return t.d.rMultiple;
    case "mfeR":
      return t.d.mfeR;
    case "maeR":
      return t.d.maeR;
    case "hold":
      return t.d.durationMin;
    case "setup":
      return t.setup;
    case "grade":
      return t.grade;
  }
}

export function TradeTable({ trades }: { trades: EnrichedTrade[] }) {
  const { valueMode, useGross, hidePnl } = useViewStore();
  const addTrades = useTradeStore((s) => s.addTrades);
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState<SortKey>("date");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("desc");
  const [importSummary, setImportSummary] = useState<string | null>(null);
  const [isBackfilling, setIsBackfilling] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const backfillInputRef = useRef<HTMLInputElement>(null);

  function importParsedCsv(text: string) {
    const { trades: parsed, errors } = parseTradesCsv(text);
    const parts = [];
    if (parsed.length > 0) {
      const { added, updated } = addTrades(parsed);
      if (added > 0) parts.push(`Imported ${added} trade${added === 1 ? "" : "s"}.`);
      if (updated > 0) parts.push(`Updated ${updated} existing trade${updated === 1 ? "" : "s"} (matched by ticket/time).`);
    }
    if (errors.length > 0) {
      parts.push(
        `Skipped ${errors.length} row${errors.length === 1 ? "" : "s"}: ` +
          errors.slice(0, 5).map((e) => `row ${e.row} (${e.message})`).join("; ") +
          (errors.length > 5 ? `; +${errors.length - 5} more` : "")
      );
    }
    setImportSummary(parts.join(" ") || "No trades found in file.");
  }

  async function handleImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    importParsedCsv(await file.text());
  }

  async function handleAutoBackfillImport(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    setIsBackfilling(true);
    setImportSummary(null);
    try {
      const res = await fetch("/api/backfill", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ csv: await file.text() }),
      });
      const data = await res.json();
      if (!res.ok) {
        setImportSummary(`Backfill failed: ${data.error ?? "unknown error"}`);
        return;
      }
      importParsedCsv(data.csv as string);
    } catch {
      setImportSummary("Backfill failed: couldn't reach the local server. Is `npm run dev` running?");
    } finally {
      setIsBackfilling(false);
    }
  }

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return trades;
    return trades.filter(
      (t) =>
        t.symbol.toLowerCase().includes(q) ||
        t.setup.toLowerCase().includes(q) ||
        t.tags.some((tag) => tag.toLowerCase().includes(q)) ||
        t.grade.toLowerCase().includes(q)
    );
  }, [trades, search]);

  const sorted = useMemo(() => {
    const arr = [...filtered];
    arr.sort((a, b) => {
      const av = sortValue(a, sortKey);
      const bv = sortValue(b, sortKey);
      const cmp = typeof av === "number" && typeof bv === "number" ? av - bv : String(av).localeCompare(String(bv));
      return sortDir === "asc" ? cmp : -cmp;
    });
    return arr;
  }, [filtered, sortKey, sortDir]);

  function toggleSort(key: SortKey) {
    if (sortKey === key) {
      setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    } else {
      setSortKey(key);
      setSortDir("desc");
    }
  }

  const totalNet = filtered.reduce((s, t) => s + t.d.netPnl, 0);

  return (
    <Card padded={false}>
      <div className="flex flex-wrap items-center gap-3 p-5 border-b border-border">
        <div className="relative flex-1 min-w-[200px]">
          <Search size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-fg-subtle" />
          <Input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search symbol, setup, tag, grade…"
            className="pl-9"
          />
        </div>
        <input
          ref={fileInputRef}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={handleImportFile}
        />
        <Button variant="secondary" size="sm" onClick={() => fileInputRef.current?.click()}>
          <Upload size={14} />
          Import CSV
        </Button>
        <input
          ref={backfillInputRef}
          type="file"
          accept=".csv,text/csv"
          className="hidden"
          onChange={handleAutoBackfillImport}
        />
        <Button
          variant="secondary"
          size="sm"
          disabled={isBackfilling}
          onClick={() => backfillInputRef.current?.click()}
          title="Attach a raw Exness export — this pulls real MT5 price data and computes MFE/MAE for you before importing"
        >
          {isBackfilling ? <Loader2 size={14} className="animate-spin" /> : <Sparkles size={14} />}
          {isBackfilling ? "Pulling MT5 data…" : "Import from Exness (auto-backfill)"}
        </Button>
        <button
          type="button"
          className="text-xs text-fg-muted hover:text-fg underline underline-offset-2"
          onClick={() =>
            downloadCsv("ledger-import-template.csv", tradesImportTemplate())
          }
        >
          Download template
        </button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => downloadCsv(`trades-${format(new Date(), "yyyy-MM-dd")}.csv`, tradesToCsv(sorted))}
        >
          <Download size={14} />
          Export CSV
        </Button>
      </div>

      {importSummary && (
        <div className="flex items-start justify-between gap-3 px-5 py-3 border-b border-border bg-panel/60 text-xs text-fg-muted">
          <span>{importSummary}</span>
          <button
            type="button"
            className="shrink-0 hover:text-fg"
            onClick={() => setImportSummary(null)}
          >
            Dismiss
          </button>
        </div>
      )}

      {sorted.length === 0 ? (
        trades.length === 0 ? (
          <EmptyState
            title="No trades yet"
            message="Import a CSV of your real trades or log one manually to get started."
          />
        ) : (
          <EmptyState title="No trades found" message="Try a different search term or clear your filters." />
        )
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                {COLUMNS.map((col) => (
                  <th
                    key={col.key}
                    className={cn(
                      "px-4 py-3 font-medium text-xs text-fg-muted uppercase tracking-wide whitespace-nowrap select-none cursor-pointer hover:text-fg",
                      col.align === "right" && "text-right"
                    )}
                    onClick={() => toggleSort(col.key)}
                  >
                    <span className={cn("inline-flex items-center gap-1", col.align === "right" && "flex-row-reverse")}>
                      {col.label}
                      {sortKey === col.key ? (
                        sortDir === "asc" ? (
                          <ArrowUp size={12} />
                        ) : (
                          <ArrowDown size={12} />
                        )
                      ) : (
                        <ArrowUpDown size={12} className="opacity-30" />
                      )}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {sorted.map((t) => {
                const val = pnlValue(t, valueMode, useGross);
                return (
                  <tr
                    key={t.id}
                    className="border-b border-border last:border-0 hover:bg-panel/60 transition-colors cursor-pointer"
                    onClick={() => (window.location.href = `/trades/${t.id}`)}
                  >
                    <td className="px-4 py-3 whitespace-nowrap text-fg-muted">
                      <Link href={`/trades/${t.id}`} className="hover:underline" onClick={(e) => e.stopPropagation()}>
                        {format(new Date(t.exitTime), "MMM d, yyyy")}
                      </Link>
                    </td>
                    <td className="px-4 py-3 font-medium whitespace-nowrap">{t.symbol}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Badge tone="neutral" className="capitalize">{t.side}</Badge>
                    </td>
                    <td
                      className={cn(
                        "px-4 py-3 text-right tabular-nums font-medium whitespace-nowrap",
                        val >= 0 ? "text-gain" : "text-loss"
                      )}
                    >
                      <span className="inline-flex items-center gap-1 justify-end">
                        <PnlGlyph value={val} />
                        {maskValue(formatPnlValue(val, valueMode, { sign: true }), hidePnl)}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums whitespace-nowrap">
                      {formatR(t.d.rMultiple, { sign: true })}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-fg-muted whitespace-nowrap">
                      {formatR(t.d.mfeR)}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-fg-muted whitespace-nowrap">
                      {formatR(t.d.maeR)}
                    </td>
                    <td className="px-4 py-3 text-right tabular-nums text-fg-muted whitespace-nowrap">
                      {formatDuration(t.d.durationMin)}
                    </td>
                    <td className="px-4 py-3 text-fg-muted whitespace-nowrap">{t.setup}</td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      <Badge tone={t.grade === "C" ? "loss" : t.grade.startsWith("A") ? "gain" : "neutral"}>
                        {t.grade}
                      </Badge>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}

      <div className="flex items-center justify-between px-5 py-3 border-t border-border text-xs text-fg-muted">
        <span>{sorted.length} trades</span>
        <span
          className={cn(
            "font-medium tabular-nums",
            totalNet >= 0 ? "text-gain" : "text-loss"
          )}
        >
          Net: {hidePnl ? "•••" : formatPnlValue(totalNet, "$", { sign: true })}
        </span>
      </div>
    </Card>
  );
}
