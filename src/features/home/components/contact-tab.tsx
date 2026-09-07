import { ContactCard } from "@/features/home/components/contact-card";
import { IconContactForm } from "@/components/ui/icons/icon-contact-form";
import { IconWhatsapp } from "@/components/ui/icons/icon-whatsapp";
import { Spacer } from "@/components/ui/spacer";
import { SectionHeading } from "@/features/home/components/section-heading";
import imgConectate from "@/assets/home/contact/img-conectate-home.png";
import imgHablemos from "@/assets/home/contact/img-hablemos-wsp-home.png";

export function ContactTab() {
  return (
    <>
      <div className="py-[30px]" aria-hidden="true" />
      <SectionHeading title="Conéctate a tu manera: Formulario o WhatsApp" />
      <Spacer size="md" />
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="w-full md:w-1/2 md:px-3">
          <ContactCard
            href="#"
            bgClass="bg-surface-muted"
            icon={<IconContactForm size={43} className="text-ink" />}
            title={
              <>
                Conéctate con <br /> Nosotros
              </>
            }
            buttonText="Ir al formulario"
            image={imgConectate.src}
            imageAlt="Conéctate con nosotros"
          />
        </div>
        <div className="w-full md:w-1/2 md:px-3">
          <ContactCard
            href="#"
            bgClass="bg-sun"
            icon={<IconWhatsapp size={43} className="text-ink" />}
            title={
              <>
                ¡Hablemos por <br /> WhatsApp!
              </>
            }
            buttonText="Iniciar Chat"
            image={imgHablemos.src}
            imageAlt="Hablemos por WhatsApp"
            className="mt-[30px] md:mt-0"
          />
        </div>
      </div>
    </>
  );
}
