"use client";

import { useEffect, useState } from "react";
import { getMenuProyectos } from "@pagos/features/proyectos/api/get-menu-proyectos";
import type { MenuProyecto } from "@pagos/features/proyectos/types/menu-proyecto";

interface UseMenuProyectos {
  proyectos: MenuProyecto[];
  loading: boolean;
  error: string | null;
}

export function useMenuProyectos(): UseMenuProyectos {
  const [proyectos, setProyectos] = useState<MenuProyecto[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;

    getMenuProyectos()
      .then((data) => {
        if (active) setProyectos(data);
      })
      .catch(() => {
        if (active) setError("No se pudieron cargar los proyectos.");
      })
      .finally(() => {
        if (active) setLoading(false);
      });

    return () => {
      active = false;
    };
  }, []);

  return { proyectos, loading, error };
}