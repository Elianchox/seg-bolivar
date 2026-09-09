import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

export function Input({ className = "", ...rest }: InputProps) {
  return (
    <input
      className={`h-8 w-full rounded-[4px] border border-border bg-surface px-[13px] pt-[6px] pb-[4px] text-[14px] leading-8 text-text outline-none transition-colors duration-300 placeholder:text-text-disabled hover:border-[#8f9ba6] focus:border-[#a8aeb3] focus:shadow-[0_0_0_2px_rgba(143,155,166,0.2)] ${className}`}
      {...rest}
    />
  );
}