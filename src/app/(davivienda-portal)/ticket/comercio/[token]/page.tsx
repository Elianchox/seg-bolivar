import type { Metadata } from "next";
import { TicketView } from "@davivienda-pagos/features/cargos-fiduciaria/components/ticket-view";

export const metadata: Metadata = {
  title: "Resumen de pago | Portal de Pagos",
};

export default async function TicketPage({
  params,
}: {
  params: Promise<{ token: string }>;
}) {
  await params;
  return <TicketView />;
}
