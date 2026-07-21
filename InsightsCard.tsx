"use client";

import { useFilterStore } from "@/store/filter-store";
import { useViewStore } from "@/store/view-store";
import { SegmentedControl } from "@/components/ui/SegmentedControl";
import { MultiSelect } from "@/components/ui/MultiSelect";
import { SYMBOLS, SETUPS, ALL_TAGS, DatePreset, ValueMode } from "@/lib/types";
import { Eye, EyeOff } from "lucide-react";
import { cn } from "@/lib/cn";
import { FilterChips } from "./FilterChips";

const DATE_PRESETS: { value: DatePreset; label: string }[] = [
  { value: "7D", label: "7D" },
  { value: "30D", label: "30D" },
  { value: "90D", label: "90D" },
  { value: "YTD", label: "YTD" },
  { value: "1Y", label: "1Y" },
  { value: "All", label: "All" },
];

const VALUE_MODES: { value: ValueMode; label: string }[] = [
  { value: "$", label: "$" },
  { value: "R", label: "R" },
  { value: "%", label: "%" },
];

export function GlobalFilterBar({ showViewToggles = true }: { showViewToggles?: boolean }) {
  const { filters, setFilters, toggleSymbol, toggleSetup, toggleTag } = useFilterStore();
  const { valueMode, setValueMode, useGross, setUseGross, hidePnl, setHidePnl } = useViewStore();

  return (
    <div className="sticky top-0 md:top-0 z-20 -mx-4 md:-mx-8 px-4 md:px-8 py-3 mb-6 bg-bg/85 backdrop-blur border-b border-border">
      <div className="flex items-center gap-3 overflow-x-auto pb-1 [scrollbar-width:thin]">
        <SegmentedControl
          size="sm"
          options={DATE_PRESETS}
          value={filters.preset === "Custom" ? "All" : filters.preset}
          onChange={(v) => setFilters({ preset: v })}
          className="shrink-0"
        />
        <div className="h-5 w-px bg-border shrink-0" />
        <MultiSelect
          label="Symbol"
          options={SYMBOLS}
          selected={filters.symbols}
          onToggle={toggleSymbol}
          className="shrink-0"
        />
        <MultiSelect
          label="Setup"
          options={SETUPS}
          selected={filters.setups}
          onToggle={toggleSetup}
          className="shrink-0"
        />
        <MultiSelect
          label="Tag"
          options={ALL_TAGS}
          selected={filters.tags}
          onToggle={toggleTag}
          className="shrink-0"
        />
        <SegmentedControl
          size="sm"
          options={[
            { value: "all", label: "All" },
            { value: "long", label: "Long" },
            { value: "short", label: "Short" },
          ]}
          value={filters.side}
          onChange={(v) => setFilters({ side: v as "all" | "long" | "short" })}
          className="shrink-0"
        />

        {showViewToggles && (
          <>
            <div className="ml-auto" />
            <SegmentedControl
              size="sm"
              options={VALUE_MODES}
              value={valueMode}
              onChange={setValueMode}
              className="shrink-0"
            />
            <SegmentedControl
              size="sm"
              options={[
                { value: "net", label: "Net" },
                { value: "gross", label: "Gross" },
              ]}
              value={useGross ? "gross" : "net"}
              onChange={(v) => setUseGross(v === "gross")}
              className="shrink-0"
            />
            <button
              onClick={() => setHidePnl(!hidePnl)}
              aria-pressed={hidePnl}
              title={hidePnl ? "Show P&L" : "Hide P&L (privacy mode)"}
              className={cn(
                "shrink-0 inline-flex items-center justify-center rounded-full border p-2 transition-colors",
                hidePnl
                  ? "border-accent bg-accent-soft text-accent-strong"
                  : "border-border bg-card text-fg-muted hover:text-fg"
              )}
            >
              {hidePnl ? <EyeOff size={15} /> : <Eye size={15} />}
            </button>
          </>
        )}
      </div>
      <FilterChips />
    </div>
  );
}
