import { Button } from "@davivienda-pagos/components/ui/button";
import { COMMERCE_INFO } from "@davivienda-pagos/constants/commerce";
import type { PaymentReceipt as PaymentReceiptData } from "../types/payment-receipt";
import { SummaryCard } from "./summary-card";

interface PaymentReceiptProps {
  receipt: PaymentReceiptData;
  onFinish: () => void;
}

const rowClass =
  "mb-[1.25em] border-b border-border-light pb-[1.25em] last:mb-0 last:border-b-0 last:pb-0";
const textClass = "mb-[0.5em] text-[14px] leading-[21px] text-text last:mb-0";

export function PaymentReceipt({ receipt, onFinish }: PaymentReceiptProps) {
  return (
    <div className="flex justify-center py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
      <div className="flex w-full flex-col justify-center min-[768px]:w-2/3">
        <div className="flex w-full flex-wrap items-center">
          <SummaryCard className="w-full">
            <div className={rowClass}>
              <h3 className="mb-0 text-[18px] font-semibold leading-[1.18] text-heading">
                Resumen de Pago: <span className="font-normal">{receipt.reference}</span>
              </h3>
            </div>

            <div className={rowClass}>
              <p className={textClass}>
                <strong>Número de producto:</strong> <span>{receipt.productNumber}</span>
              </p>
              <p className={textClass}>
                <strong>Concepto:</strong> <span>{receipt.concept}</span>
              </p>
              <p className={textClass}>
                <strong>Monto:</strong> <span>{receipt.amount}</span>
              </p>
              <p className={textClass}>
                <strong>Estado:</strong> <span>{receipt.status}</span>
              </p>
              <p className={textClass}>
                <strong>Fecha de pago:</strong> <span>{receipt.date}</span>
              </p>
            </div>

            <div className={rowClass}>
              <h3 className="mb-[0.5em] text-[18px] font-semibold leading-[1.18] text-heading">
                {COMMERCE_INFO.title}
              </h3>
              <p className={textClass}>
                <strong>Dirección:</strong> <span>{COMMERCE_INFO.address}</span>
              </p>
              <p className={textClass}>
                <strong>Teléfono:</strong> <span>{COMMERCE_INFO.phone}</span>
              </p>
            </div>

            <div className={rowClass}>
              <p className={textClass}>
                <strong>Identificador:</strong> <span>{receipt.reference}</span>
              </p>
            </div>
          </SummaryCard>

          <SummaryCard className="w-full">
            <div>
              <b>CONSTANCIA DE ENTREGA DE RECURSOS</b>
            </div>
            <br />
            <div className="text-justify">
              La entrega de recursos se realiza con la finalidad de constituir una inversión en el
              Fondo antes mencionado. Como inversionista dejo constancia que antes de realizar la
              apertura de la inversión en el Fondo de Inversión Colectiva me fue entregado el
              prospecto de inversión del mencionado Fondo y que leí, acepté y entendí la información
              allí consignada. Así mismo, manifiesto que en el contrato de apertura de la inversión
              en el Fondo, dejé constancia de haber recibido asesoría especial, en el evento que así
              la haya requerido o se me haya brindado.
            </div>
            <br />
            <div className="text-justify">
              Fiduciaria Davivienda S.A. como administradora del Fondo de Inversión Colectiva
              señalado en el presente documento, deja constancia de haber recibido los recursos por
              parte del inversionista, de conformidad con la información aquí consignada. Si desea
              ampliar la información de las características y beneficios de su inversión en el Fondo
              de Inversión Colectiva, visite nuestro sitio web
              <a
                href="https://www.fidudavivienda.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:text-brand-hover"
              >
                {" "}
                www.fidudavivienda.com
              </a>
              , o el sitio web
              <a
                href="https://www.davivienda.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand underline hover:text-brand-hover"
              >
                {" "}
                www.davivienda.com
              </a>
              , o comuníquese en Bogotá al 3383838 Opción 2 y desde cualquier lugar del país al
              018000123838.
            </div>
          </SummaryCard>

          <div className="mt-[30px] flex w-full justify-center">
            <Button className="mr-5">Descargar</Button>
            <Button variant="primary" onClick={onFinish}>
              Finalizar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
