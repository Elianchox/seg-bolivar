"use client";

import { Carousel } from "@pagos/components/ui/carousel";
import { NewsCard } from "@pagos/features/home/components/news-card";
import type { HomeNewsItem } from "@pagos/features/home/data/news";

const CARD_GAP = 25;

const PER_VIEW = {
  base: 1,
  breakpoints: [{ minWidth: 768, value: 2 }],
};

interface NewsCarouselProps {
  news: HomeNewsItem[];
}

export function NewsCarousel({ news }: NewsCarouselProps) {
  return (
    <Carousel
      items={news}
      renderItem={(item) => <NewsCard news={item} />}
      perView={PER_VIEW}
      gap={CARD_GAP}
      gapClassName="gap-[25px]"
      prevInsetClassName="relative left-[-4rem]"
      nextInsetClassName="relative right-[-4rem]"
      arrowColorClassName="text-text"
      showDots={false}
    />
  );
}