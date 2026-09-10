"use client";

import { useState } from "react";
import { Typography } from "@davivienda-pagos/components/ui/typography";
import type { PaymentFormValues } from "../types/payment-schema";
import type { PseFormValues } from "../types/pse-schema";
import { PaymentMethodCard } from "./payment-method-card";
import { PaymentSummary } from "./payment-summary";
import { PsePaymentForm } from "./pse-payment-form";
import { PaymentConfirmModal } from "./payment-confirm-modal";

interface PagoStepProps {
  payment: PaymentFormValues;
  values: PseFormValues;
  onValuesChange: (values: PseFormValues) => void;
}

export function PagoStep({ payment, values, onValuesChange }: PagoStepProps) {
  const [pseFormReady, setPseFormReady] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);

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
          <PsePaymentForm
            amount={payment.amount}
            onValidityChange={setPseFormReady}
            onValuesChange={onValuesChange}
          />
        </div>

        <div className="w-full px-[15px] min-[768px]:w-1/3">
          <PaymentSummary
            disabled={!pseFormReady}
            onPagar={() => setModalOpen(true)}
            payment={payment}
            holderName={values.name}
          />
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

      <PaymentConfirmModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        values={values}
        payment={payment}
      />
    </div>
  );
}