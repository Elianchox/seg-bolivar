"use client";

import { IconChevronLeft } from "@pagos/components/ui/icons/icon-chevron-left";
import { IconChevronRight } from "@pagos/components/ui/icons/icon-chevron-right";

interface PaginatorProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Paginator({ page, totalPages, onPageChange }: PaginatorProps) {
  const current = page + 1;
  const canPrev = page > 0;
  const canNext = page < totalPages - 1;

  if (totalPages === 0) return null;

  return (
    <div className="flex items-center justify-center gap-5">
      <a
        aria-disabled={!canPrev}
        aria-label="Página anterior"
        className={`flex h-12 w-12 items-center justify-center rounded-[30px] ${
          canPrev
            ? "cursor-pointer bg-[#d6f9e7] text-[#095636]"
            : "pointer-events-none bg-[#efecec] text-text-muted"
        }`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (canPrev) onPageChange(page - 1);
        }}
      >
        <IconChevronLeft size={22} />
      </a>
      <div className="hidden h-12 items-center justify-center gap-[5px] rounded-[50px] bg-[#efecec] p-2 md:flex">
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
          <a
            key={num}
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(num - 1);
            }}
            className={`flex h-9 w-9 items-center justify-center rounded-full text-center text-base leading-4 tracking-[0.08px] ${
              num === current
                ? "border border-[#095636] text-text-muted"
                : "text-text-muted"
            }`}
          >
            {num}
          </a>
        ))}
      </div>
      <a
        aria-disabled={!canNext}
        aria-label="Siguiente página"
        className={`flex h-12 w-12 items-center justify-center rounded-[30px] ${
          canNext
            ? "cursor-pointer bg-[#095636] text-white"
            : "pointer-events-none bg-[#efecec] text-text-muted"
        }`}
        href="#"
        onClick={(e) => {
          e.preventDefault();
          if (canNext) onPageChange(page + 1);
        }}
      >
        <IconChevronRight size={22} />
      </a>
    </div>
  );
}
