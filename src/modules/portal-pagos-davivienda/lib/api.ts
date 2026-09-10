import { decryptRequest, encryptRequest } from "./encryption";

const API_BASE_URL = "https://portalpagos.davivienda.com";

interface DaviviendaRequest {
  method?: "GET" | "POST";
  body?: unknown;
}

interface DaviviendaEnvelope {
  data?: string;
  message?: string;
  status?: string;
}

export async function daviviendaFetch<T>(
  path: string,
  request: DaviviendaRequest = {},
): Promise<T> {
  const hasBody = request.body !== undefined;
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: request.method ?? "GET",
    headers: hasBody ? { "Content-Type": "application/json" } : undefined,
    body: hasBody ? JSON.stringify({ data: encryptRequest(request.body) }) : undefined,
  });

  const envelope = (await response.json()) as DaviviendaEnvelope;

  if (!response.ok || envelope.status?.toLowerCase() === "error") {
    throw new Error(envelope.message || `Error en la solicitud (${response.status})`);
  }

  return decryptRequest<T>(envelope.data ?? "");
}
