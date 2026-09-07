import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...rest }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-3 bs-sm:max-w-[540px] bs-md:max-w-[720px] bs-lg:max-w-[960px] bs-xl:max-w-[1140px] bs-xxl:max-w-[1320px] ${className}`}
      {...rest}
    />
  );
}