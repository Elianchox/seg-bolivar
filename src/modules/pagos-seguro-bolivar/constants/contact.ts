export interface ContactLink {
  label: string;
  href: string;
}

export const contactLinks: ContactLink[] = [
  { label: "Preguntas frecuentes", href: "#" },
  { label: "PQRS", href: "#" },
  { label: "Nuestros asesores", href: "#" },
];

export interface ContactPhone {
  label: string;
  value: string;
}

export const contactPhones: ContactPhone[] = [
  { label: "Línea nacional", value: "018000180899" },
  { label: "Línea móvil", value: "(+57) 310 315 7550" },
];