import Image from "next/image";
import group10790 from "@pagos/assets/pagos-en-linea/group-10790.webp";
import { ButtonLink } from "@pagos/components/ui/button-link";
import { Typography } from "@pagos/components/ui/typography";

export function PaymentSection() {
  return (
    <section className="mx-auto px-4 md:px-0 md:max-w-[720px] lg:max-w-[960px]" id="iniciar-el-pago" aria-label="Inicia el pago de tu cuota inicial">
      <div className="py-[15px]" aria-hidden="true" />
      <div className="mx-auto w-full px-3 md:max-w-[1320px] md:px-3">
        <div className="-mx-3 flex flex-wrap items-center justify-between overflow-hidden rounded-[12px] bg-warm p-12">
          <div className="w-full px-3 md:w-1/2">
            <Image
              src={group10790}
              alt="Inicia el pago de tu cuota inicial"
              width={816}
              height={512}
              className="h-auto w-full"
            />
          </div>
          <div className="w-full px-3 md:w-1/2">
            <form className="-mx-2 -mt-4 flex flex-wrap" noValidate>
              <div className="mt-[50px] px-2 md:mt-4">
                <Typography as="h2" variant="payment-title" className="mb-2">
                  Inicia el pago de tu cuota inicial
                </Typography>
                <div className="p-[5px]" aria-hidden="true" />
                <Typography as="p" className="text-text leading-[22px]! md:leading-[24px]!">
                  Acepto todos los términos y condiciones de uso del sistema de pagos en línea de
                  Constructora Bolívar S.A
                </Typography>
                <div className="p-[10px]" aria-hidden="true" />
              </div>
              <div className="m-0 px-2">
                <div className="flex items-center gap-2">
                  <span className="relative inline-flex h-4 w-4 shrink-0">
                    <input
                      type="checkbox"
                      value="Si"
                      id="aceptTerms"
                      required
                      className="peer h-4 w-4 appearance-none rounded border border-black/25 bg-surface checked:border-link checked:bg-link"
                    />
                    <svg
                      viewBox="0 0 20 20"
                      fill="none"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 m-auto hidden h-3 w-3 text-white peer-checked:block"
                    >
                      <path
                        d="M6 10l3 3l6-6"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                  <label htmlFor="aceptTerms" className="text-[12px] leading-[12px] text-text">
                    {" "}Acepto los{" "}
                    <a
                      href="#"
                      className="no-underline text-[12px] leading-[12px] text-link"
                    >
                      términos y condiciones.
                    </a>
                  </label>
                </div>
              </div>
              <div className="mt-4 px-2">
                <ButtonLink
                  href="/listado-pagos-en-linea"
                  variant="primary"
                  className="block w-full text-center md:inline-block md:w-auto"
                >
                  Continuar
                </ButtonLink>
              </div>
              <div className="hidden text-[14px] text-[#dc3545]">
                {" "}Por favor acepte los términos y condiciones
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}