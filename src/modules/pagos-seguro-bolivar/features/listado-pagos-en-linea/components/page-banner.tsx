import { MascBanner } from "@pagos/components/ui/masc-banner";
import { Typography } from "@pagos/components/ui/typography";

export function PageBanner() {
  return (
    <section className="relative overflow-hidden bg-brand-dark">
      <MascBanner />
      <div className="mx-auto w-full px-8 md:max-w-[1320px]">
        <div className="py-[20px]" aria-hidden="true" />
        <div className="relative z-10">
          <Typography as="h1" variant="hero" className="text-white">
            Pagos en línea
          </Typography>
          <div className="py-[10px]" aria-hidden="true" />
          <Typography
            variant="body"
            className="max-w-[720px] font-bold leading-[22px]! tracking-[0.5px] text-white"
          >
            <strong>
              Si tu proyecto se encuentra dentro de esta lista o aparece dentro de los resultados de
              búsqueda, puedes hacer uso del servicio PSE para pagar tu cuota inicial.
            </strong>{" "}
            Para iniciar debes hacer clic en el proyecto que compraste y seguir las instrucciones. Si
            el proyecto no aparece, deberás seguir haciendo el pago de la cuota inicial como te
            indicó tu asesor de ventas.
          </Typography>
        </div>
        <div className="py-[20px]" aria-hidden="true" />
      </div>
    </section>
  );
}