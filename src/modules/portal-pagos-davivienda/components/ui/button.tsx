import type { ComponentPropsWithoutRef } from "react";

interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  variant?: "primary" | "default";
}

const base =
  "inline-flex h-8 items-center justify-center rounded-[4px] border px-[15px] text-[14px] leading-[22px] transition-all duration-300 disabled:cursor-not-allowed";

const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
  primary:
    "border-brand bg-brand text-white shadow-[0_2px_0_rgba(0,0,0,0.045)] hover:border-brand-hover hover:bg-brand-hover active:border-brand-active active:bg-brand-active disabled:border-border disabled:bg-surface-muted disabled:text-text-disabled disabled:shadow-none",
  default:
    "border-border bg-surface text-text shadow-[0_2px_0_rgba(0,0,0,0.016)] hover:border-brand-hover hover:text-brand-hover active:border-brand-active active:text-brand-active",
};

export function Button({
  variant = "default",
  type = "button",
  className = "",
  ...rest
}: ButtonProps) {
  return (
    <button
      type={type}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    />
  );
}