import type { IconProps } from "./types";

export function IconArea({ className = "", size = 24, strokeWidth = 1 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 25"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeMiterlimit={10}
      className={className}
      aria-hidden="true"
    >
      <path d="M15.9093 8.52588H0.5V23.9988H15.9093V8.52588Z" />
      <path d="M0.5 2.54297H15.9093" />
      <path d="M21.9707 8.52588V23.9988" />
      <path d="M0.5 4.95215V0.133789" />
      <path d="M15.9092 5.08685V0" />
      <path d="M24.5034 8.52588H19.4375" />
      <path d="M24.5034 24H19.4375" />
    </svg>
  );
}