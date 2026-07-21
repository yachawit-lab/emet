"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Rows3,
  CalendarDays,
  ChartNoAxesCombined,
  Plus,
  BookOpen,
  RotateCcw,
} from "lucide-react";
import { cn } from "@/lib/cn";
import { useTradeStore } from "@/store/trade-store";
import { useFilterStore } from "@/store/filter-store";

const NAV_ITEMS = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/trades", label: "Trade Log", icon: Rows3 },
  { href: "/calendar", label: "Calendar", icon: CalendarDays },
  { href: "/analytics", label: "Analytics", icon: ChartNoAxesCombined },
];

export function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const pathname = usePathname();
  return (
    <nav className="flex flex-col gap-1">
      {NAV_ITEMS.map((item) => {
        const active =
          item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);
        const Icon = item.icon;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavigate}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
              active
                ? "bg-accent-soft text-accent-strong"
                : "text-fg-muted hover:text-fg hover:bg-panel"
            )}
          >
            <Icon size={17} strokeWidth={active ? 2.25 : 1.75} />
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function ResetDemoButton({ className }: { className?: string }) {
  const resetDemo = useTradeStore((s) => s.resetDemo);
  const clearFilters = useFilterStore((s) => s.clearAll);

  function handleReset() {
    if (
      confirm(
        "Reset demo data? This regenerates the seeded trades and discards any trades you've added or edited."
      )
    ) {
      resetDemo();
      clearFilters();
    }
  }

  return (
    <button
      onClick={handleReset}
      className={cn(
        "flex items-center justify-center gap-2 rounded-full border border-border bg-card text-fg-muted text-sm font-medium px-4 py-2.5 hover:text-fg hover:bg-panel transition-colors",
        className
      )}
    >
      <RotateCcw size={15} />
      Reset demo
    </button>
  );
}

export function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col w-60 shrink-0 border-r border-border bg-card/60 px-4 py-6 sticky top-0 h-screen">
      <Link href="/" className="flex items-center gap-2 px-2 mb-8">
        <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-white">
          <BookOpen size={16} />
        </div>
        <span className="font-display text-lg tracking-tight">Ledger</span>
      </Link>
      <NavLinks />
      <div className="mt-auto pt-6 space-y-2">
        <Link
          href="/trades/new"
          className="flex items-center justify-center gap-2 rounded-full bg-accent text-white text-sm font-medium px-4 py-2.5 hover:bg-accent-strong transition-colors"
        >
          <Plus size={16} />
          Log trade
        </Link>
        <ResetDemoButton className="w-full" />
      </div>
    </aside>
  );
}
