"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, BookOpen, Plus } from "lucide-react";
import { Drawer } from "@/components/ui/Drawer";
import { NavLinks, ClearMockDataButton, ResetDemoButton } from "./Sidebar";

export function MobileTopBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="md:hidden sticky top-0 z-30 flex items-center justify-between border-b border-border bg-bg/90 backdrop-blur px-4 py-3">
      <Link href="/" className="flex items-center gap-2">
        <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-accent text-white">
          <BookOpen size={14} />
        </div>
        <span className="font-display text-base tracking-tight">Ledger</span>
      </Link>
      <div className="flex items-center gap-2">
        <Link
          href="/trades/new"
          className="flex items-center justify-center rounded-full bg-accent text-white p-2"
          aria-label="Log trade"
        >
          <Plus size={16} />
        </Link>
        <button
          onClick={() => setOpen(true)}
          className="rounded-full p-2 text-fg-muted hover:bg-panel"
          aria-label="Open navigation"
        >
          <Menu size={20} />
        </button>
      </div>
      <Drawer open={open} onClose={() => setOpen(false)} title="Ledger">
        <NavLinks onNavigate={() => setOpen(false)} />
        <ClearMockDataButton className="w-full mt-4" />
        <ResetDemoButton className="w-full mt-2" />
      </Drawer>
    </div>
  );
}
