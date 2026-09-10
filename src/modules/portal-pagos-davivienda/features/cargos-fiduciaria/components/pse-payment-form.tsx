"use client";

import { useEffect, useMemo } from "react";
import { Controller, useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Checkbox } from "@davivienda-pagos/components/ui/checkbox";
import { Input } from "@davivienda-pagos/components/ui/input";
import { Select } from "@davivienda-pagos/components/ui/select";
import {
  BANK_OPTIONS,
  DEFAULT_PSE_VALUES,
  DOC_TYPE_OPTIONS,
  PERSON_TYPE_OPTIONS,
  pseSchema,
  TERMS_URL,
  type PseFormValues,
} from "../types/pse-schema";
import { FormItem } from "./form-item";

interface PsePaymentFormProps {
  amount: string;
  onValidityChange?: (isValid: boolean) => void;
  onValuesChange?: (values: PseFormValues) => void;
}

export function PsePaymentForm({ amount, onValidityChange, onValuesChange }: PsePaymentFormProps) {
  const {
    register,
    handleSubmit,
    control,
    trigger,
    formState: { errors },
  } = useForm<PseFormValues>({
    resolver: zodResolver(pseSchema),
    defaultValues: DEFAULT_PSE_VALUES,
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const watchValues = useWatch({ control });
  const values = useMemo(
    () => ({ ...DEFAULT_PSE_VALUES, ...watchValues }) as PseFormValues,
    [watchValues],
  );
  const isComplete = pseSchema.safeParse(values).success;

  useEffect(() => {
    onValidityChange?.(isComplete);
    onValuesChange?.(values);
  }, [isComplete, onValidityChange, onValuesChange, values]);

  const onSubmit = () => {
    // Redirección a PSE (pendiente del siguiente paso del flujo)
  };

  return (
    <form className="w-full" noValidate onSubmit={handleSubmit(onSubmit)}>
      <div className="-mx-2 -my-[10px] flex flex-wrap">
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <FormItem
            id="banco"
            label="Banco"
            required
            error={errors.bank?.message}
          >
            <Controller
              name="bank"
              control={control}
              render={({ field }) => (
                <Select
                  id="banco"
                  options={BANK_OPTIONS.map(({ value, label }) => ({ value, label }))}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  hasError={!!errors.bank}
                  aria-describedby={errors.bank ? "banco-error" : undefined}
                />
              )}
            />
          </FormItem>
        </div>
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <FormItem
            id="person"
            label="Tipo de persona"
            required
            error={errors.personType?.message}
          >
            <Controller
              name="personType"
              control={control}
              render={({ field }) => (
                <Select
                  id="person"
                  options={PERSON_TYPE_OPTIONS.map(({ value, label }) => ({ value, label }))}
                  value={field.value}
                  onChange={field.onChange}
                  onBlur={field.onBlur}
                  ref={field.ref}
                  hasError={!!errors.personType}
                  aria-describedby={errors.personType ? "person-error" : undefined}
                />
              )}
            />
          </FormItem>
        </div>
      </div>

      <div className="-mx-2 -my-[10px] flex flex-wrap">
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <FormItem id="amount" label="Valor a pagar" required>
            <Input
              id="amount"
              disabled
              value={amount}
              className="cursor-not-allowed bg-surface-muted text-text-disabled"
            />
          </FormItem>
        </div>
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <FormItem
            id="docNumber"
            label="Documento de identidad"
            error={errors.docType?.message ?? errors.docNumber?.message}
          >
            <div className="flex">
              <div className="mr-5 w-[calc(30%-10px)]">
                <Controller
                  name="docType"
                  control={control}
                  render={({ field }) => (
                    <Select
                      id="tipoDoc"
                      options={DOC_TYPE_OPTIONS.map(({ value, label }) => ({ value, label }))}
                      value={field.value}
                      onChange={field.onChange}
                      onBlur={field.onBlur}
                      ref={field.ref}
                      hasError={!!errors.docType}
                      aria-label="Tipo de documento"
                    />
                  )}
                />
              </div>
              <div className="w-[calc(70%-10px)]">
                <Input
                  id="docNumber"
                  placeholder="Número de documento"
                  autoComplete="off"
                  hasError={!!errors.docNumber}
                  aria-label="Número de documento"
                  aria-describedby={
                    errors.docType || errors.docNumber ? "docNumber-error" : undefined
                  }
                  {...register("docNumber")}
                />
              </div>
            </div>
          </FormItem>
        </div>
      </div>

      <div className="-mx-2 -my-[10px] flex flex-wrap">
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <FormItem id="name" label="Nombre o razón social" required error={errors.name?.message}>
            <Input
              id="name"
              maxLength={256}
              placeholder="Nombre"
              autoComplete="name"
              hasError={!!errors.name}
              aria-describedby={errors.name ? "name-error" : undefined}
              {...register("name")}
            />
          </FormItem>
        </div>
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <FormItem id="email" label="Correo electrónico" required error={errors.email?.message}>
            <Input
              id="email"
              type="email"
              maxLength={256}
              placeholder="Correo electrónico"
              autoComplete="email"
              hasError={!!errors.email}
              aria-describedby={errors.email ? "email-error" : undefined}
              {...register("email")}
            />
          </FormItem>
        </div>
      </div>

      <div className="-mx-2 -my-[10px] flex flex-wrap">
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <FormItem id="phone" label="Teléfono de contacto" required error={errors.phone?.message}>
            <Input
              id="phone"
              type="tel"
              maxLength={30}
              placeholder="Teléfono de contacto"
              autoComplete="tel"
              hasError={!!errors.phone}
              aria-describedby={errors.phone ? "phone-error" : undefined}
              {...register("phone")}
            />
          </FormItem>
        </div>
      </div>

      <div className="-mx-2 -my-[10px] flex flex-wrap">
        <div className="w-full px-2 py-[10px] min-[768px]:w-1/2">
          <Controller
            name="termsAccepted"
            control={control}
            render={({ field }) => (
              <Checkbox
                id="termsAndConditions"
                checked={field.value}
                onChange={(checked) => {
                  field.onChange(checked);
                  void trigger("termsAccepted");
                }}
                hasError={!!errors.termsAccepted}
                label={
                  <span>
                    Acepto{" "}
                    <a
                      href={TERMS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-brand underline hover:text-brand-hover"
                    >
                      Términos y Condiciones
                    </a>
                  </span>
                }
              />
            )}
          />
          {errors.termsAccepted && (
            <div
              id="termsAndConditions-error"
              role="alert"
              className="my-[5px] min-h-[22px] text-[14px] leading-[21px] text-error"
            >
              {errors.termsAccepted.message}
            </div>
          )}
        </div>
      </div>

      <br />

    </form>
  );
}