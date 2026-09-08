import Image from "next/image";
import { IconArrowRight } from "@pagos/components/ui/icons/icon-arrow-right";
import { Spacer } from "@pagos/components/ui/spacer";
import type { HomeNewsItem } from "@pagos/features/home/data/news";

interface NewsCardProps {
  news: HomeNewsItem;
}

export function NewsCard({ news }: NewsCardProps) {
  return (
    <div className="overflow-hidden rounded-[12px] bg-surface">
      <a href="#" className="block">
        <Image
          src={news.image}
          alt=""
          width={456}
          height={222}
          className="h-[222px] w-full"
        />
      </a>
      <div className="px-4 pb-4 pt-6">
        <div className="flex items-center gap-[12.8px]">
          <span className="py-[6.4px] text-[0.75rem] font-normal leading-[16px] text-text-muted">
            {news.category}
          </span>
          <span className="text-[0.75rem] font-normal leading-[14px] text-text-muted">
            {news.date}
          </span>
        </div>
        <Spacer size="sm" />
        <h2 className="mb-2 h-[43px] line-clamp-2 text-[1.25rem] font-bold leading-[21.6px] text-text">
          {news.title}
        </h2>
        <Spacer size="xs" />
        <p className="h-[73px] line-clamp-4 text-[0.875rem] font-normal leading-[18px] text-text-muted">
          {news.excerpt}
        </p>
        <Spacer size="md" />
        <a
          href="#"
          className="flex items-center gap-[4.8px] text-base font-semibold leading-[17.6px] text-brand-dark"
        >
          <span>Leer artículo completo</span>
          <IconArrowRight width={14} height={14} className="text-brand-dark" />
        </a>
        <Spacer size="sm" />
      </div>
    </div>
  );
}
