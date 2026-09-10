import type { ComponentPropsWithoutRef } from "react";

interface InputProps extends ComponentPropsWithoutRef<"input"> {
  hasError?: boolean;
}

export function Input({
  className = "",
  hasError = false,
  autoComplete = "off",
  ...rest
}: InputProps) {
  return (
    <input
      autoComplete={autoComplete}
      aria-invalid={hasError || undefined}
      className={`h-8 w-full rounded-[4px] border bg-surface px-[13px] pt-[6px] pb-[4px] text-[14px] leading-8 text-text outline-none transition-colors duration-300 placeholder:text-text-disabled ${
        hasError
          ? "border-error hover:border-error focus:border-error-focus focus:shadow-[0_0_0_2px_rgba(251,67,74,0.2)]"
          : "border-border hover:border-[#8f9ba6] focus:border-[#a8aeb3] focus:shadow-[0_0_0_2px_rgba(143,155,166,0.2)]"
      } ${className}`}
      {...rest}
    />
  );
}