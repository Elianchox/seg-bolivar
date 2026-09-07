import type { ReactNode } from "react";
import { SectionHeading } from "@/features/home/components/section-heading";
import { Spacer } from "@/components/ui/spacer";
import { IconArrowBottom } from "@/components/ui/icons/icon-arrow-bottom";
import { IconArrowFilter } from "@/components/ui/icons/icon-arrow-filter";
import { IconFilterCity } from "@/components/ui/icons/icon-filter-city";
import { IconFilterPrice } from "@/components/ui/icons/icon-filter-price";
import { IconFilterType } from "@/components/ui/icons/icon-filter-type";
import {
  classificationOptions,
  locationOptions,
  projectTypeOptions,
  typeOptions,
} from "@/features/home/data/filter-options";
import type { FilterOption } from "@/features/home/data/filter-options";

const PRICE_RANGE = {
  min: "$50.000.000",
  max: "$4.000.000.000",
} as const;

interface FilterSelectProps {
  id: string;
  options: FilterOption[];
  leadingIcon?: ReactNode;
}

function FilterSelect({ id, options, leadingIcon }: FilterSelectProps) {
  return (
    <div className="relative block">
      <select
        id={id}
        defaultValue={options[0]?.value}
        className={`h-[45px] w-full appearance-none rounded-[6px] border border-brand-dark bg-surface text-brand-dark outline-none ${
          leadingIcon ? "pl-[2.8rem]" : "pl-4"
        } pr-[1.95rem]`}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      <IconArrowBottom
        aria-hidden="true"
        width={10}
        height={5.55}
        className="pointer-events-none absolute right-[10px] top-1/2 -translate-y-1/2 text-brand"
      />
      {leadingIcon && (
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-[0.8rem] top-1/2 -translate-y-1/2"
        >
          {leadingIcon}
        </span>
      )}
    </div>
  );
}

function PriceBlock() {
  return (
    <div className="text-center">
      <div className="flex items-center justify-center">
        <IconFilterPrice className="shrink-0 text-brand" />
        <p className="mb-0 text-base font-normal leading-[22px] text-brand-dark">
          Presupuesto
        </p>
      </div>
      <Spacer size="xs" />
      <div className="relative mx-auto h-[0.2em] w-[70%] bg-[#d6d6d6]">
        <div className="absolute left-0 top-[2px] h-[0.2em] w-full bg-[#56C271]" />
        <div className="absolute left-0 top-[-0.2em] h-3 w-3 rounded-full bg-brand-dark" />
        <div className="absolute right-0 top-[-0.2em] h-3 w-3 rounded-full bg-brand-dark" />
      </div>
      <div className="mx-auto mt-4 flex items-center justify-between gap-5">
        <label className="text-[0.875rem] font-normal leading-[1.125rem] text-ink">
          Precio desde
          <span className="block font-bold">{PRICE_RANGE.min}</span>
        </label>
        <label className="text-[0.875rem] font-normal leading-[1.125rem] text-ink">
          Precio hasta
          <span className="block font-bold">{PRICE_RANGE.max}</span>
        </label>
      </div>
    </div>
  );
}

export function ProjectFilterFlow() {
  return (
    <>
      <SectionHeading title="Encuentra tu proyecto ideal" />
      <Spacer size="sm" />
      <div className="flex flex-col items-center justify-center gap-5 md:flex-row md:flex-wrap">
        <div className="w-full text-center md:w-auto">
          <FilterSelect id="mainFilterFlow" options={projectTypeOptions} />
        </div>
        <div className="w-full text-center md:w-auto">
          <FilterSelect
            id="ubiFilterFlow"
            options={locationOptions}
            leadingIcon={<IconFilterCity className="text-brand" />}
          />
        </div>
        <div className="w-full text-center md:w-auto">
          <FilterSelect
            id="typeFilterFlow"
            options={typeOptions}
            leadingIcon={<IconFilterType className="text-brand" />}
          />
        </div>
        <div className="w-full text-center md:w-auto">
          <FilterSelect id="clasiFilterFlow" options={classificationOptions} />
        </div>
        <div className="w-full text-center md:w-3/12">
          <PriceBlock />
        </div>
        <div className="w-full text-center md:w-2/12">
          <button
            type="button"
            disabled
            className="mt-4 flex h-12 w-full items-center justify-center gap-4 rounded-[35px] bg-surface-muted px-4 py-4 text-[0.875rem] font-bold leading-[1.125rem] text-text-muted"
          >
            Ver mi proyecto
            <IconArrowFilter className="shrink-0 text-text-muted" />
          </button>
        </div>
      </div>
    </>
  );
}
