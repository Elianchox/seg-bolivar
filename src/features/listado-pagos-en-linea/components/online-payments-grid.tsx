"use client";

import { PayOnlineCard } from "@/features/listado-pagos-en-linea/components/pay-online-card";
import type { OnlinePayment } from "@/features/listado-pagos-en-linea/types/online-payment";

interface OnlinePaymentsGridProps {
  payments: OnlinePayment[];
  loading: boolean;
  error: string | null;
}

export function OnlinePaymentsGrid({ payments, loading, error }: OnlinePaymentsGridProps) {
  if (loading) {
    return (
      <div className="px-3 py-10 text-center text-text-muted">Cargando pagos en línea...</div>
    );
  }

  if (error) {
    return <div className="px-3 py-10 text-center text-[#dc3545]">{error}</div>;
  }

  return (
    <div className="-mx-3 flex flex-wrap justify-start items-start">
      {payments.map((payment) => (
        <div key={payment.id} className="w-full px-3 md:w-1/4">
          <PayOnlineCard payment={payment} />
        </div>
      ))}
    </div>
  );
}
