"use client";

import { useEffect, useState } from "react";
import { Steps } from "@davivienda-pagos/components/ui/steps";
import { PAYMENT_STEPS } from "@davivienda-pagos/constants/steps";
import type { PaymentFormValues } from "../types/payment-schema";
import { DEFAULT_PSE_VALUES, type PseFormValues } from "../types/pse-schema";
import { CommerceCard } from "./commerce-card";
import { PagoStep } from "./pago-step";
import { PaymentError } from "./payment-error";
import { PaymentForm } from "./payment-form";

const CONSULTAR_HASH = "#/cargos/fiduciaria";
const PAGO_PATH = "#/cargos/fiduciaria/pago";

function parseHash() {
  const [path, query = ""] = window.location.hash.split("?");
  return { isPago: path === PAGO_PATH, hasError: new URLSearchParams(query).has("error") };
}

export function FiduciariaView() {
  const [isPago, setIsPago] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [payment, setPayment] = useState<PaymentFormValues | null>(null);
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
    window.location.hash = CONSULTAR_HASH;
  };

  return (
    <main className="mx-auto w-full flex-1 px-[15px] pt-6 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
      <div className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
        <CommerceCard />
      </div>
      <section className="flex justify-center py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
        <div className="w-full md:w-3/4">
          <Steps current={isPago ? 1 : 0} items={PAYMENT_STEPS} />
        </div>
      </section>
      {isPago && hasError && payment ? (
        <section className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6  md:mb-10">
          <PaymentError payment={payment} holderName={pseValues.name} onBack={handleBack} />
        </section>
      ) : isPago && payment ? (
        <section className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6  md:mb-10">
          <PagoStep payment={payment} values={pseValues} onValuesChange={setPseValues} />
        </section>
      ) : (
        <section className="flex justify-center py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
          <div className="w-full md:w-3/4">
            <PaymentForm onConsultar={setPayment} />
          </div>
        </section>
      )}
    </main>
  );
}
