import { HeaderDesktop } from "@/components/layout/header/header-desktop";
import { HeaderMobile } from "@/components/layout/header/header-mobile";

export function Header() {
  return (
    <>
      <HeaderMobile />
      <HeaderDesktop className="hidden md:block" />
    </>
  );
}