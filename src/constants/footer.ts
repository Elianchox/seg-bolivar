import type { ComponentType } from "react";
import { IconFacebook } from "@/components/ui/icons/icon-facebook";
import { IconInstagram } from "@/components/ui/icons/icon-instagram";
import { IconLinkedin } from "@/components/ui/icons/icon-linkedin";
import { IconTiktok } from "@/components/ui/icons/icon-tiktok";
import { IconYoutube } from "@/components/ui/icons/icon-youtube";

export interface FooterLink {
  href: string;
  label: string;
}

export interface FooterBlock {
  title: string;
  links: FooterLink[];
}

export const footerColumns: FooterBlock[][] = [
  [
    {
      title: "Acerca de nosotros",
      links: [
        { href: "#", label: "Directorio de confianza" },
        { href: "#", label: "Trabaja con nosotros" },
        { href: "#", label: "Enconjunto" },
        { href: "#", label: "Certificaciones" },
        { href: "#", label: "Código de ética" },
        { href: "#", label: "Véndenos tu lote" },
        { href: "#", label: "ABC Sagrilaft" },
      ],
    },
  ],
  [
    {
      title: "Accesos rápidos",
      links: [
        { href: "#", label: "Ir al inicio" },
        { href: "#", label: "Cómpranos desde el exterior" },
        { href: "#", label: "Véndenos tu lote" },
        { href: "#", label: "Proyectos vendidos" },
        { href: "#", label: "Mapa del sitio" },
        { href: "#", label: "Preguntas frecuentes" },
      ],
    },
  ],
  [
    {
      title: "Proveedores",
      links: [
        { href: "#", label: "Registro nuevo proveedor" },
        { href: "#", label: "Proveedores 24/7" },
        { href: "#", label: "Proveedores inclusivos" },
      ],
    },
    {
      title: "Atencion al cliente",
      links: [{ href: "#", label: "Cuéntanos tus solicitudes" }],
    },
  ],
  [
    {
      title: "Políticas",
      links: [
        { href: "#", label: "Políticas de calidad y privacidad" },
        { href: "#", label: "Avisos de privacidad" },
        { href: "#", label: "Alianza Justo Pago" },
      ],
    },
  ],
];

export interface SocialLink {
  href: string;
  label: string;
  Icon: ComponentType<{ className?: string; size?: number }>;
}

export const socialLinks: SocialLink[] = [
  { href: "#", label: "Facebook", Icon: IconFacebook },
  { href: "#", label: "LinkedIn", Icon: IconLinkedin },
  { href: "#", label: "YouTube", Icon: IconYoutube },
  { href: "#", label: "Instagram", Icon: IconInstagram },
  { href: "#", label: "TikTok", Icon: IconTiktok },
];