import { Button } from "@davivienda-pagos/components/ui/button";
import { PRODUCT_TYPE } from "../constants/consult-api";
import type { PaymentFormValues } from "../types/payment-schema";

interface PaymentSummaryProps {
  disabled?: boolean;
  onPagar?: () => void;
  payment: PaymentFormValues;
  holderName: string;
}

export function PaymentSummary({ disabled = true, onPagar, payment, holderName }: PaymentSummaryProps) {
  return (
    <div className="mt-0 mb-[2em] rounded-[14px] p-[1.5em] shadow-[0_4px_15px_rgba(0,0,0,0.15)] min-[768px]:mt-[1.5em] min-[768px]:max-[991px]:w-[230px] min-[992px]:p-[30px] min-[992px]:pt-[28px] min-[1600px]:p-[30px]">
      <div className="flex flex-wrap justify-between">
        <h2 className="mb-[0.5em] text-[22px] font-medium leading-[1.5] text-heading">Total transacción</h2>
        <h2 className="mb-[0.5em] text-[22px] font-semibold leading-[1.5] text-heading">{`${payment.amount} COP`}</h2>
      </div>
      <div className="flex flex-wrap items-center justify-between">
        <div className="w-full min-[576px]:w-3/4 min-[768px]:w-full min-[992px]:w-3/4">
          <p className="mb-[1em] text-[14px] leading-[21px] text-text">
            <strong>Identificación:</strong> <span>{payment.ticketNumber}</span>
          </p>
          <p className="mb-[1em] text-[14px] leading-[21px] text-text">
            <strong>Tipo de producto:</strong> <span>{PRODUCT_TYPE}</span>
          </p>
          <p className="mb-[1em] text-[14px] leading-[21px] text-text">
            <strong>Número fondo de inversión:</strong> <span>{payment.productNumber}</span>
          </p>
        </div>
        <div className="w-full min-[576px]:w-1/4 min-[768px]:w-full min-[992px]:w-1/4">
          <div className="my-[10px] flex items-center justify-center">
            {/* <a
              href="#/"
              className="text-[14px] leading-[21px] text-brand underline hover:text-brand-hover"
            >
              Cambiar
            </a> */}
          </div>
        </div>
      </div>
      <hr className="my-[0.5em] border-0 border-b border-border" />
      <div>
        <div className="w-full min-[576px]:w-3/4 min-[768px]:w-full min-[992px]:w-3/4">
          <h3 className="mb-[0.5em] text-[18px] font-semibold leading-[1.5] text-heading">
            {holderName}
          </h3>
          <p className="mb-[1em] text-[14px] leading-[21px] text-text">
            <strong>Participación:</strong>
            <span> .</span>
          </p>
          <p className="mb-[1em] text-[14px] leading-[21px] text-text">
            <strong>Fondo de inversión:</strong>
            <span> {PRODUCT_TYPE}</span>
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <Button variant="primary" disabled={disabled} onClick={onPagar} className="min-w-[100px]">
          Pagar
        </Button>
      </div>
    </div>
  );
}