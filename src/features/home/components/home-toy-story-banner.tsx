import Image from "next/image";
import { Container } from "@/components/ui/container";
import bannerDesktop from "@/assets/home/banners/banner-toy-story-desktop.webp";
import bannerMobile from "@/assets/home/banners/banner-toy-story-mobil.webp";

export function HomeToyStoryBanner() {
  return (
    <section className="sectionToyStoryBanner">
      <div className="py-[20px]" aria-hidden="true" />
      <Container>
        <div className="text-center">
          <Image
            src={bannerDesktop.src}
            alt="Banner Toy Story 5"
            width={1320}
            height={300}
            className="hidden h-auto w-full rounded-[12px] md:block"
          />
          <Image
            src={bannerMobile.src}
            alt="Banner Toy Story 5"
            width={1320}
            height={300}
            className="block h-auto w-full rounded-[12px] md:hidden"
          />
        </div>
      </Container>
      <div className="py-[20px]" aria-hidden="true" />
    </section>
  );
}
