import { IconCalculator } from "@pagos/components/ui/icons/icon-calculator";
import { IconGlobe } from "@pagos/components/ui/icons/icon-globe";
import { IconWhatsapp } from "@pagos/components/ui/icons/icon-whatsapp";

export function MobileFixedActions() {
  return (
    <div className="flex fixed inset-x-0 bottom-0 isolate z-[99999] md:hidden h-20 w-full items-center justify-between rounded-t-[12px] bg-brand-dark">
      <a
        href="#"
        className="flex h-full flex-1 flex-col items-center justify-center gap-1.5 border-r border-white/60 px-1 py-2 text-white last:border-r-0"
      >
        <IconGlobe size={24} />
        <span className="text-center text-xs leading-[14px]!">
          Cómpranos desde el exterior
        </span>
      </a>
      <a
        href="#"
        className="flex h-full flex-1 flex-col items-center justify-center gap-1.5 border-r border-white/60 px-1 py-2 text-white last:border-r-0"
      >
        <IconCalculator size={24} />
        <span className="text-center text-xs leading-[14px]!">
          Simula tu financiación
        </span>
      </a>
      <a
        href="#"
        className="flex h-full flex-1 flex-col items-center justify-center gap-1.5 border-r border-white/60 px-1 py-2 text-white last:border-r-0"
      >
        <IconWhatsapp size={24} />
        <span className="text-center text-xs leading-[14px]!">
          ¿Necesitas
          <br />
          ayuda?
        </span>
      </a>
    </div>
  );
}