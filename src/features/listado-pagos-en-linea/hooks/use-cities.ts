"use client";

import { useEffect, useState } from "react";
import { getCities } from "@/features/listado-pagos-en-linea/api/get-cities";
import type { City } from "@/features/listado-pagos-en-linea/types/city";

interface UseCities {
  cities: City[];
  loading: boolean;
  error: string | null;
}

export function useCities(): UseCities {
  const [cities, setCities] = useState<City[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    getCities()
      .then((data) => {
        if (active) setCities(data);
      })
      .catch(() => {
        if (active) setError("No se pudieron cargar las ciudades.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { cities, loading, error };
}