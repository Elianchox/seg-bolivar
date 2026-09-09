"use client";

import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Button } from "@davivienda-pagos/components/ui/button";
import { Checkbox } from "@davivienda-pagos/components/ui/checkbox";
import { IconInfoCircle } from "@davivienda-pagos/components/ui/icons/info-circle";
import { Input } from "@davivienda-pagos/components/ui/input";
import { Tooltip } from "@davivienda-pagos/components/ui/tooltip";
import { AmountInput } from "./amount-input";

interface FormItemProps {
  id: string;
  label: string;
  required?: boolean;
  help?: string;
  children: ReactNode;
}

function FormItem({ id, label, required = false, help, children }: FormItemProps) {
  return (
    <div>
      <label htmlFor={id} className="block text-[14px] leading-[22px] text-heading">
        {required && <span className="mr-1 text-brand-soft">*</span>}
        <span>{label}</span>
        <Tooltip title={label} content={help ?? ""}>
          <span className="ml-1 inline-block p-1 align-middle text-[10px] text-info">
            <IconInfoCircle />
          </span>
        </Tooltip>
        <span className="ml-[2px] mr-2 hidden min-[480px]:inline">:</span>
      </label>
      <div className="leading-10">{children}</div>
    </div>
  );
}

const TERMS_TEXT =
  "A través de este servicio usted podrá realizar transferencias electrónicas a los fondos de inversión colectiva que administra Fiduciaria Davivienda S.A. Usted debe disponer de los medios necesarios y seguros para utilizar el servicio de internet; por lo que Fiduciaria Davivienda S.A. no se puede hacer responsable de la disponibilidad ni confiabilidad de los mismos.";

export function PaymentForm() {
  const [identification, setIdentification] = useState("");
  const [productNumber, setProductNumber] = useState("");
  const [amount, setAmount] = useState("$ ");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const valid = useMemo(
    () =>
      identification.trim().length > 0 &&
      productNumber.trim().length > 0 &&
      Number(amount.replace(/[^\d]/g, "")) > 0 &&
      termsAccepted,
    [identification, productNumber, amount, termsAccepted],
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!valid) return;
    window.location.hash = "#/cargos/fiduciaria/pago";
  };

  return (
    <form className="w-full" onSubmit={handleSubmit}>
      <div className="-mx-[15px] -my-[4px] flex flex-wrap">
        <div className="w-full px-[15px] py-[4px] min-[576px]:w-1/2">
          <FormItem
            id="ticket_number"
            label="Número de identificación"
            required
            help="Ingrese su número de identidad sin espacios, puntos, comas ni caracteres especiales"
          >
            <Input
              id="ticket_number"
              maxLength={16}
              placeholder="Número de identificación"
              value={identification}
              onChange={(e) => setIdentification(e.target.value)}
            />
          </FormItem>
        </div>
        <div className="w-full px-[15px] py-[4px] min-[576px]:w-1/2">
          <FormItem
            id="product_number"
            label="Número Producto"
            required
            help="El número de su fondo de inversión consta de 16 dígitos, por favor ingréselo sin espacios, puntos, comas ni caracteres especiales. Más información en la línea nacional 01 800 0919 561 desde Bogotá 601 338 3838"
          >
            <Input
              id="product_number"
              maxLength={16}
              placeholder="Número Producto"
              value={productNumber}
              onChange={(e) => setProductNumber(e.target.value)}
            />
          </FormItem>
        </div>
      </div>

      <div className="-mx-[15px] my-[20px] flex flex-wrap">
        <div className="w-full px-[15px] py-[4px] min-[576px]:w-1/2">
          <FormItem
            id="amount"
            label="Valor aporte"
            required
            help="Ingrese el valor que usted desea debitar de su cuenta en otra identidad financiera, para ser abonado a su fondo"
          >
            <AmountInput id="amount" value={amount} onChange={setAmount} />
          </FormItem>
        </div>
      </div>

      <div className="-mx-[15px] my-[20px] flex flex-wrap">
        <div className="px-[15px] py-[4px] min-[576px]:w-[58.3333%]">
          <h4 className="mb-[7px] text-[14px] font-medium leading-[21px] text-ink">
            Hora de transacción y fecha aproximada de abono
          </h4>
          <p className="mb-[14px] text-[14px] leading-[21px] text-text">
            Entre 00:00 AM y 04:00 PM se aplicará mismo día de la transacción
          </p>
          <p className="mb-[14px] text-[14px] leading-[21px] text-text">
            Después de las 4:01 PM se aplicará al día hábil siguiente de la transacción
          </p>
        </div>
      </div>

      <div className="-mx-[15px] -my-[4px] flex flex-wrap">
        <div className="w-full px-[15px] py-[4px]">
          <h4 className="mb-[7px] text-[14px] font-medium leading-[21px] text-ink">
            Términos y condiciones
          </h4>
          <p className="mb-[14px] text-[14px] leading-[21px] text-text">{TERMS_TEXT}</p>
        </div>
        <div className="w-full px-[15px] py-[4px]">
          <Checkbox
            id="terminosFiduciaria"
            label="Acepto Términos y Condiciones"
            checked={termsAccepted}
            onChange={setTermsAccepted}
          />
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <Button variant="primary" type="submit" disabled={!valid}>
          Consultar
        </Button>
      </div>
    </form>
  );
}