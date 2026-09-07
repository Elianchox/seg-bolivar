import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant =
  | "title"
  | "heading"
  | "subheading"
  | "body"
  | "body-sm"
  | "caption"
  | "label"
  | "section-title"
  | "overline"
  | "hero"
  | "steps-title"
  | "payment-title";

const base = "antialiased";

const variants: Record<Variant, string> = {
  title: "text-4xl font-bold tracking-tight",
  heading: "text-3xl font-semibold tracking-tight",
  subheading: "text-xl font-medium",
  body: "text-base leading-relaxed",
  "body-sm": "text-sm leading-relaxed",
  caption: "text-xs text-text-muted",
  label: "text-sm font-medium",
  "section-title": "text-2xl font-bold leading-6",
  overline: "text-xs font-semibold uppercase",
  hero: "text-[38px] font-bold leading-[44px] tracking-[-0.5px] md:text-[46px] md:leading-[52px]",
  "steps-title":
    "text-[28px] font-bold leading-[30px] tracking-[-0.5px] text-text md:text-[32px] md:leading-[32px] md:tracking-[-0.16px]",
  "payment-title":
    "text-[38px] font-bold leading-[44px] tracking-[-0.5px] text-text md:text-[32px] md:leading-[32px] md:tracking-[-0.16px]",
};

interface TypographyOwnProps {
  variant?: Variant;
  className?: string;
  children: ReactNode;
}

type TypographyProps<T extends ElementType> = {
  as?: T;
} & TypographyOwnProps &
  Omit<ComponentPropsWithoutRef<T>, keyof TypographyOwnProps | "as">;

export function Typography<T extends ElementType = "p">({
  as,
  variant = "body",
  className = "",
  children,
  ...rest
}: TypographyProps<T>) {
  const Tag = (as ?? "p") as ElementType;
  return (
    <Tag className={`${base} ${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}