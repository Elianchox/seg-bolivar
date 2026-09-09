import type { ComponentPropsWithoutRef } from "react";

type InputProps = ComponentPropsWithoutRef<"input">;

export function Input({ className = "", ...rest }: InputProps) {
  return (
    <input
      className={`h-8 w-full rounded-[4px] border border-border bg-surface px-[13px] py-[6px] text-[14px] leading-[22px] text-text outline-none transition-colors duration-300 placeholder:text-text-disabled hover:border-brand/60 focus:border-brand ${className}`}
      {...rest}
    />
  );
}