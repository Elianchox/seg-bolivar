"use client";

import { Carousel } from "@pagos/components/ui/carousel";
import { ProjectCard } from "@pagos/features/home/components/project-card";
import type { HomeProject } from "@pagos/features/home/data/projects";

const CARD_GAP = 30;

const PER_VIEW = {
  base: 1,
  breakpoints: [
    { minWidth: 768, value: 2 },
    { minWidth: 1201, value: 3 },
  ],
};

interface ProjectsCarouselProps {
  projects: HomeProject[];
}

export function ProjectsCarousel({ projects }: ProjectsCarouselProps) {
  return (
    <Carousel
      items={projects}
      renderItem={(project) => <ProjectCard project={project} />}
      perView={PER_VIEW}
      gap={CARD_GAP}
      gapClassName="gap-[30px]"
    />
  );
}