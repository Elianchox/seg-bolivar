"use client";

import { useState } from "react";
import { Container } from "@pagos/components/ui/container";
import { ContactTab } from "@pagos/features/home/components/contact-tab";
import { HomeSteps } from "@pagos/features/home/components/home-steps";
import { PillsTabs } from "@pagos/features/home/components/pills-tabs";
import type { HomeTab } from "@pagos/features/home/components/pills-tabs";
import { ProjectFilterFlow } from "@pagos/features/home/components/project-filter-flow";
import { ProjectsTab } from "@pagos/features/home/components/projects-tab";

export function HomeStepsTabs() {
  const [activeTab, setActiveTab] = useState<HomeTab>("projects");

  return (
    <>
      <section className="bg-soft-cream">
        <div className="py-[25px]" aria-hidden="true" />
        <Container>
          <ProjectFilterFlow />
          <div className="py-[25px]" aria-hidden="true" />
          <HomeSteps />
        </Container>
        <div className="py-[25px]" aria-hidden="true" />
        <PillsTabs activeTab={activeTab} onTabChange={setActiveTab} />
      </section>
      <section>
        <Container>
          <div
            id="pills-projects"
            role="tabpanel"
            aria-labelledby="pills-projects-tab"
            hidden={activeTab !== "projects"}
          >
            <ProjectsTab />
          </div>
          <div
            id="pills-contacto"
            role="tabpanel"
            aria-labelledby="pills-contacto-tab"
            hidden={activeTab !== "contacto"}
          >
            <ContactTab />
          </div>
        </Container>
        <div className="py-[25px]" aria-hidden="true" />
      </section>
    </>
  );
}