"use client";

import { useEffect, useRef, useState } from "react";
import { ChevronDown, Check } from "lucide-react";
import { cn } from "@/lib/cn";

export function MultiSelect({
  label,
  options,
  selected,
  onToggle,
  className,
}: {
  label: string;
  options: readonly string[];
  selected: string[];
  onToggle: (value: string) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function onClick(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    }
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
  }, []);

  return (
    <div className={cn("relative", className)} ref={ref}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
          selected.length > 0
            ? "border-accent bg-accent-soft text-accent-strong"
            : "border-border bg-card text-fg-muted hover:text-fg"
        )}
      >
        {label}
        {selected.length > 0 && (
          <span className="rounded-full bg-accent text-white text-[10px] leading-none px-1.5 py-0.5">
            {selected.length}
          </span>
        )}
        <ChevronDown size={14} className={cn("transition-transform", open && "rotate-180")} />
      </button>
      {open && (
        <div className="absolute z-30 mt-2 w-56 max-h-72 overflow-y-auto rounded-xl border border-border bg-card card-shadow-hover p-1.5">
          {options.map((opt) => {
            const isSelected = selected.includes(opt);
            return (
              <button
                key={opt}
                onClick={() => onToggle(opt)}
                className={cn(
                  "flex w-full items-center justify-between gap-2 rounded-lg px-2.5 py-1.5 text-left text-sm hover:bg-panel transition-colors",
                  isSelected ? "text-fg font-medium" : "text-fg-muted"
                )}
              >
                <span>{opt}</span>
                {isSelected && <Check size={14} className="text-accent shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
