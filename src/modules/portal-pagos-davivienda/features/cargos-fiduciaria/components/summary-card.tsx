import type { ReactNode } from "react";

interface SummaryCardProps {
  children: ReactNode;
  className?: string;
}

export function SummaryCard({ children, className = "" }: SummaryCardProps) {
  return (
    <div
      className={`bg-surface px-2 py-2 shadow-[0_4px_15px_rgba(0,0,0,0.15)] min-[480px]:px-3 min-[480px]:py-3 min-[576px]:px-4 min-[576px]:py-4 min-[768px]:px-6 min-[768px]:py-6 min-[992px]:px-7 min-[1200px]:px-6 ${className}`}
    >
      {children}
    </div>
  );
}
