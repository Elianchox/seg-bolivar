import { IconChevronDown } from "@pagos/components/ui/icons/icon-chevron-down";
import { IconFlagCop } from "@pagos/components/ui/icons/icon-flag-cop";
import { currencies } from "@pagos/constants/currencies";

interface CurrencySelectorProps {
  variant?: "mobile" | "desktop";
}

export function CurrencySelector({ variant = "mobile" }: CurrencySelectorProps) {
  const isDesktop = variant === "desktop";

  return (
    <div className="relative">
      <button
        type="button"
        className={
          isDesktop
            ? "inline-flex h-12 items-center gap-1.5 rounded-[30px] px-[1.8rem] font-bold tracking-[-0.098px] text-brand-dark"
            : "inline-flex h-12 items-center gap-1.5 rounded-full px-1 md:px-[1.8rem] font-bold tracking-[-0.098px] text-brand-dark"
        }
      >
        <IconFlagCop size={24} />
        {isDesktop && <span className="text-base">$</span>}
        <span className="text-base">COP</span>
        <IconChevronDown size={14} />
      </button>
      <ul className="absolute right-0 top-full mt-0.5 hidden w-[222px] rounded-md border border-[#ced4da] bg-surface py-1 shadow-[0_6px_12px_rgba(108,117,125,0.20)]">
        {currencies.map(({ label, Icon }, index) => (
          <li key={label} className="px-4 py-2">
            <a
              className={`flex cursor-pointer items-center justify-start gap-2 ${
                index < currencies.length - 1 ? "border-b border-surface-muted pb-2" : ""
              }`}
            >
              <Icon size={24} />
              <span className="text-sm">{label}</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}