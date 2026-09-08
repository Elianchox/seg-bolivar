import type { IconProps } from "./types";

export function IconChevronDown({
  className = "",
  id,
  size = 24,
  strokeWidth = 2,
}: IconProps) {
  return (
    <svg
      id={id}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}