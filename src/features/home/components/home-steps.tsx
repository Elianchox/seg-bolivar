import { Fragment } from "react";
import Image from "next/image";
import { Spacer } from "@/components/ui/spacer";
import { SectionHeading } from "@/features/home/components/section-heading";
import { homeSteps } from "@/features/home/data/steps";
import type { StepPart } from "@/features/home/data/steps";

function StepText({ parts }: { parts: StepPart[] }) {
  return (
    <>
      {parts.map((part, index) => (
        <Fragment key={index}>
          {part.brBefore && <br />}
          {part.href ? (
            <a
              href={part.href}
              className="font-semibold text-brand-dark hover:underline"
            >
              {part.text}
            </a>
          ) : (
            part.text
          )}
        </Fragment>
      ))}
    </>
  );
}

export function HomeSteps() {
  return (
    <>
      <SectionHeading title="¡Conoce los 5 pasos para conseguir tu vivienda!" />
      <Spacer size="sm" />
      <div className="flex flex-col md:flex-row md:flex-wrap md:items-center md:justify-center">
        {homeSteps.map((step) => (
          <div
            key={step.id}
            className="mb-6 flex items-center justify-start md:mb-0 md:w-[203px] md:flex-col md:items-center md:justify-center md:text-center"
          >
            <Image
              src={step.icon}
              alt=""
              width={84}
              height={84}
              className="shrink-0"
            />
            <Spacer size="xs" />
            <p className="text-left font-display text-[16px] font-normal leading-[22px] tracking-[0.5px] text-text md:text-center">
              <StepText parts={step.parts} />
            </p>
          </div>
        ))}
      </div>
    </>
  );
}
