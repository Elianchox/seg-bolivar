"use client";

import { useCallback, useEffect, useRef, useState } from "react";

export interface CarouselBreakpoint {
  minWidth: number;
  value: number;
}

export interface CarouselPerViewConfig {
  base: number;
  breakpoints: CarouselBreakpoint[];
}

interface UseCarouselOptions {
  itemCount: number;
  gap: number;
  perView: CarouselPerViewConfig;
}

export interface CarouselHandlers {
  onPointerDown: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerMove: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerUp: (event: React.PointerEvent<HTMLDivElement>) => void;
  onPointerCancel: (event: React.PointerEvent<HTMLDivElement>) => void;
  onClickCapture: (event: React.MouseEvent<HTMLDivElement>) => void;
  onDragStart: (event: React.DragEvent<HTMLDivElement>) => void;
}

export interface UseCarouselReturn {
  viewportRef: React.RefObject<HTMLDivElement | null>;
  trackRef: React.RefObject<HTMLDivElement | null>;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  dragging: boolean;
  transform: string;
  cellWidth: number;
  currentIndex: number;
  maxIndex: number;
  canPrev: boolean;
  canNext: boolean;
  handlers: CarouselHandlers;
}

export function useCarousel({
  itemCount,
  gap,
  perView: config,
}: UseCarouselOptions): UseCarouselReturn {
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [perView, setPerView] = useState(config.base);
  const [trackWidth, setTrackWidth] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [delta, setDelta] = useState(0);
  const dragState = useRef({ startX: 0, active: false, moved: false });
  const deltaRef = useRef(0);

  useEffect(() => {
    const mqls = config.breakpoints.map((bp) => ({
      bp,
      mql: window.matchMedia(`(min-width: ${bp.minWidth}px)`),
    }));
    const update = () => {
      let value = config.base;
      for (const { bp, mql } of mqls) {
        if (mql.matches) value = Math.max(value, bp.value);
      }
      setPerView(value);
    };
    update();
    mqls.forEach(({ mql }) => mql.addEventListener("change", update));
    return () => mqls.forEach(({ mql }) => mql.removeEventListener("change", update));
  }, [config]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;
    const update = () => setTrackWidth(el.clientWidth);
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const cellWidth =
    trackWidth > 0 ? (trackWidth - (perView - 1) * gap) / perView : 0;
  const cardStep = cellWidth + gap;
  const maxIndex = Math.max(0, itemCount - perView);
  const currentIndex = Math.min(index, maxIndex);

  const mapDelta = useCallback(
    (raw: number) => {
      const edgeLimit = Math.max(60, trackWidth * 0.3);
      const overStart = currentIndex === 0 && raw > 0;
      const overEnd = currentIndex === maxIndex && raw < 0;
      const limit = overStart || overEnd ? edgeLimit : trackWidth * 0.5;
      const abs = Math.abs(raw);
      if (abs > limit) {
        return (raw > 0 ? 1 : -1) * (limit + (abs - limit) * 0.5);
      }
      return raw;
    },
    [trackWidth, currentIndex, maxIndex],
  );

  const onPointerDown = useCallback((event: React.PointerEvent<HTMLDivElement>) => {
    if (event.pointerType === "mouse" && event.button !== 0) return;
    dragState.current = { startX: event.clientX, active: true, moved: false };
    deltaRef.current = 0;
    setDelta(0);
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
  }, []);

  const onPointerMove = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragState.current;
      if (!drag.active) return;
      const raw = event.clientX - drag.startX;
      if (Math.abs(raw) > 4) drag.moved = true;
      const mapped = mapDelta(raw);
      deltaRef.current = mapped;
      setDelta(mapped);
    },
    [mapDelta],
  );

  const endDrag = useCallback(
    (event: React.PointerEvent<HTMLDivElement>) => {
      const drag = dragState.current;
      if (!drag.active) return;
      drag.active = false;
      if (event.currentTarget.hasPointerCapture(event.pointerId)) {
        event.currentTarget.releasePointerCapture(event.pointerId);
      }
      const step = cardStep || 1;
      const cardsMoved = Math.round(deltaRef.current / step);
      const target = Math.max(0, Math.min(maxIndex, currentIndex - cardsMoved));
      setDelta(0);
      setDragging(false);
      setIndex(target);
    },
    [cardStep, currentIndex, maxIndex],
  );

  const onPointerCancel = useCallback(() => {
    dragState.current.active = false;
    dragState.current.moved = false;
    deltaRef.current = 0;
    setDelta(0);
    setDragging(false);
  }, []);

  const onClickCapture = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
    if (dragState.current.moved) {
      event.preventDefault();
      event.stopPropagation();
      dragState.current.moved = false;
    }
  }, []);

  const onDragStart = useCallback((event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  }, []);

  const transform = `translateX(${-currentIndex * cardStep + delta}px)`;

  return {
    viewportRef,
    trackRef,
    setIndex,
    dragging,
    transform,
    cellWidth,
    currentIndex,
    maxIndex,
    canPrev: currentIndex > 0,
    canNext: currentIndex < maxIndex,
    handlers: {
      onPointerDown,
      onPointerMove,
      onPointerUp: endDrag,
      onPointerCancel,
      onClickCapture,
      onDragStart,
    },
  };
}