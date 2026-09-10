"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { RECEIPT_TOKEN } from "../constants/consult-api";
import type { FiduciaryTicket } from "../types/fiduciary";
import type { PaymentFormValues } from "../types/payment-schema";
import { DEFAULT_PSE_VALUES, type PseFormValues } from "../types/pse-schema";
import { PagoStep } from "./pago-step";
import { PaymentError } from "./payment-error";
import { PaymentForm } from "./payment-form";
import { PaymentShell } from "./payment-shell";

const CONSULTAR_HASH = "#/cargos/fiduciaria";
const PAGO_PATH = "#/cargos/fiduciaria/pago";

function parseHash() {
  const [path, query = ""] = window.location.hash.split("?");
  return {
    isPago: path === PAGO_PATH,
    hasError: new URLSearchParams(query).has("error"),
  };
}

export function FiduciariaView() {
  const router = useRouter();
  const [isPago, setIsPago] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [payment, setPayment] = useState<PaymentFormValues | null>(null);
  const [ticket, setTicket] = useState<FiduciaryTicket | null>(null);
  const [pseValues, setPseValues] = useState<PseFormValues>(DEFAULT_PSE_VALUES);

  useEffect(() => {
    const sync = () => {
      const route = parseHash();
      setIsPago(route.isPago);
      setHasError(route.hasError);
    };
    sync();
    window.addEventListener("hashchange", sync);
    return () => window.removeEventListener("hashchange", sync);
  }, []);

  useEffect(() => {
    if (isPago && hasError && payment === null) {
      window.location.hash = CONSULTAR_HASH;
    }
  }, [isPago, hasError, payment]);

  const handleBack = () => {
    setPayment(null);
    setTicket(null);
    window.location.hash = CONSULTAR_HASH;
  };

  const handleConsultar = (values: PaymentFormValues, result: FiduciaryTicket) => {
    setPayment(values);
    setTicket(result);
    window.location.hash = PAGO_PATH;
  };

  const handleContinue = () => {
    router.push(`/ticket/comercio/${RECEIPT_TOKEN}`);
  };

  const currentStep = isPago ? 1 : 0;

  return (
    <PaymentShell currentStep={currentStep}>
      {isPago && hasError && payment && ticket ? (
        <section className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6  md:mb-10">
          <PaymentError payment={payment} ticket={ticket} onBack={handleBack} />
        </section>
      ) : isPago && payment && ticket ? (
        <section className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6  md:mb-10">
          <PagoStep
            payment={payment}
            ticket={ticket}
            values={pseValues}
            onValuesChange={setPseValues}
            onContinue={handleContinue}
          />
        </section>
      ) : (
        <section className="flex justify-center py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
          <div className="w-full md:w-3/4">
            <PaymentForm onConsultar={handleConsultar} />
          </div>
        </section>
      )}
    </PaymentShell>
  );
}
