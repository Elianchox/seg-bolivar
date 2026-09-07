import Image from "next/image";
import banner from "@/assets/pagos-en-linea/banner-pagos-en-linea.webp";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { ButtonLink } from "@/components/ui/button-link";
import { Typography } from "@/components/ui/typography";
import { MascBanner } from "@/components/ui/masc-banner";

export function PageBanner() {
  return (
    <section className="bg-brand-deep">
      <div className="w-full">
        <div className="-mx-3 flex flex-wrap justify-between">
          <div className="relative w-full overflow-hidden bg-brand-dark md:w-1/2">
            <MascBanner />
            <div className="relative z-10 mx-auto w-[68%]">
              <div className="py-[15px]" />
              <nav aria-label="breadcrumb" className="hidden md:block">
                <Breadcrumb
                  items={[
                    { label: "Inicio", href: "#" },
                    { label: "Pagos en línea" },
                  ]}
                />
              </nav>
              <div className="py-[20px]" />
              <Typography as="h1" variant="hero" className="text-white">
                Pagos en línea
              </Typography>
              <div className="py-[10px]" />
              <Typography
                variant="body"
                className="font-bold leading-[22px]! tracking-[0.5px] text-white"
              >
                Realiza los pagos de la cuota inicial de tu vivienda a cualquier hora y desde la
                comodidad de tu casa u oficina con total seguridad y en tan solo unos clics.
              </Typography>
              <div className="py-[20px]" />
              <ButtonLink
                href="#iniciar-el-pago"
                variant="white"
                className="mb-8 flex w-full items-center justify-center md:inline-flex md:w-auto"
              >
                Realizar pago
              </ButtonLink>
            </div>
          </div>
          <div className="relative -order-1 w-full md:order-none md:w-1/2">
            <Image
              src={banner}
              alt=""
              width={1010}
              height={512}
              className="h-auto w-full object-cover md:absolute md:inset-0 md:h-full md:w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}