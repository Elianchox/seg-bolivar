import type { IconProps } from "./types";

export function IconBed({ className = "", size = 24 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 25 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M7.5 13C9.16 13 10.5 11.66 10.5 10C10.5 8.34 9.16 7 7.5 7C5.84 7 4.5 8.34 4.5 10C4.5 11.66 5.84 13 7.5 13ZM7.5 8C8.6 8 9.5 8.9 9.5 10C9.5 11.1 8.6 12 7.5 12C6.4 12 5.5 11.1 5.5 10C5.5 8.9 6.4 8 7.5 8ZM20.5 7H12C11.72 7 11.5 7.22 11.5 7.5V14.5H2.5V5.5C2.5 5.22 2.28 5 2 5C1.72 5 1.5 5.22 1.5 5.5V19.5C1.5 19.78 1.72 20 2 20C2.28 20 2.5 19.78 2.5 19.5V15.5H22.5V19.5C22.5 19.78 22.72 20 23 20C23.28 20 23.5 19.78 23.5 19.5V10C23.5 8.34 22.16 7 20.5 7ZM22.5 14.5H12.5V8H20.5C21.6 8 22.5 8.9 22.5 10V14.5Z" />
    </svg>
  );
}