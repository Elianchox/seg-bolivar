"use client";

import { useState } from "react";
import { Typography } from "@davivienda-pagos/components/ui/typography";
import { PaymentMethodCard } from "./payment-method-card";
import { PaymentSummary } from "./payment-summary";
import { PsePaymentForm } from "./pse-payment-form";

export function PagoStep() {
  const [pseFormReady, setPseFormReady] = useState(false);

  return (
    <div>
      <div className="-mx-[15px] flex justify-between flex-wrap">
        <div className="w-full px-[15px] min-[768px]:w-2/3 min-[992px]:w-[58.3333%]">
          <div className="-mx-2 w-full pb-7">
            <div className="px-2">
              <Typography variant="heading" className="mb-5 mt-0 inline-block font-semibold">
                Seleccione el método de pago
              </Typography>
            </div>
            <div className="w-1/2 px-2 min-[768px]:w-[41.6667%] min-[992px]:w-1/3">
              <PaymentMethodCard />
            </div>
          </div>

          <Typography variant="heading" className="mb-5 inline-block font-semibold">
            Ingrese la siguiente información
          </Typography>
          <PsePaymentForm onValidityChange={setPseFormReady} />
        </div>

        <div className="w-full px-[15px] min-[768px]:w-1/3">
          <PaymentSummary disabled={!pseFormReady} />
        </div>
      </div>

      <div className="w-[98%] border-t border-border pt-[1.5em] text-[13px] leading-[19.5px] text-text min-[768px]:w-[65%] min-[768px]:pt-[3%]">
        <p className="mb-[1em]">
          Al presionar el botón &apos;Pagar&apos;, usted ingresará al sitio web de PSE. Una vez
          concluya el proceso de pago, no olvide regresar a nuestro sitio para finalizar
          adecuadamente el proceso y descargar el comprobante de pago.
        </p>
        <p className="mb-[1em]">
          *Esta transacción está sujeta a verificación. El total a pagar es en pesos Colombianos.
        </p>
      </div>
    </div>
  );
}