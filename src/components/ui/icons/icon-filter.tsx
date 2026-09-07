import type { IconProps } from "./types";

export function IconFilter({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.5 6.5h15a1 1 0 1 0 0-2h-15a1 1 0 0 0 0 2Zm3 4.5h9a1 1 0 1 0 0-2h-9a1 1 0 0 0 0 2Zm3 6.5h3a1 1 0 1 0 0-2h-3a1 1 0 0 0 0 2Z" />
    </svg>
  );
}
