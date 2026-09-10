"use client";

import { useSyncExternalStore } from "react";
import { useRouter } from "next/navigation";
import {
  PRODUCT_TYPE,
  RECEIPT_DEFAULT_AMOUNT,
  RECEIPT_PRODUCT_NUMBER,
  RECEIPT_REFERENCE,
  RECEIPT_STATUS,
} from "../constants/consult-api";
import type { PaymentReceipt as PaymentReceiptData } from "../types/payment-receipt";
import { PaymentReceipt } from "./payment-receipt";
import { PaymentShell } from "./payment-shell";

const emptySubscribe = () => () => {};

function formatDate(date: Date) {
  const pad = (value: number) => String(value).padStart(2, "0");
  return `${pad(date.getDate())}/${pad(date.getMonth() + 1)}/${date.getFullYear()} ${pad(
    date.getHours(),
  )}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

export function TicketView() {
  const router = useRouter();
  const isClient = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  );

  const receipt: PaymentReceiptData = {
    reference: RECEIPT_REFERENCE,
    productNumber: RECEIPT_PRODUCT_NUMBER,
    concept: PRODUCT_TYPE,
    amount: RECEIPT_DEFAULT_AMOUNT,
    status: RECEIPT_STATUS,
    date: isClient ? formatDate(new Date()) : "",
  };

  return (
    <PaymentShell currentStep={2}>
      <PaymentReceipt receipt={receipt} onFinish={() => router.push("/cargos/fiduciaria")} />
    </PaymentShell>
  );
}
