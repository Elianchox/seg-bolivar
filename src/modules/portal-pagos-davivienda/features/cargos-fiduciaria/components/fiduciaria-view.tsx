"use client";

import { useEffect, useState } from "react";
import { Steps } from "@davivienda-pagos/components/ui/steps";
import { PAYMENT_STEPS } from "@davivienda-pagos/constants/steps";
import {
  PRODUCT_TYPE,
  RECEIPT_DEFAULT_AMOUNT,
  RECEIPT_PRODUCT_NUMBER,
  RECEIPT_REFERENCE,
  RECEIPT_STATUS,
  RECEIPT_TICKET_PATH,
  RECEIPT_TICKET_PREFIX,
} from "../constants/consult-api";
import type { PaymentFormValues } from "../types/payment-schema";
import type { PaymentReceipt as PaymentReceiptData } from "../types/payment-receipt";
import { DEFAULT_PSE_VALUES, type PseFormValues } from "../types/pse-schema";
import { CommerceCard } from "./commerce-card";
import { PagoStep } from "./pago-step";
import { PaymentError } from "./payment-error";
import { PaymentForm } from "./payment-form";
import { PaymentReceipt } from "./payment-receipt";

const CONSULTAR_HASH = "#/cargos/fiduciaria";
const PAGO_PATH = "#/cargos/fiduciaria/pago";

function parseHash() {
  const [path, query = ""] = window.location.hash.split("?");
  return {
    isPago: path === PAGO_PATH,
    isTicket: path.startsWith(RECEIPT_TICKET_PREFIX),
    hasError: new URLSearchParams(query).has("error"),
  };
}

function formatDate(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(
    date.getHours(),
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function FiduciariaView() {
  const [isPago, setIsPago] = useState(false);
  const [isTicket, setIsTicket] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [payment, setPayment] = useState<PaymentFormValues | null>(null);
  const [pseValues, setPseValues] = useState<PseFormValues>(DEFAULT_PSE_VALUES);
  const [receiptDate, setReceiptDate] = useState<string | null>(null);

  useEffect(() => {
    const sync = () => {
      const route = parseHash();
      setIsPago(route.isPago);
      setIsTicket(route.isTicket);
      setHasError(route.hasError);
      if (route.isTicket) {
        setReceiptDate((current) => current ?? formatDate(new Date()));
      }
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

  const handleContinue = () => {
    window.location.hash = RECEIPT_TICKET_PATH;
  };

  const handleFinish = () => {
    setPayment(null);
    setPseValues(DEFAULT_PSE_VALUES);
    setReceiptDate(null);
    window.location.hash = CONSULTAR_HASH;
  };

  const receipt: PaymentReceiptData = {
    reference: RECEIPT_REFERENCE,
    productNumber: RECEIPT_PRODUCT_NUMBER,
    concept: PRODUCT_TYPE,
    amount: payment?.amount ?? RECEIPT_DEFAULT_AMOUNT,
    status: RECEIPT_STATUS,
    date: receiptDate ?? "",
  };

  const currentStep = isTicket ? 2 : isPago ? 1 : 0;

  return (
    <main className="mx-auto w-full flex-1 px-[15px] pt-6 min-[576px]:max-w-[540px] min-[768px]:max-w-[720px] min-[992px]:max-w-[960px] min-[1200px]:max-w-[1140px]">
      <div className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
        <CommerceCard />
      </div>
      <section className="flex justify-center py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6">
        <div className="w-full md:w-3/4">
          <Steps current={currentStep} items={PAYMENT_STEPS} />
        </div>
      </section>
      {isTicket ? (
        <section className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6  md:mb-10">
          <PaymentReceipt receipt={receipt} onFinish={handleFinish} />
        </section>
      ) : isPago && hasError && payment ? (
        <section className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6  md:mb-10">
          <PaymentError payment={payment} holderName={pseValues.name} onBack={handleBack} />
        </section>
      ) : isPago && payment ? (
        <section className="py-2 min-[480px]:py-3 min-[576px]:py-4 min-[768px]:py-6  md:mb-10">
          <PagoStep
            payment={payment}
            values={pseValues}
            onValuesChange={setPseValues}
            onContinue={handleContinue}
          />
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
