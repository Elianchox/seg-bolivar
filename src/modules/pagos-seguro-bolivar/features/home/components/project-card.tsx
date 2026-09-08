import Image from "next/image";
import { IconArea } from "@pagos/components/ui/icons/icon-area";
import { IconArrowRight } from "@pagos/components/ui/icons/icon-arrow-right";
import { IconBath } from "@pagos/components/ui/icons/icon-bath";
import { IconBed } from "@pagos/components/ui/icons/icon-bed";
import { IconLivingRoom } from "@pagos/components/ui/icons/icon-living-room";
import { IconMessage } from "@pagos/components/ui/icons/icon-message";
import { Spacer } from "@pagos/components/ui/spacer";
import type { HomeProject } from "@pagos/features/home/data/projects";

interface ProjectCardProps {
  project: HomeProject;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div className="relative">
      <span className="absolute -top-[14px] left-[15px] z-[99] rounded-[4px] bg-pink px-[1.2rem] py-[0.3rem] text-[0.75rem] font-normal uppercase text-white">
        {project.label}
      </span>
      <div className="relative my-8 overflow-hidden rounded-[12px] transition-shadow hover:shadow-[0_6px_12px_0_#6C757D33]">
        <a href="#" className="relative block h-[205px]">
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </a>
        <div className="rounded-b-[12px] border border-surface-muted px-[1.2rem] pb-[1.8rem] pt-4">
          <h3 className="text-start text-[1.25rem] font-bold leading-[1.25rem]">
            {project.title}
          </h3>
          <Spacer size="xs" />
          <p className="text-start font-display text-[14px] font-normal leading-[18px] tracking-[0.25px]">
            {project.city} – {project.department}
          </p>
          <Spacer size="xs" />
          <span className="block max-w-max rounded-[3px] border border-brand-deep px-3 py-1 text-[0.75rem] font-bold text-brand-deep">
            {project.classification}
          </span>
          <Spacer size="sm" />
          <div className="flex items-center justify-between text-center">
            <div>
              <IconArea size={24} className="text-text-muted" />
              <span className="mt-[0.6rem] block text-[0.75rem] font-normal text-text-muted">
                {project.area}
              </span>
            </div>
            <div>
              <IconBed size={24} className="text-text-muted" />
              <span className="mt-[0.6rem] block text-[0.75rem] font-normal text-text-muted">
                {project.bedrooms}
              </span>
            </div>
            {project.bathrooms && (
              <div>
                <IconBath size={24} className="text-text-muted" />
                <span className="mt-[0.6rem] block text-[0.75rem] font-normal text-text-muted">
                  {project.bathrooms}
                </span>
              </div>
            )}
            {project.hasSalaComedor && (
              <div>
                <IconLivingRoom size={24} className="text-text-muted" />
                <span className="mt-[0.6rem] block text-[0.75rem] font-normal text-text-muted">
                  Sala comedor
                </span>
              </div>
            )}
          </div>
          <Spacer size="sm" />
          <div className="flex flex-col items-start font-normal">
            <span className="flex items-center justify-center gap-3 text-[0.85rem] font-normal leading-[0.85rem] text-brand-dark">
              Precio desde: <strong className="text-[1.2rem]">{project.price}</strong>
            </span>
          </div>
          <Spacer size="sm" />
          <p className="line-clamp-5 h-[73px] overflow-hidden text-[0.75rem] font-normal text-text-muted">
            {project.description}
          </p>
          <Spacer size="sm" />
          <div className="flex items-center justify-between font-normal">
            <a
              href="#"
              className="flex items-center justify-center gap-[10px] rounded-[25px] border border-brand-dark px-6 py-[0.8rem] text-[0.875rem] font-bold text-brand-dark"
            >
              <span>Ver proyecto</span>
              <IconArrowRight className="text-brand-dark" />
            </a>
            {!project.external && project.contactUuid && (
              <a
                href="#"
                className="flex items-center justify-center gap-[10px] rounded-[25px] border border-brand-dark bg-brand-dark px-6 py-[0.8rem] text-[14px] font-bold text-white"
              >
                <span>Contactar</span>
                <IconMessage size={22} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}