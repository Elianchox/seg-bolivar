import { Spacer } from "@pagos/components/ui/spacer";
import { ProjectsCarousel } from "@pagos/features/home/components/projects-carousel";
import { homeProjects } from "@pagos/features/home/data/projects";

export function ProjectsTab() {
  return (
    <>
      <Spacer size="sm" />
      <ProjectsCarousel projects={homeProjects} />
    </>
  );
}