import type { IconProps } from "./types";

export function IconFlagCop({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <path d="M0 12C0 5.37281 5.37281 0 12 0C18.6272 0 24 5.37281 24 12L12 13.0434L0 12Z" fill="#FFDA44" />
      <path d="M1.60596 18.0001C3.68064 21.587 7.55861 24.0001 12 24.0001C16.4414 24.0001 20.3194 21.587 22.3941 18.0001L12 17.2173L1.60596 18.0001Z" fill="#D80027" />
      <path d="M22.3941 18C23.415 16.2352 24 14.1858 24 12H0C0 14.1858 0.584531 16.2352 1.60594 18H22.3945H22.3941Z" fill="#0052B4" />
    </svg>
  );
}