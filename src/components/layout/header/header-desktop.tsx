import { bottomNav, topLinks } from "@/constants/nav";
import { ContactDropdown } from "@/components/layout/header/contact-dropdown";
import { CurrencySelector } from "@/components/layout/header/currency-selector";
import { LanguageSelector } from "@/components/layout/header/language-selector";
import { SearchBar } from "@/components/layout/header/search-bar";
import { IconCalculator } from "@/components/ui/icons/icon-calculator";
import { IconFairGreen } from "@/components/ui/icons/icon-fair-green";
import { IconGlobe } from "@/components/ui/icons/icon-globe";
import { IconLogo } from "@/components/ui/icons/icon-logo";

interface HeaderDesktopProps {
  className?: string;
}

export function HeaderDesktop({ className = "" }: HeaderDesktopProps) {
  return (
    <header className={className}>
      <div className="bg-surface-muted py-[4px]">
        <div className="mx-auto max-w-[1320px] px-3">
          <div className="flex items-center justify-between">
            <nav>
              <ul className="flex gap-[10px]">
                {topLinks.map(({ label, href }) => (
                  <li key={label} className="mr-4 border-b-2 border-transparent last:mr-0">
                    <a
                      href={href}
                      className="text-[10px] font-semibold uppercase text-ink transition-all duration-300 hover:border-b-[3px] hover:border-cream"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <LanguageSelector variant="desktop" />
          </div>
        </div>
      </div>

      <div className="bg-surface pt-[15px] shadow-[0_4px_12px_rgba(0,0,0,0.08)]">
        <div className="mx-auto max-w-[1320px] px-3">
          <div className="flex items-center justify-between gap-4">
            <a
              href="#"
              aria-label="Logo Constructora Bolivar"
              className="w-[8.333%] shrink-0"
            >
              <IconLogo className="h-[108px] w-full" />
            </a>
            <div className="min-w-0 flex-1">
              <div className="mb-3 flex items-center gap-5 pl-4">
                <SearchBar
                  className="min-w-0 flex-1"
                />
                <ul className="flex shrink-0 items-center gap-4 text-center">
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 rounded-[25px] border border-brand-dark px-[12.8px] py-[12.8px] text-[14px] font-bold leading-[14px] tracking-[-0.098px] text-brand-dark max-[1399px]:border-0 max-[1399px]:text-[length:0]"
                    >
                      Cómpranos desde el exterior
                      <IconGlobe size={24} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="flex items-center justify-center gap-2 text-[14px] font-bold leading-[14px] tracking-[-0.098px] text-brand-dark max-[1399px]:text-[length:0]"
                    >
                      Simula tu financiación
                      <IconCalculator className="h-[28px] w-6" />
                    </a>
                  </li>
                  <li>
                    <CurrencySelector variant="desktop" />
                  </li>
                  <li>
                    <ContactDropdown />
                  </li>
                </ul>
              </div>
              <div className="pb-[15px] pl-4">
                <ul className="flex items-center justify-between">
                  {bottomNav.map(({ label, href, active }) => (
                    <li key={label} className="py-2 flex">
                      <a
                        href={href}
                        className={`w-full text-center px-2 pb-3 text-[15px] font-medium text-ink transition-all duration-300 hover:border-b-4 hover:border-cream hover:font-bold ${
                          active ? "border-b-4 border-cream font-bold" : ""
                        }`}
                      >
                        {label}
                      </a>
                    </li>
                  ))}
                  <li className="w-[160px] rounded-[25px] bg-[#00A24B] px-[18px] py-[12px] shadow-[0_9px_11.8px_rgba(45,99,69,0.53)]">
                    <a
                      href="#"
                      className="flex items-center justify-evenly gap-2 font-bold text-white"
                    >
                      <IconFairGreen size={24} />
                      Feria Verde
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}