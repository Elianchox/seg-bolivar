"use client";

import { useState } from "react";
import { IconFilter } from "@/components/ui/icons/icon-filter";
import { IconSearch } from "@/components/ui/icons/icon-search";
import {
  ActiveFilterTags,
  type ActiveFilterTag,
} from "@/features/listado-pagos-en-linea/components/active-filter-tags";
import { useCities } from "@/features/listado-pagos-en-linea/hooks/use-cities";
import type { City } from "@/features/listado-pagos-en-linea/types/city";

interface FilterFormProps {
  cities: City[];
  city: string;
  search: string;
  onCityChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

function FilterForm({ cities, city, search, onCityChange, onSearchChange }: FilterFormProps) {
  return (
    <form className="relative z-[9]" noValidate>
      <div className="flex flex-wrap gap-y-3 md:gap-y-0">
        <div className="w-full md:w-1/3 md:pr-3">
          <select
            value={city}
            onChange={(e) => onCityChange(e.target.value)}
            className="h-[45px] w-full appearance-none rounded-[12px] border border-[#efecec] bg-white px-[0.95rem] py-[0.375rem] pr-[1.95rem] text-text outline-none shadow-none"
            style={{
              backgroundImage:
                "url(https://www.constructorabolivar.com/themes/custom/constructorabolivar/assets/iconos/ico-arrow-bottom.svg)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "right 10px center",
              backgroundSize: "10px",
            }}
          >
            <option value="">Selecciona la ciudad de tu proyecto</option>
            {cities.map((option) => (
              <option key={option.tid} value={option.tid}>
                {option.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-full md:w-2/3 md:pl-3">
          <div className="flex overflow-hidden rounded-[12px] border border-[#efecec]">
            <input
              autoComplete="off"
              type="text"
              value={search}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Escribe el nombre del proyecto"
              aria-label="Escribe el nombre del proyecto"
              className="h-[45px] w-full rounded-[12px] border-0 bg-white px-[0.95rem] py-[0.375rem] text-text outline-none shadow-none"
            />
            <button
              type="button"
              className="flex items-center justify-center border-0 bg-white px-4"
            >
              <IconSearch size={24} className="text-ink" />
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}

interface FilterBarProps {
  city: string;
  search: string;
  onCityChange: (value: string) => void;
  onSearchChange: (value: string) => void;
}

export function FilterBar({ city, search, onCityChange, onSearchChange }: FilterBarProps) {
  const { cities, loading, error } = useCities();
  const [open, setOpen] = useState(false);

  const hasCities = !loading && !error;

  const tags: ActiveFilterTag[] = [];
  if (search.trim()) {
    tags.push({
      key: "search",
      label: `Búsqueda: ${search}`,
      onRemove: () => onSearchChange(""),
    });
  }
  if (city) {
    const cityName = cities.find((option) => option.tid === city)?.name;
    if (cityName) {
      tags.push({
        key: "city",
        label: cityName,
        onRemove: () => onCityChange(""),
      });
    }
  }

  const handleClearAll = () => {
    onCityChange("");
    onSearchChange("");
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <div className="flex w-full justify-center md:hidden">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex w-full items-center justify-center gap-[0.6rem] rounded-[40px] border border-[#095636] px-4 py-[0.7rem] text-center text-base font-medium text-[#095636]"
          >
            <span className="text-base font-medium text-[#095636]">
              Encuentra tu proyecto
            </span>
            <IconFilter size={24} className="text-[#095636]" />
          </button>
        </div>
        <div className="hidden w-full md:block">
          <FilterForm
            cities={hasCities ? cities : []}
            city={city}
            search={search}
            onCityChange={onCityChange}
            onSearchChange={onSearchChange}
          />
        </div>
      </div>

      <ActiveFilterTags tags={tags} onClearAll={handleClearAll} />

      {open && (
        <div
          className="fixed inset-0 z-[100000] bg-black/50"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Filtra tu búsqueda"
        className={`fixed inset-x-0 bottom-0 z-[100000] flex max-h-[70vh] flex-col rounded-t-[16px] bg-white p-4 shadow-[0_0.125rem_0.25rem_rgba(0,0,0,0.075)] transition-transform ${
          open ? "translate-y-0" : "pointer-events-none translate-y-full"
        }`}
      >
        <div className="flex items-center justify-between">
          <h5 className="mb-0 text-lg font-semibold text-ink">
            Filtra tu búsqueda
          </h5>
          <button
            type="button"
            aria-label="Cerrar"
            onClick={() => setOpen(false)}
            className="flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-surface-muted"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M.293.293a1 1 0 0 1 1.414 0L8 6.586 14.293.293a1 1 0 1 1 1.414 1.414L9.414 8l6.293 6.293a1 1 0 0 1-1.414 1.414L8 9.414l-6.293 6.293a1 1 0 0 1-1.414-1.414L6.586 8 .293 1.707a1 1 0 0 1 0-1.414Z" />
            </svg>
          </button>
        </div>
        <div className="mt-4 overflow-y-auto mb-8">
          <FilterForm
            cities={hasCities ? cities : []}
            city={city}
            search={search}
            onCityChange={onCityChange}
            onSearchChange={onSearchChange}
          />
        </div>
      </div>
    </>
  );
}