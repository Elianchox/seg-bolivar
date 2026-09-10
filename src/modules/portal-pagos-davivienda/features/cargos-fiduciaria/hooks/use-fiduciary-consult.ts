"use client";

import { useCallback, useRef, useState } from "react";
import { consultFiduciary } from "../api/consult-fiduciary";
import { getCommerceIntegration } from "../api/get-commerce-integration";
import type { CommerceIntegration, FiduciaryTicket } from "../types/fiduciary";
import type { PaymentFormValues } from "../types/payment-schema";

const toAmount = (value: string) => Number(value.replace(/[^\d]/g, ""));

export function useFiduciaryConsult() {
  const commerceRef = useRef<CommerceIntegration | null>(null);
  const [ticket, setTicket] = useState<FiduciaryTicket | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const consult = useCallback(
    async (values: PaymentFormValues): Promise<FiduciaryTicket | null> => {
      setIsLoading(true);
      setError(null);

      try {
        if (commerceRef.current === null) {
          commerceRef.current = await getCommerceIntegration();
        }

        const result = await consultFiduciary(
          {
            ticketNumber: values.ticketNumber,
            productNumber: values.productNumber,
            amount: toAmount(values.amount),
          },
          commerceRef.current.commerce_id,
        );

        setTicket(result);
        return result;
      } catch (consultError) {
        setError(
          consultError instanceof Error
            ? consultError.message
            : "No fue posible consultar la información",
        );
        return null;
      } finally {
        setIsLoading(false);
      }
    },
    [],
  );

  return { ticket, isLoading, error, consult };
}
