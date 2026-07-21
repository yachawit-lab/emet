"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { useFilterStore } from "@/store/filter-store";
import { isFilterActive } from "@/lib/filters";

interface Chip {
  key: string;
  label: string;
  onRemove: () => void;
}

export function FilterChips() {
  const { filters, setFilters, toggleSymbol, toggleSetup, toggleTag, clearAll } =
    useFilterStore();

  const chips: Chip[] = [];
  if (filters.preset !== "All") {
    chips.push({
      key: "preset",
      label: filters.preset === "Custom" ? "Custom range" : filters.preset,
      onRemove: () => setFilters({ preset: "All" }),
    });
  }
  filters.symbols.forEach((s) =>
    chips.push({ key: `sym-${s}`, label: s, onRemove: () => toggleSymbol(s) })
  );
  filters.setups.forEach((s) =>
    chips.push({ key: `setup-${s}`, label: s, onRemove: () => toggleSetup(s) })
  );
  filters.tags.forEach((t) =>
    chips.push({ key: `tag-${t}`, label: t, onRemove: () => toggleTag(t) })
  );
  if (filters.side !== "all") {
    chips.push({
      key: "side",
      label: filters.side === "long" ? "Long only" : "Short only",
      onRemove: () => setFilters({ side: "all" }),
    });
  }

  if (!isFilterActive(filters)) return null;

  return (
    <div className="flex flex-wrap items-center gap-1.5 pt-2.5">
      <AnimatePresence initial={false}>
        {chips.map((chip) => (
          <motion.button
            key={chip.key}
            layout
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.85 }}
            transition={{ type: "spring", damping: 22, stiffness: 380 }}
            onClick={chip.onRemove}
            className="inline-flex items-center gap-1 rounded-full bg-accent-soft text-accent-strong text-xs font-medium pl-2.5 pr-1.5 py-1 hover:bg-accent/20"
          >
            {chip.label}
            <X size={12} />
          </motion.button>
        ))}
      </AnimatePresence>
      <button
        onClick={clearAll}
        className="text-xs font-medium text-fg-subtle hover:text-fg underline underline-offset-2 ml-1"
      >
        Clear all
      </button>
    </div>
  );
}
