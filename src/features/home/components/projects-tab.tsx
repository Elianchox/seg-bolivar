import { Spacer } from "@/components/ui/spacer";
import { ProjectsCarousel } from "@/features/home/components/projects-carousel";
import { homeProjects } from "@/features/home/data/projects";

export function ProjectsTab() {
  return (
    <>
      <Spacer size="sm" />
      <ProjectsCarousel projects={homeProjects} />
    </>
  );
}