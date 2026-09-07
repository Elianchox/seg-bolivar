"use client";

import { IconChevronLeft } from "@/components/ui/icons/icon-chevron-left";
import { IconChevronRight } from "@/components/ui/icons/icon-chevron-right";
import { HomeSlide } from "@/features/home/components/home-slide";
import { bannerSlides } from "@/features/home/data/banner-slides";
import { useBannerCarousel } from "@/features/home/hooks/use-banner-carousel";

export function HomeBanner() {
  const slideCount = bannerSlides.length;
  const { index, goTo, goNext, goPrev, setPaused } = useBannerCarousel({
    slideCount,
  });

  return (
    <section
      aria-roledescription="carousel"
      aria-label="Destacados"
      className="relative overflow-hidden bg-ink"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div
        className="flex transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {bannerSlides.map((slide, i) => (
          <div
            key={slide.id}
            role="group"
            aria-roledescription="slide"
            aria-label={`${i + 1} de ${slideCount}`}
            aria-hidden={i !== index}
            className="w-full shrink-0"
          >
            <HomeSlide slide={slide} />
          </div>
        ))}
      </div>

      <div className="pointer-events-none absolute inset-x-0 top-[40%] z-[9] mx-auto hidden w-[95%] md:block">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Anterior"
          className="pointer-events-auto float-left flex h-9 w-9 items-center justify-center rounded-[12px] bg-surface text-brand-dark shadow-[0_6px_12px_0_#6C757D33] outline-none"
        >
          <IconChevronLeft size={14} className="text-brand-dark" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Siguiente"
          className="pointer-events-auto float-right flex h-9 w-9 items-center justify-center rounded-[12px] bg-surface text-brand-dark shadow-[0_6px_12px_0_#6C757D33] outline-none"
        >
          <IconChevronRight size={14} className="text-brand-dark" />
        </button>
      </div>

      <div className="absolute inset-x-0 bottom-6 z-[9] flex justify-center gap-2 px-6 md:bottom-[3.5rem] md:justify-start md:px-28">
        {bannerSlides.map((slide, i) => (
          <button
            key={slide.id}
            type="button"
            onClick={() => goTo(i)}
            aria-label={`Ir a la diapositiva ${i + 1}`}
            aria-current={i === index}
            className="h-[3px] w-[60px] outline-none"
          >
            <span
              className={`block h-[3px] w-full transition-colors ${
                i === index ? "bg-brand md:bg-brand-dark" : "bg-brand/30 md:bg-white/30"
              }`}
            />
          </button>
        ))}
      </div>
    </section>
  );
}