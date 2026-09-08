import type { MenuProyecto } from "@pagos/features/proyectos/types/menu-proyecto";
import { apiGet } from "@pagos/lib/api";

interface MenuProyectosResponse {
  proyectos: MenuProyecto[];
}

export async function getMenuProyectos(): Promise<MenuProyecto[]> {
  const data = await apiGet<MenuProyectosResponse>("/api/menu/proyectos");
  return data.proyectos;
}