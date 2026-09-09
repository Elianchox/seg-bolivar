"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

interface TooltipProps {
  title: string;
  content: string;
  children: ReactNode;
}

const EDGE_MARGIN = 8;

export function Tooltip({ title, content, children }: TooltipProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLSpanElement>(null);
  const popRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!open) return;

    const clamp = () => {
      const pop = popRef.current;
      if (!pop) return;
      pop.style.marginLeft = "";
      pop.style.marginTop = "";
      const r = pop.getBoundingClientRect();
      const dx =
        r.left < EDGE_MARGIN
          ? EDGE_MARGIN - r.left
          : r.right > window.innerWidth - EDGE_MARGIN
            ? window.innerWidth - EDGE_MARGIN - r.right
            : 0;
      if (dx) pop.style.marginLeft = `${dx}px`;
      const r2 = pop.getBoundingClientRect();
      if (r2.top < EDGE_MARGIN) pop.style.marginTop = `${EDGE_MARGIN - r2.top}px`;
    };

    const onDocClick = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    clamp();
    window.addEventListener("resize", clamp);
    document.addEventListener("mousedown", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", clamp);
      document.removeEventListener("mousedown", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <span ref={rootRef} className="relative inline-flex align-middle">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-label={`Más información sobre ${title}`}
        aria-expanded={open}
        className="contents"
      >
        {children}
      </button>
      {open && (
        <span
          ref={popRef}
          role="tooltip"
          className="absolute bottom-full left-1/2 z-[1030] w-max -translate-x-1/2 pb-[10px]"
        >
          <span className="block max-w-[calc(100vw-2rem)] rounded-[4px] bg-surface shadow-[0_10px_35px_-5px_rgba(0,0,0,0.15)]">
            <span className="block min-w-[177px] border-b border-border px-4 pt-[5px] pb-[4px] text-[14px] leading-[21px] font-medium text-ink">
              {title}
            </span>
            <span className="block px-4 py-3 text-[14px] leading-[21px] text-text">
              {content}
            </span>
          </span>
          <span className="absolute bottom-[6.2px] left-1/2 h-[8.485px] w-[8.485px] border-[4.24px] border-t-transparent border-l-transparent border-r-surface border-b-surface [transform:translateX(-50%)_rotate(45deg)] shadow-[3px_3px_7px_rgba(0,0,0,0.07)]" />
        </span>
      )}
    </span>
  );
}