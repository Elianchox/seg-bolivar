"use client";

import { IconChevronLeft } from "@/components/ui/icons/icon-chevron-left";
import { IconChevronRight } from "@/components/ui/icons/icon-chevron-right";
import { useCarousel } from "@/hooks/use-carousel";
import type { CarouselPerViewConfig } from "@/hooks/use-carousel";
import type { ReactNode } from "react";

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  perView: CarouselPerViewConfig;
  gap: number;
  gapClassName: string;
  prevInsetClassName?: string;
  nextInsetClassName?: string;
  arrowColorClassName?: string;
  showDots?: boolean;
  dotWidthClassName?: string;
}

export function Carousel<T>({
  items,
  renderItem,
  perView,
  gap,
  gapClassName,
  prevInsetClassName = "relative left-[-5rem]",
  nextInsetClassName = "relative right-[-5rem]",
  arrowColorClassName = "text-brand-dark",
  showDots = true,
  dotWidthClassName = "w-[38px]",
}: CarouselProps<T>) {
  const {
    viewportRef,
    trackRef,
    setIndex,
    dragging,
    transform,
    cellWidth,
    currentIndex,
    maxIndex,
    canPrev,
    canNext,
    handlers,
  } = useCarousel({
    itemCount: items.length,
    gap,
    perView,
  });

  return (
    <>
      <div className="relative">
        <div ref={viewportRef} className="overflow-hidden">
          <div
            ref={trackRef}
            {...handlers}
            className={`flex touch-pan-y ${gapClassName} ${
              dragging ? "select-none cursor-grabbing" : "cursor-grab"
            } ${
              dragging
                ? ""
                : "transition-transform duration-[250ms] ease-in-out"
            }`}
            style={{ transform }}
          >
            {items.map((item, index) => (
              <div
                key={index}
                className="shrink-0"
                style={{ width: cellWidth }}
              >
                {renderItem(item, index)}
              </div>
            ))}
          </div>
        </div>
        <div className="pointer-events-none absolute inset-x-0 top-[40%] z-[9] mx-auto hidden w-[95%] -translate-y-1/2 md:block">
          {canPrev && (
            <button
              type="button"
              onClick={() => setIndex(currentIndex - 1)}
              aria-label="Anterior"
              className={`pointer-events-auto float-left flex h-9 w-9 items-center justify-center rounded-[12px] bg-surface ${arrowColorClassName} shadow-[0_6px_12px_0_#6C757D33] outline-none ${prevInsetClassName}`}
            >
              <IconChevronLeft size={14} />
            </button>
          )}
          {canNext && (
            <button
              type="button"
              onClick={() => setIndex(currentIndex + 1)}
              aria-label="Siguiente"
              className={`pointer-events-auto float-right flex h-9 w-9 items-center justify-center rounded-[12px] bg-surface ${arrowColorClassName} shadow-[0_6px_12px_0_#6C757D33] outline-none ${nextInsetClassName}`}
            >
              <IconChevronRight size={14} />
            </button>
          )}
        </div>
      </div>
      {showDots && (
        <div className="relative flex justify-center gap-2 pt-4">
          {Array.from({ length: maxIndex + 1 }).map((_, dotIndex) => (
            <button
              key={dotIndex}
              type="button"
              onClick={() => setIndex(dotIndex)}
              aria-label={`Ir a la posición ${dotIndex + 1}`}
              aria-current={dotIndex === currentIndex}
              className="outline-none"
            >
              <span
                className={`block h-[3px] ${dotWidthClassName} ${
                  dotIndex === currentIndex ? "bg-brand" : "bg-brand/30"
                }`}
              />
            </button>
          ))}
        </div>
      )}
    </>
  );
}