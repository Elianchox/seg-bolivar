import { daviviendaFetch } from "@davivienda-pagos/lib/api";
import type { FiduciaryConsultInput, FiduciaryTicket } from "../types/fiduciary";

interface FiduciaryConsultResponse {
  tickets: FiduciaryTicket[];
}

export async function consultFiduciary(
  input: FiduciaryConsultInput,
  commerceId: number,
): Promise<FiduciaryTicket> {
  const response = await daviviendaFetch<FiduciaryConsultResponse>(
    `/v1/tickets/commerce/${commerceId}/client/`,
    {
      method: "POST",
      body: {
        id_ticket: input.ticketNumber,
        key_ticket: input.productNumber,
        amount: input.amount,
      },
    },
  );

  return response.tickets[0];
}
