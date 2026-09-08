import type { ComponentType } from "react";
import { IconFlagCop } from "@pagos/components/ui/icons/icon-flag-cop";
import { IconFlagEur } from "@pagos/components/ui/icons/icon-flag-eur";
import { IconFlagUsd } from "@pagos/components/ui/icons/icon-flag-usd";

export interface CurrencyOption {
  code: string;
  label: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
}

export const currencies: CurrencyOption[] = [
  { code: "COP", label: "Pesos Colombianos", Icon: IconFlagCop },
  { code: "USD", label: "Dólares", Icon: IconFlagUsd },
  { code: "EUR", label: "Euros", Icon: IconFlagEur },
];