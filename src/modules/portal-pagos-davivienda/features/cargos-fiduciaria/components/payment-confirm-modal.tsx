"use client";

import { Modal } from "@davivienda-pagos/components/ui/modal";
import { Button } from "@davivienda-pagos/components/ui/button";
import { PAYMENT_METHOD, PRODUCT_TYPE } from "../constants/consult-api";
import type { PaymentFormValues } from "../types/payment-schema";
import type { PseFormValues } from "../types/pse-schema";

interface PaymentConfirmModalProps {
  open: boolean;
  onClose: () => void;
  values: PseFormValues;
  payment: PaymentFormValues;
}

const rowClass = "my-[3px] leading-[22px]";

export function PaymentConfirmModal({ open, onClose, values, payment }: PaymentConfirmModalProps) {
  const rows = [
    { label: "Referencia / Producto", value: payment.productNumber },
    { label: "Concepto", value: PRODUCT_TYPE },
    { label: "Medio de Pago", value: PAYMENT_METHOD },
    { label: "A nombre de", value: values.name },
    { label: "Email", value: values.email },
    { label: "Teléfono", value: values.phone },
    { label: "Monto", value: payment.amount },
  ];

  return (
    <Modal
      open={open}
      title="Confirme la información de su pago"
      onClose={onClose}
      footer={
        <>
          <Button onClick={onClose}>Volver</Button>
          <Button variant="primary" onClick={onClose}>
            Continuar
          </Button>
        </>
      }
    >
      <p className="mb-[1em]">
        Esta es la información de su pago. Verifique los datos antes de hacer su transacción.
      </p>
      <div>
        {rows.map((row) => (
          <p key={row.label} className={rowClass}>
            <strong className="text-black">{row.label}:</strong> <span>{row.value}</span>
          </p>
        ))}
      </div>
      <p className="mb-[1em]">
        En este momento será dirigido a la página de registro de PSE ( ACH Colombia) para continuar
        con el proceso de pago.
      </p>
      <p className="mb-[1em]">
        Una vez concluya el proceso de pago, no olvide regresar a nuestro sitio para finalizar
        adecuadamente el proceso y descargar el comprobante de pago.
      </p>
      <p className="mb-[1em]">
        *Esta transacción está sujeta a verificación. El total a pagar es en pesos Colombianos.
      </p>
    </Modal>
  );
}