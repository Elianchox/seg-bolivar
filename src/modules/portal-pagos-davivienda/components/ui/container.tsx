import type { ComponentPropsWithoutRef } from "react";

type ContainerProps = ComponentPropsWithoutRef<"div">;

export function Container({ className = "", ...rest }: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full px-[15px] min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px] ${className}`}
      {...rest}
    />
  );
}