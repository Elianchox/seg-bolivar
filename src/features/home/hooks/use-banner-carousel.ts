"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseBannerCarouselOptions {
  slideCount: number;
  intervalMs?: number;
}

interface UseBannerCarouselReturn {
  index: number;
  goTo: (next: number) => void;
  goNext: () => void;
  goPrev: () => void;
  paused: boolean;
  setPaused: React.Dispatch<React.SetStateAction<boolean>>;
}

export function useBannerCarousel({
  slideCount,
  intervalMs = 5000,
}: UseBannerCarouselOptions): UseBannerCarouselReturn {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  const goTo = useCallback(
    (next: number) => {
      setIndex((next + slideCount) % slideCount);
    },
    [slideCount],
  );

  const goNext = useCallback(() => {
    goTo(index + 1);
  }, [goTo, index]);

  const goPrev = useCallback(() => {
    goTo(index - 1);
  }, [goTo, index]);

  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    if (paused) return;
    timerRef.current = setInterval(goNext, intervalMs);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [goNext, paused, intervalMs]);

  return { index, goTo, goNext, goPrev, paused, setPaused };
}