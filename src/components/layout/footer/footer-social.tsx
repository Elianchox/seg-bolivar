import { socialLinks } from "@/constants/footer";
import { IconLogo } from "@/components/ui/icons/icon-logo";
import { Typography } from "@/components/ui/typography";

export function FooterSocial() {
  return (
    <div className="bg-cream">
      <div className="mx-auto px-4 md:px-0 md:max-w-[720px] lg:max-w-[960px]">
        <div className="flex items-end justify-start md:justify-between">
          <div className="relative">
            <IconLogo className="absolute bottom-0 -left-4 md:left-0" width={78} height={98} />
          </div>
          <div className="flex flex-col items-start justify-between gap-2 py-[0.55rem] pl-24 md:flex-row md:items-center md:justify-between md:gap-[1.1rem] md:py-[1.3rem] md:pl-0">
            <Typography variant="body-sm" className="leading-[0.875rem]! tracking-[0.035px] text-ink">
              Síguenos en nuestras redes sociales
            </Typography>
            <ul className="m-0 mt-[3px] flex w-full list-none justify-between p-0 md:block md:w-auto">
              {socialLinks.map(({ href, label, Icon }, idx) => (
                <li key={idx} className="inline-block pr-2 last:pr-0">
                  <a href={href} className="block" aria-label={label}>
                    <Icon />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}