import { Button } from "@davivienda-pagos/components/ui/button";
import type { FiduciaryTicket } from "../types/fiduciary";
import type { PaymentFormValues } from "../types/payment-schema";
import { PaymentSummary } from "./payment-summary";

interface PaymentErrorProps {
  payment: PaymentFormValues;
  ticket: FiduciaryTicket;
  onBack: () => void;
}

export function PaymentError({ payment, ticket, onBack }: PaymentErrorProps) {
  return (
    <div className="-mx-[15px] flex flex-wrap justify-between">
      <div className="w-full px-[15px] min-[768px]:w-2/3 min-[992px]:w-[58.3333%]">
        <div className="flex min-h-[200px] w-full items-center justify-center">
          <div className="w-full min-[768px]:w-[83.3333%]">
            <span className="block w-full text-center">
              <h4 className="mt-0 mb-[0.5em] text-[14px] font-medium leading-[1.4] text-ink">
                Estimado(a) cliente parece que algo salió mal con su pago.
              </h4>
              <b>Lo sentimos no pudimos procesar tu pago.</b>
              <br />
              <b>Verifique la información del método del pago o intente seleccionar otro medio.</b>
              <br />
              <Button variant="link" onClick={onBack}>
                {" Regresar"}
              </Button>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full px-[15px] min-[768px]:w-1/3">
        <PaymentSummary disabled payment={payment} ticket={ticket} />
      </div>
    </div>
  );
}
