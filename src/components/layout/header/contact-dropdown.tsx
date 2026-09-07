import { contactLinks, contactPhones } from "@/constants/contact";
import { IconArrowDown } from "@/components/ui/icons/icon-arrow-down";
import { IconMessage } from "@/components/ui/icons/icon-message";
import { IconWhatsapp } from "@/components/ui/icons/icon-whatsapp";

export function ContactDropdown() {
  return (
    <div className="relative">
      <button
        type="button"
        className="inline-flex h-[44px] items-center gap-2 rounded-[30px] bg-brand-dark px-6 py-[10px] text-[14px] font-bold text-white"
      >
        Contáctanos
        <IconArrowDown className="text-white" />
      </button>
      <ul className="absolute right-0 top-full z-[99] mt-2 hidden w-[384px] rounded-[6px] border border-[#ced4da] bg-surface shadow-[0_6px_12px_rgba(108,117,125,0.20)]">
        <li className="px-0 py-[12.8px]">
          <div className="flex justify-around px-[6.4px]">
            {contactPhones.map(({ label, value }) => (
              <div key={label}>
                <p className="mb-2 text-[14px] font-normal leading-[14px] tracking-[0.035px] text-text-muted">
                  {label}
                </p>
                <h4 className="mb-0 text-[20px] font-bold leading-[20px] tracking-[-0.05px] text-ink">
                  {value}
                </h4>
              </div>
            ))}
          </div>
        </li>
        <li className="bg-surface-muted py-[19.2px]">
          <div className="flex justify-around">
            <a
              href="#"
              className="flex items-center gap-2 text-[14px] font-bold leading-[14px] tracking-[-0.098px] text-brand-dark"
            >
              <IconWhatsapp size={24} />
              <span>Chat en WhatsApp</span>
            </a>
            <a
              href="#"
              className="flex items-center gap-2 text-[14px] font-bold leading-[14px] tracking-[-0.098px] text-brand-dark"
            >
              <IconMessage size={24} />
              <span>Escríbenos</span>
            </a>
          </div>
        </li>
        <li className="px-0 py-[12.8px]">
          <ul className="flex items-center justify-around px-2">
            {contactLinks.map(({ label, href }, index) => (
              <li key={label}>
                <a
                  href={href}
                  className={`relative text-[12px] font-normal text-ink hover:underline ${
                    index < contactLinks.length - 1
                      ? "after:absolute after:right-[-1.4rem] after:top-[6px] after:h-[3px] after:w-[3px] after:rounded-full after:bg-ink after:content-['']"
                      : ""
                  }`}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </div>
  );
}