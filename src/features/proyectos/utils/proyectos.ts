import type { MenuProyecto, MenuUbicacion } from "@/features/proyectos/types/menu-proyecto";

function proyectosEnVenta(proyectos: MenuProyecto[]): MenuProyecto[] {
  return proyectos.filter(
    (p) => p.status?.toLowerCase() !== "vendido" && Boolean(p.ciudad)
  );
}

export function obtenerCiudades(proyectos: MenuProyecto[]): MenuUbicacion[] {
  return [
    ...new Map(
      proyectosEnVenta(proyectos)
        .map((p) => p.ciudad!)
        .map((ciudad) => [ciudad.id, ciudad])
    ).values(),
  ].sort((a, b) => a.nombre.localeCompare(b.nombre, "es"));
}

export function obtenerSectoresPorCiudad(
  proyectos: MenuProyecto[],
  ciudadId: string
): MenuUbicacion[] {
  return [
    ...new Map(
      proyectosEnVenta(proyectos)
        .filter((p) => p.ciudad?.id === ciudadId && p.sector)
        .map((p) => [p.sector!.id, p.sector!])
    ).values(),
  ];
}

export function obtenerBarriosPorSector(
  proyectos: MenuProyecto[],
  ciudadId: string,
  sectorId: string
): MenuUbicacion[] {
  return [
    ...new Map(
      proyectosEnVenta(proyectos)
        .filter(
          (p) => p.ciudad?.id === ciudadId && p.sector?.id === sectorId && p.barrio
        )
        .map((p) => [p.barrio!.id, p.barrio!])
    ).values(),
  ];
}

export function obtenerProyectos(
  proyectos: MenuProyecto[],
  ciudadId: string,
  sectorId: string,
  barrioId: string | null = null
): MenuProyecto[] {
  return proyectosEnVenta(proyectos).filter((p) => {
    if (p.ciudad?.id !== ciudadId) return false;
    if (p.sector?.id !== sectorId) return false;
    if (barrioId !== null) return p.barrio?.id === barrioId;
    return p.barrio === null;
  });
}

export function sectorTieneProyectosDirectos(
  proyectos: MenuProyecto[],
  ciudadId: string,
  sectorId: string
): boolean {
  return proyectosEnVenta(proyectos).some(
    (p) => p.ciudad?.id === ciudadId && p.sector?.id === sectorId && p.barrio === null
  );
}