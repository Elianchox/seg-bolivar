"use client";

import { useEffect, useState } from "react";

export function useDebouncedSearch(search: string, delay = 300): string {
  const [debounced, setDebounced] = useState(search);

  useEffect(() => {
    const timeout = setTimeout(() => setDebounced(search), delay);
    return () => clearTimeout(timeout);
  }, [search, delay]);

  return debounced;
}