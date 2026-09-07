import Image from "next/image";
import { Container } from "@/components/ui/container";
import { Typography } from "@/components/ui/typography";
import { NewsCarousel } from "@/features/home/components/news-carousel";
import { homeNews } from "@/features/home/data/news";
import toyStoryDesktop from "@/assets/home/banners/image-toy-story-blog-desktop.webp";
import toyStoryMobile from "@/assets/home/banners/image-toy-story-blog-mobil.webp";

const BLOG_URL = "#";

export function HomeNews() {
  return (
    <section className="sectionNewsCB bg-taupe">
      <div className="py-[40px]" aria-hidden="true" />
      <Container>
        <div className="text-center">
          <div className="flex items-center justify-center md:justify-between">
            <Typography
              as="h2"
              variant="heading"
              className="mb-2 text-[30px]! font-bold! leading-[36px]! tracking-normal! text-ink md:text-[32px]! md:leading-[33.6px]! md:tracking-[-0.16px]! md:text-start"
            >
              Entérate de todas las noticias
            </Typography>
            <a
              href={BLOG_URL}
              className="hidden items-center justify-center rounded-[30px] border border-brand-dark bg-surface px-[2.2rem] py-[0.9rem] text-[14px] font-bold leading-[14px] tracking-[-0.098px] text-brand-dark md:inline-flex"
            >
              Ver todas las noticias
            </a>
          </div>
          <div className="py-[15px]" aria-hidden="true" />
        </div>
        <div className="-mx-3 flex flex-wrap items-start">
          <div className="w-full px-3 md:w-1/3">
            <Image
              src={toyStoryDesktop.src}
              alt="Imagen Toy Story 5"
              width={456}
              height={512}
              className="hidden h-[512px] w-full rounded-[12px] md:block"
            />
            <Image
              src={toyStoryMobile.src}
              alt="Imagen Toy Story 5"
              width={456}
              height={512}
              className="block h-[512px] w-full rounded-[12px] md:hidden"
            />
            <div className="py-[20px] md:hidden" aria-hidden="true" />
          </div>
          <div className="w-full px-3 md:w-2/3">
            <NewsCarousel news={homeNews} />
            <div className="py-[15px]" aria-hidden="true" />
            <div className="flex justify-center md:hidden">
              <a
                href={BLOG_URL}
                className="inline-flex items-center justify-center rounded-[30px] border border-brand-dark bg-surface px-[2.2rem] py-[0.9rem] text-[14px] font-bold leading-[14px] tracking-[-0.098px] text-brand-dark"
              >
                Ver todas las noticias
              </a>
            </div>
          </div>
        </div>
      </Container>
      <div className="py-[15px]" aria-hidden="true" />
    </section>
  );
}
