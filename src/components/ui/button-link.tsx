import type { ComponentPropsWithoutRef } from "react";

type ButtonLinkVariant = "white" | "primary";

interface ButtonLinkProps extends ComponentPropsWithoutRef<"a"> {
  href: string;
  variant?: ButtonLinkVariant;
}

const variants: Record<ButtonLinkVariant, string> = {
  white: "bg-surface text-brand-dark rounded-[30px] px-8 py-4 text-base",
  primary: "bg-brand-dark text-white rounded-[30px] px-8 py-4 text-base font-semibold leading-[16px]!",
};

export function ButtonLink({
  href,
  variant = "white",
  className = "",
  children,
  ...rest
}: ButtonLinkProps) {
  return (
    <a href={href} className={`${variants[variant]} ${className}`} {...rest}>
      {children}
    </a>
  );
}