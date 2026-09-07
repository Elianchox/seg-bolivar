import { Typography } from "@/components/ui/typography";

export function FooterBottom() {
  return (
    <div className="bg-surface-muted/50 py-[1.1rem]">
      <div className="mx-auto max-w-[1320px] px-3">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <Typography variant="caption" className="text-ink">
            © 2026 Constructora Bolívar. Todos los derechos reservados
          </Typography>
        </div>
      </div>
    </div>
  );
}