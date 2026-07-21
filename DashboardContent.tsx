"use client";

import { useHydrated } from "@/lib/use-hydrated";

export function HydrationGate({
  skeleton,
  children,
}: {
  skeleton: React.ReactNode;
  children: React.ReactNode;
}) {
  const hydrated = useHydrated();
  if (!hydrated) return <>{skeleton}</>;
  return <>{children}</>;
}
