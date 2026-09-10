"use client";

import { useEffect, useId, useRef } from "react";
import type { ReactNode } from "react";
import { Typography } from "@davivienda-pagos/components/ui/typography";

interface ModalProps {
  open: boolean;
  title: string;
  onClose: () => void;
  footer?: ReactNode;
  children?: ReactNode;
  width?: number;
}

export function Modal({
  open,
  title,
  onClose,
  footer,
  children,
  width = 520,
}: ModalProps) {
  const titleId = useId();
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const previousFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!open) return;

    previousFocusRef.current = document.activeElement as HTMLElement | null;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    closeButtonRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
      previousFocusRef.current?.focus();
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      tabIndex={-1}
      role="dialog"
      aria-modal="true"
      aria-labelledby={titleId}
      className="fixed inset-0 z-[1000] overflow-y-auto"
    >
      <div className="fixed inset-0 bg-[rgba(0,0,0,0.45)]" onClick={onClose} />
      <div className="flex min-h-full items-start justify-center px-2 pt-[100px]">
        <div
          className="relative w-full rounded-[4px] bg-surface shadow-[0_0_35px_-5px_rgba(0,0,0,0.15)]"
          style={{ maxWidth: width }}
        >
          <button
            ref={closeButtonRef}
            type="button"
            aria-label="Close"
            onClick={onClose}
            className="absolute right-0 top-0 flex h-14 w-14 items-center justify-center text-text-muted transition-colors hover:text-text"
          >
            <svg
              viewBox="64 64 896 896"
              focusable="false"
              width="1em"
              height="1em"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M563.8 512l262.5-312.9c4.4-5.2.7-13.1-6.1-13.1h-79.8c-4.7 0-9.2 2.1-12.3 5.7L511.6 449.8 295.1 191.7c-3-3.6-7.5-5.7-12.3-5.7H203c-6.8 0-10.5 7.9-6.1 13.1L459.4 512 196.9 824.9A7.95 7.95 0 0 0 203 838h79.8c4.7 0 9.2-2.1 12.3-5.7l216.5-258.1 216.5 258.1c3 3.6 7.5 5.7 12.3 5.7h79.8c6.8 0 10.5-7.9 6.1-13.1L563.8 512z" />
            </svg>
          </button>
          <div className="border-b border-border px-6 py-4">
            <Typography
              as="h2"
              variant="title"
              id={titleId}
              className="font-bold! leading-[22px]!"
            >
              {title}
            </Typography>
          </div>
          {children ? (
            <div className="px-6 py-6 text-[14px] leading-[21px] text-text">{children}</div>
          ) : null}
          {footer ? (
            <div className="flex justify-end gap-2 border-t border-border px-4 py-4">
              {footer}
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}