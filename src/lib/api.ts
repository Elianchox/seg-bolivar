const API_BASE_URL = "https://www.constructorabolivar.com";

export async function apiGet<T>(
  path: string,
  params?: Record<string, string | number | undefined>,
): Promise<T> {
  const searchParams = new URLSearchParams();
  for (const [key, value] of Object.entries(params ?? {})) {
    if (value !== undefined && value !== "") searchParams.set(key, String(value));
  }

  const query = searchParams.toString();
  const response = await fetch(`${API_BASE_URL}${path}${query ? `?${query}` : ""}`);
  if (!response.ok) {
    throw new Error(`Error en la solicitud (${response.status})`);
  }

  return (await response.json()) as T;
}