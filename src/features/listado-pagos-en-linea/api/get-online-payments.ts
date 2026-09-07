import type {
  OnlinePayment,
  OnlinePaymentQuery,
  OnlinePaymentResponse,
} from "@/features/listado-pagos-en-linea/types/online-payment";
import { apiGet } from "@/lib/api";

interface RawOnlinePayment {
  id: number;
  title: string;
  field_ciudad_pl: string;
  field_enlace_pl: string;
  field_imagen_pl: string;
}

interface RawOnlinePaymentResponse {
  results: RawOnlinePayment[];
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

function toOnlinePayment(raw: RawOnlinePayment): OnlinePayment {
  return {
    id: raw.id,
    title: raw.title,
    city: raw.field_ciudad_pl,
    url: raw.field_enlace_pl,
    image: raw.field_imagen_pl,
  };
}

export async function getOnlinePayments(
  query: OnlinePaymentQuery = {},
): Promise<OnlinePaymentResponse> {
  const data = await apiGet<RawOnlinePaymentResponse>("/api/listado-pagos-en-linea", {
    page: query.page ?? 0,
    limit: query.limit ?? 12,
    city_id: query.cityId,
    search: query.search?.trim(),
  });

  return {
    results: data.results.map(toOnlinePayment),
    total: data.total,
    page: data.page,
    limit: data.limit,
    totalPages: data.totalPages,
  };
}