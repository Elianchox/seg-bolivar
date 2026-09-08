import type { IconProps } from "./types";

export function IconFairGreen({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.05 8.05c-2.73 2.73-2.73 7.17 0 9.9C7.42 19.32 9.21 20 11 20s3.58-.68 4.95-2.05C19.94 13.94 22 8.18 22 2c-6.18 0-11.94 2.06-13.95 4.05Zm9.9 9.9C14.8 19.15 13.06 20 11 20c-.5 0-1-.05-1.48-.14l6.47-6.47c.39-.39.39-1.02 0-1.41s-1.02-.39-1.41 0l-6.47 6.47C8.05 17.5 8 17 8 16.5c0-2.06.85-3.8 2.05-4.95 1.77-1.77 4.37-2.75 7.17-2.91C16.55 10.42 15.81 12.12 15 13l-3.5 3.5 1.41 1.41L15 14.41c.46-.46.87-1.02 1.19-1.66.38 1.4.22 3.03-.64 4.2Z" />
    </svg>
  );
}