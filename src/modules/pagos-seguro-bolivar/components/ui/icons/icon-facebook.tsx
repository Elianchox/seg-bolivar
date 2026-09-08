import type { IconProps } from "./types";

export function IconFacebook({ className = "", size = 32 }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 30 30"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <circle cx="15" cy="15" r="15" fill="#333E33"/>
      <path fillRule="evenodd" clipRule="evenodd" d="M16.1642 23.2589V14.6287H18.4618L18.7663 11.6547H16.1642L16.1681 10.1661C16.1681 9.39047 16.2392 8.97485 17.3137 8.97485H18.75V6.00049H16.4521C13.692 6.00049 12.7205 7.44321 12.7205 9.86941V11.655H11V14.629H12.7205V23.2589H16.1642Z" fill="#EADEB3"/>
    </svg>
  );
}
