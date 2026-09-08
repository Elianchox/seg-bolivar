import { IconArrowDown } from "@pagos/components/ui/icons/icon-arrow-down";
import { languages } from "@pagos/constants/languages";

interface LanguageSelectorProps {
  variant?: "mobile" | "desktop";
}

export function LanguageSelector({ variant = "mobile" }: LanguageSelectorProps) {
  const isDesktop = variant === "desktop";

  return (
    <div
      id={isDesktop ? "customSelect" : "customSelectMobile"}
      translate="no"
      className={
        isDesktop
          ? "relative inline-flex cursor-pointer items-center gap-2 text-xs"
          : "flex w-full max-w-[180px] cursor-pointer items-center justify-end rounded-[8px] bg-surface-muted px-3 py-2 text-xs text-brand-dark"
      }
    >
      <span
        id={isDesktop ? "selectedLanguage" : "selectedLanguageMobile"}
        className="text-text"
      >
        Idioma: Español
      </span>
      <IconArrowDown
        id={isDesktop ? "arrowIcon" : "arrowIconMobile"}
        className={isDesktop ? "text-brand" : "mx-2 text-brand"}
      />
      <ul
        id={isDesktop ? "dropdownMenu" : "dropdownMenuMobile"}
        className={
          isDesktop
            ? "absolute right-0 top-full z-[99999] mt-[5px] hidden min-w-[150px] rounded border border-[#ccc] bg-surface py-1 shadow-[0_2px_8px_rgba(0,0,0,0.15)]"
            : "absolute right-0 top-full z-[9999999999] mt-1 hidden w-[200px] rounded-lg bg-surface shadow-[0_4px_6px_rgba(0,0,0,0.2)]"
        }
      >
        {languages.map(({ value, label }) => (
          <li
            key={value}
            data-value={value}
            className="cursor-pointer p-2.5 hover:bg-surface-muted"
          >
            {label}
          </li>
        ))}
      </ul>
    </div>
  );
}