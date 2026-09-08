import Image from "next/image";
import logo from "@pagos/assets/logo-constructora-mobile.png";
import { CurrencySelector } from "@pagos/components/layout/header/currency-selector";
import { LanguageSelector } from "@pagos/components/layout/header/language-selector";
import { MobileMenu } from "@pagos/components/layout/mobile-menu";
import { SearchBar } from "@pagos/components/layout/header/search-bar";

export function HeaderMobile() {
  return (
    <header className="bg-surface shadow-[0_4px_12px_rgba(0,0,0,0.08)] md:hidden">
      <div className="mb-2 flex items-center justify-end bg-surface-muted py-2">
        <div className="flex w-full justify-end px-3">
          <LanguageSelector />
        </div>
      </div>
      <div className="flex items-center justify-between gap-4 px-3">
        <a href="#" className="w-1/3 shrink-0">
          <Image
            src={logo}
            alt="Logo Constructora Bolivar"
            width={1125}
            height={512}
            className="h-auto w-full"
          />
        </a>
        <div className="flex items-center gap-0 md:gap-8">
          <CurrencySelector />
          <MobileMenu />
        </div>
      </div>
      <div className="px-3">
        <div className="py-[10px]" />
        <div className="flex items-center justify-between">
          <SearchBar />
        </div>
        <div className="py-[10px]" />
      </div>
    </header>
  );
}