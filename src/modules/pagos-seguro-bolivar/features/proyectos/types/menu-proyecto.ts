export interface MenuUbicacion {
  id: string;
  nombre: string;
}

export interface MenuProyecto {
  id: string;
  nombre: string;
  ciudad?: MenuUbicacion;
  sector?: MenuUbicacion;
  barrio?: MenuUbicacion | null;
  link: string;
  is_link_external: boolean;
  status: string;
}