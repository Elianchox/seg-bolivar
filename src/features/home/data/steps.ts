import iconStep1 from "@/assets/home/steps/icono-step-1-home.webp";
import iconStep2 from "@/assets/home/steps/icono-step-2-home.webp";
import iconStep3 from "@/assets/home/steps/icono-step-3-home.webp";
import iconStep4 from "@/assets/home/steps/icono-step-4-home.webp";
import iconStep5 from "@/assets/home/steps/icono-step-5-home.webp";

export interface StepPart {
  text: string;
  href?: string;
  external?: boolean;
  brBefore?: boolean;
}

export interface HomeStep {
  id: string;
  icon: string;
  parts: StepPart[];
}

export const homeSteps: HomeStep[] = [
  {
    id: "step-1",
    icon: iconStep1.src,
    parts: [
      { text: "Explora nuestra " },
      {
        text: "oferta de proyectos",
        href: "#",
      },
    ],
  },
  {
    id: "step-2",
    icon: iconStep2.src,
    parts: [{ text: "Elige, compara y enamórate de la opción que más te guste" }],
  },
  {
    id: "step-3",
    icon: iconStep3.src,
    parts: [
      { text: "Déjanos tus datos", href: "#" },
      { text: " o " },
      {
        text: "Contáctanos en WhatsApp",
        href: "#",
      },
    ],
  },
  {
    id: "step-4",
    icon: iconStep4.src,
    parts: [
      {
        text: "Te guiaremos en el proceso de separación, gestión del crédito y firma de documentos",
      },
    ],
  },
  {
    id: "step-5",
    icon: iconStep5.src,
    parts: [
      { text: "Disfruta de " },
      { text: "nuestros servicios y ", brBefore: true },
      {
        text: "Refiere a tu favorito",
        href: "#",
      },
    ],
  },
];