import type { City } from "@pagos/features/listado-pagos-en-linea/types/city";
import { apiGet } from "@pagos/lib/api";

interface RawCity {
  tid: string;
  name: string;
}

export async function getCities(): Promise<City[]> {
  const data = await apiGet<RawCity[]>("/api/filtro/ciudades");

  const unique = new Map<string, City>();
  data.forEach((city) => {
    if (!unique.has(city.tid)) {
      unique.set(city.tid, { tid: city.tid, name: city.name });
    }
  });

  return Array.from(unique.values()).sort((a, b) => a.name.localeCompare(b.name));
}