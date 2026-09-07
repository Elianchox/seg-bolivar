import type { ReactNode } from "react";
import Image from "next/image";
import { Spacer } from "@/components/ui/spacer";

interface ContactCardProps {
  href: string;
  bgClass: string;
  icon: ReactNode;
  title: ReactNode;
  buttonText: string;
  image: string;
  imageAlt: string;
  className?: string;
}

export function ContactCard({
  href,
  bgClass,
  icon,
  title,
  buttonText,
  image,
  imageAlt,
  className = "",
}: ContactCardProps) {
  return (
    <div className={`relative overflow-hidden rounded-[15px] ${bgClass} ${className}`}>
      <a href={href} className="block">
        <div className="absolute inset-0">
          <div className="flex h-[65%] flex-col items-start justify-center px-4 text-start md:h-full">
            {icon}
            <Spacer size="sm" />
            <h3 className="text-[2rem] font-bold leading-[2.2rem] tracking-[-0.16px] text-ink">
              {title}
            </h3>
            <Spacer size="sm" />
            <span className="inline-block rounded-[30px] border-0 bg-brand-dark px-[1.66rem] py-[0.85rem] text-base font-semibold leading-[1.2rem] tracking-[-0.08px] text-white md:border md:border-ink md:bg-transparent md:text-ink">
              {buttonText}
            </span>
          </div>
        </div>
        <div className="relative h-[278px]">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        </div>
      </a>
    </div>
  );
}