"use client";

import { Sidebar } from "./Sidebar";
import { MobileTopBar } from "./MobileTopBar";

export function AppShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 min-w-0 flex flex-col">
        <MobileTopBar />
        <main className="flex-1 min-w-0 px-4 py-6 md:px-8 md:py-8 max-w-[1400px] w-full mx-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
