import { daviviendaFetch } from "@davivienda-pagos/lib/api";
import type { CommerceIntegration } from "../types/fiduciary";

export function getCommerceIntegration(): Promise<CommerceIntegration> {
  return daviviendaFetch<CommerceIntegration>("/v1/public/commerce-integration/fiduciaria");
}
