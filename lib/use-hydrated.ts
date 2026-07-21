"use client";

import { useEffect, useState } from "react";

/**
 * Returns false on the server and on the client's first render (so they match),
 * then flips to true after mount. Gates any UI that depends on localStorage-backed
 * state (trades, filters, view toggles) so we never render mismatched SSR/client HTML.
 */
export function useHydrated(): boolean {
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- intentional one-shot mount flag to gate SSR/client mismatch
    setHydrated(true);
  }, []);
  return hydrated;
}
