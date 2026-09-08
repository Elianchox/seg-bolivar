import { HeaderDesktop } from "@pagos/components/layout/header/header-desktop";
import { HeaderMobile } from "@pagos/components/layout/header/header-mobile";

export function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop className="hidden md:block" />
    </>
  );
}