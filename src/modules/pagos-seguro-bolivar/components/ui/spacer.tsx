export type SpacerSize = "xs" | "sm" | "md";

const spacerClasses: Record<SpacerSize, string> = {
  xs: "p-[5px]",
  sm: "p-[10px]",
  md: "p-[15px]",
};

interface SpacerProps {
  size: SpacerSize;
}

export function Spacer({ size }: SpacerProps) {
  return <div className={spacerClasses[size]} aria-hidden="true" />;
}