import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type Variant = "title" | "heading" | "body" | "description";

const variants: Record<Variant, string> = {
  title: "text-[18px] font-semibold leading-[21px] text-heading",
  heading: "text-[14px] font-medium leading-[21px] text-ink",
  body: "text-[14px] leading-[21px] text-text",
  description: "text-[14px] leading-[26px] text-text",
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
    <Tag className={`${variants[variant]} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}