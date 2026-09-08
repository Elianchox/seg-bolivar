import Image from "next/image";
import { Spacer } from "@pagos/components/ui/spacer";
import { ButtonLink } from "@pagos/components/ui/button-link";
import { Typography } from "@pagos/components/ui/typography";
import type { BannerSlide } from "@pagos/features/home/data/banner-slides";

interface HomeSlideProps {
  slide: BannerSlide;
}

export function HomeSlide({ slide }: HomeSlideProps) {
  return (
    <div className="flex w-full shrink-0 flex-wrap items-center justify-between">
      <div className="w-[88%] mx-auto pt-12 pb-8 pl-4 md:mx-0 md:w-1/2 md:py-0 md:pl-32 md:pr-16">
        <Typography
          as="h1"
          variant="hero"
          className="text-white md:leading-[46px]"
        >
          {slide.title}
        </Typography>
        <Spacer size="xs" />
        <Typography
          variant="body"
          className="font-normal leading-[22px] tracking-[0.5px] text-white md:leading-4 md:tracking-[0.08px]"
        >
          {slide.description}
        </Typography>
        <Spacer size="md" />
        <ButtonLink
          href="#"
          variant="white"
          className="flex h-12 w-full items-center justify-center font-semibold leading-8 tracking-[-0.08px] text-ink! md:inline-flex md:w-auto md:px-[2.9rem]"
        >
          Conoce más
        </ButtonLink>
      </div>
      <div className="order-first w-full md:order-none md:w-1/2">
        <Image
          src={slide.imageDesktop}
          alt={slide.imageAlt}
          width={850}
          height={426}
          className="hidden h-auto w-full md:block md:h-full md:object-cover md:object-left"
        />
        <Image
          src={slide.imageMobile}
          alt={slide.imageAlt}
          width={850}
          height={426}
          className="block h-auto w-full md:hidden"
        />
      </div>
    </div>
  );
}