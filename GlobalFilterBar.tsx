"use client";

import { cn } from "@/lib/cn";

interface Option<T extends string> {
  value: T;
  label: string;
}

export function SegmentedControl<T extends string>({
  options,
  value,
  onChange,
  size = "md",
  className,
}: {
  options: Option<T>[];
  value: T;
  onChange: (v: T) => void;
  size?: "sm" | "md";
  className?: string;
}) {
  return (
    <div
      role="tablist"
      className={cn(
        "inline-flex items-center rounded-full bg-panel border border-border p-0.5",
        className
      )}
    >
      {options.map((opt) => (
        <button
          key={opt.value}
          role="tab"
          aria-selected={value === opt.value}
          onClick={() => onChange(opt.value)}
          className={cn(
            "relative rounded-full font-medium transition-colors duration-150",
            size === "sm" ? "px-2.5 py-1 text-xs" : "px-3.5 py-1.5 text-sm",
            value === opt.value
              ? "bg-card text-fg shadow-sm"
              : "text-fg-muted hover:text-fg"
          )}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}
