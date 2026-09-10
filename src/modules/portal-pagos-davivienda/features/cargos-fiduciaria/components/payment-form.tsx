"use client";

import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@davivienda-pagos/components/ui/button";
import { Checkbox } from "@davivienda-pagos/components/ui/checkbox";
import { Input } from "@davivienda-pagos/components/ui/input";
import type { FiduciaryTicket } from "../types/fiduciary";
import { paymentSchema, type PaymentFormValues } from "../types/payment-schema";
import { useFiduciaryConsult } from "../hooks/use-fiduciary-consult";
import { numericField } from "../utils/numeric-field";
import { AmountInput } from "./amount-input";
import { FormItem } from "./form-item";

const TERMS_TEXT =
  "A través de este servicio usted podrá realizar transferencias electrónicas a los fondos de inversión colectiva que administra Fiduciaria Davivienda S.A. Usted debe disponer de los medios necesarios y seguros para utilizar el servicio de internet; por lo que Fiduciaria Davivienda S.A. no se puede hacer responsable de la disponibilidad ni confiabilidad de los mismos.";

interface PaymentFormProps {
  onConsultar: (values: PaymentFormValues, ticket: FiduciaryTicket) => void;
}

export function PaymentForm({ onConsultar }: PaymentFormProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<PaymentFormValues>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      ticketNumber: "",
      productNumber: "",
      amount: "$ ",
      termsAccepted: false,
    },
    mode: "onSubmit",
    reValidateMode: "onChange",
  });

  const termsAccepted = useWatch({ control, name: "termsAccepted" });
  const { consult, isLoading, error } = useFiduciaryConsult();

  const onSubmit = async (values: PaymentFormValues) => {
    const ticket = await consult(values);
    if (ticket) {
      onConsultar(values, ticket);
    }
  };

  return (
    <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
      <div className="-mx-[15px] -my-[4px] flex flex-wrap">
        <div className="w-full px-[15px] py-[4px] min-[576px]:w-1/2">
          <FormItem
            id="ticket_number"
            label="Número de identificación"
            required
            help="Ingrese su número de identidad sin espacios, puntos, comas ni caracteres especiales"
            error={errors.ticketNumber?.message}
          >
            <Input
              id="ticket_number"
              maxLength={16}
              placeholder="Número de identificación"
              hasError={!!errors.ticketNumber}
              aria-describedby={errors.ticketNumber ? "ticket_number-error" : undefined}
              {...register("ticketNumber")}
            />
          </FormItem>
        </div>
        <div className="w-full px-[15px] py-[4px] min-[576px]:w-1/2">
          <FormItem
            id="product_number"
            label="Número Producto"
            required
            help="El número de su fondo de inversión consta de 16 dígitos, por favor ingréselo sin espacios, puntos, comas ni caracteres especiales. Más información en la línea nacional 01 800 0919 561 desde Bogotá 601 338 3838"
            error={errors.productNumber?.message}
          >
            <Input
              id="product_number"
              maxLength={16}
              inputMode="numeric"
              placeholder="Número Producto"
              hasError={!!errors.productNumber}
              aria-describedby={errors.productNumber ? "product_number-error" : undefined}
              {...numericField(register("productNumber"))}
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
            error={errors.amount?.message}
          >
            <Controller
              name="amount"
              control={control}
              render={({ field }) => (
                <AmountInput
                  id="amount"
                  value={field.value}
                  onChange={field.onChange}
                  hasError={!!errors.amount}
                />
              )}
            />
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
          <Controller
            name="termsAccepted"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="terminosFiduciaria"
                label="Acepto Términos y Condiciones"
                checked={field.value}
                onChange={field.onChange}
                hasError={!!errors.termsAccepted}
              />
            )}
          />
          {errors.termsAccepted && (
            <div
              id="terminosFiduciaria-error"
              role="alert"
              className="min-h-[22px] text-[14px] leading-[21px] text-error"
            >
              {errors.termsAccepted.message}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center mb-10">
        <Button variant="primary" type="submit" disabled={!termsAccepted || isLoading}>
          {isLoading ? "Consultando…" : "Consultar"}
        </Button>
      </div>
      {error && (
        <div
          role="alert"
          className="mb-10 text-center text-[14px] leading-[21px] text-error"
        >
          {error}
        </div>
      )}
    </form>
  );
}