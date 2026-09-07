export interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

export interface MobileNavItem {
  label: string;
  href?: string;
  action?: "proyectos" | "quienes-somos";
}

export const topLinks: NavLink[] = [
  { label: "Noticias", href: "#" },
  { label: "Soy Cliente Bolívar", href: "#" },
  { label: "Avance de obra", href: "#" },
  { label: "Quiénes somos", href: "#" },
];

export const bottomNav: NavLink[] = [
  { label: "Proyectos", href: "#" },
  { label: "Sala de ventas", href: "#" },
  { label: "Negocio Sostenible", href: "#" },
  { label: "Locales comerciales", href: "#" },
  { label: "Pagos en línea", href: "/pagos-en-linea", active: true },
];

export const mobileNavItems: MobileNavItem[] = [
  { label: "Inicio", href: "#" },
  { label: "Proyectos", action: "proyectos" },
  { label: "Sala de ventas", href: "#" },
  { label: "Soy Cliente Bolívar", href: "#" },
  { label: "Locales comerciales", href: "#" },
  { label: "Pagos en línea", href: "/pagos-en-linea" },
  { label: "Quiénes somos", action: "quienes-somos" },
  { label: "Noticias", href: "#" },
  { label: "Véndenos tu lote", href: "#" },
  { label: "Proyectos vendidos", href: "#" },
];