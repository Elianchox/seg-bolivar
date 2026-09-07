import type { IconProps } from "./types";

export function IconArrowBottom({
  className = "",
  width = 18,
  height = 10,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 18 10"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="M16.5 1.25L9 8.75L1.5 1.25" />
    </svg>
  );
}