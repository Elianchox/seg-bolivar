import type { ComponentType, ReactNode } from "react";
import { IconChat } from "@/components/ui/icons/icon-chat";
import { IconMail } from "@/components/ui/icons/icon-mail";
import { IconMapPin } from "@/components/ui/icons/icon-map-pin";
import { IconMessage } from "@/components/ui/icons/icon-message";
import { IconPhone } from "@/components/ui/icons/icon-phone";
import { Typography } from "@/components/ui/typography";

interface ContactItem {
  icon: ComponentType<{ className?: string; size?: number }>;
  title: string;
  children: ReactNode;
}

const contactItems: ContactItem[] = [
  {
    icon: IconMapPin,
    title: "Localízanos",
    children: (
      <>
        Encuentra todas
        <a href="#" className="text-brand-dark underline">
          {" "}nuestras salas de ventas en el país
        </a>
        .
      </>
    ),
  },
  {
    icon: IconPhone,
    title: "Contáctanos",
    children: (
      <>
        Teléfono:
        <a href="#" className="text-brand-dark underline">
          {" "}(+57) 310 315 7550
        </a>
      </>
    ),
  },
  {
    icon: IconMessage,
    title: "Escríbenos",
    children: (
      <>
        Envíanos tu solicitud
        <a href="#" className="text-brand-dark underline">
          {" "}haciendo clic aquí
        </a>
        .
      </>
    ),
  },
  {
    icon: IconChat,
    title: "Hablemos",
    children: (
      <>
        Inicia una nueva conversación por
        <a
          href="#"
          className="text-brand-dark underline"
        >
          {" "}WhatsApp
        </a>
        .
      </>
    ),
  },
  {
    icon: IconMail,
    title: "Newsletter",
    children: (
      <>
        <button type="button" className="text-brand-dark underline">
          Haz clic aquí{" "}
        </button>
        y recibe lo último de Bolívar.
      </>
    ),
  },
];

export function FooterContact() {
  return (
    <div className="mx-auto px-4 md:px-0 md:max-w-[720px] lg:max-w-[960px]">
      <div className="py-[15px]" />
      <div className="mx-auto flex max-w-[1320px] flex-col md:flex-row md:flex-wrap">
        {contactItems.map((item) => (
          <div key={item.title} className="mb-[1.4rem] w-full px-3 md:mb-0 md:w-auto md:flex-1">
            <div className="flex flex-col">
              <item.icon size={30} className="text-ink" />
              <div className="py-[5px]" />
              <Typography as="h3" variant="section-title">
                {item.title}
              </Typography>
              <div className="py-[5px]" />
              <Typography variant="body" className="leading-[1.1rem]! tracking-[0.08px]">
                {item.children}
              </Typography>
            </div>
          </div>
        ))}
      </div>
      <div className="py-[15px]" />
    </div>
  );
}