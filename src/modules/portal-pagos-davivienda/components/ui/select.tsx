import type { ComponentPropsWithoutRef } from "react";
import { IconArrowDown } from "@davivienda-pagos/components/ui/icons/arrow-down";

export interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends ComponentPropsWithoutRef<"select"> {
  options: SelectOption[];
  placeholder?: string;
  hasError?: boolean;
}

export function Select({
  options,
  placeholder,
  hasError = false,
  className = "",
  ...rest
}: SelectProps) {
  return (
    <div className="relative">
      <select
        aria-invalid={hasError || undefined}
        className={`h-8 w-full cursor-pointer appearance-none rounded-[4px] border bg-surface pl-[11px] pr-[24px] text-[14px] leading-8 text-text outline-none transition-colors duration-300 ${
          hasError
            ? "border-error hover:border-error focus:border-error-focus focus:shadow-[0_0_0_2px_rgba(251,67,74,0.2)]"
            : "border-border hover:border-[#8f9ba6] focus:border-[#a8aeb3] focus:shadow-[0_0_0_2px_rgba(143,155,166,0.2)]"
        } ${className}`}
        {...rest}
      >
        {placeholder && (
          <option value="" disabled>
            {placeholder}
          </option>
        )}
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
      <IconArrowDown className="pointer-events-none absolute right-[11px] top-1/2 -translate-y-1/2 text-[12px] text-text-muted" />
    </div>
  );
}