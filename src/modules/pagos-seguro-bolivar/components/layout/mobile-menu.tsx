"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import icoBarMobile from "@pagos/assets/ico-bar-mobile.png";
import { useMenuProyectos } from "@pagos/features/proyectos/hooks/use-menu-proyectos";
import type { MenuUbicacion } from "@pagos/features/proyectos/types/menu-proyecto";
import {
  obtenerBarriosPorSector,
  obtenerCiudades,
  obtenerProyectos,
  obtenerSectoresPorCiudad,
  sectorTieneProyectosDirectos,
} from "@pagos/features/proyectos/utils/proyectos";
import { mobileNavItems } from "@pagos/constants/nav";
import { IconChevronLeft } from "@pagos/components/ui/icons/icon-chevron-left";
import { IconChevronRight } from "@pagos/components/ui/icons/icon-chevron-right";
import { IconFairGreen } from "@pagos/components/ui/icons/icon-fair-green";

type Step = "initial" | "citys" | "sectors" | "barrios" | "projects";

const stepLinkClass =
  "flex items-center justify-between text-xl font-normal text-brand-dark [font-family:var(--font-display)]";

function MensajeSinProyectos({ zona }: { zona: string }) {
  return (
    <p className="p-5 text-base text-brand">
      En {zona}, pronto encontrarás aquí nuestros próximos proyectos.
    </p>
  );
}

interface StepHeaderProps {
  label: string;
  onBack: () => void;
}

function StepHeader({ label, onBack }: StepHeaderProps) {
  return (
    <a
      href="#"
      onClick={(e) => {
        e.preventDefault();
        onBack();
      }}
      className="flex w-full items-center justify-start gap-4 bg-mint p-[1.1rem_1rem] text-base font-semibold text-brand-dark"
    >
      <IconChevronLeft size={14} />
      <span>{label}</span>
    </a>
  );
}

export function MobileMenu() {
  const { proyectos, loading, error } = useMenuProyectos();
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState<Step>("initial");
  const [city, setCity] = useState<MenuUbicacion | null>(null);
  const [sector, setSector] = useState<MenuUbicacion | null>(null);
  const [barrio, setBarrio] = useState<MenuUbicacion | null>(null);
  const [projectBackStep, setProjectBackStep] = useState<"sectors" | "barrios">(
    "sectors"
  );
  const [qsOpen, setQsOpen] = useState(false);

  const ciudades = useMemo(() => obtenerCiudades(proyectos), [proyectos]);
  const sectores = useMemo(
    () => (city ? obtenerSectoresPorCiudad(proyectos, city.id) : []),
    [proyectos, city]
  );
  const barrios = useMemo(
    () =>
      city && sector
        ? obtenerBarriosPorSector(proyectos, city.id, sector.id)
        : [],
    [proyectos, city, sector]
  );
  const proyectosList = useMemo(
    () =>
      city && sector
        ? obtenerProyectos(proyectos, city.id, sector.id, barrio?.id ?? null)
        : [],
    [proyectos, city, sector, barrio]
  );

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  function openMenu() {
    setOpen(true);
    setStep("initial");
    setCity(null);
    setSector(null);
    setBarrio(null);
    setQsOpen(false);
  }

  function selectCity(cityId: string) {
    const selected = ciudades.find((c) => c.id === cityId);
    if (!selected) return;
    setCity(selected);
    setSector(null);
    setBarrio(null);
    setStep("sectors");
  }

  function selectSector(sectorId: string) {
    if (!city) return;
    const selected = sectores.find((s) => s.id === sectorId);
    if (!selected) return;
    setSector(selected);
    setBarrio(null);
    if (sectorTieneProyectosDirectos(proyectos, city.id, sectorId)) {
      setProjectBackStep("sectors");
      setStep("projects");
    } else {
      setStep("barrios");
    }
  }

  function selectBarrio(barrioId: string) {
    const selected = barrios.find((b) => b.id === barrioId);
    if (!selected) return;
    setBarrio(selected);
    setProjectBackStep("barrios");
    setStep("projects");
  }

  function goBack() {
    if (step === "citys") setStep("initial");
    else if (step === "sectors") setStep("citys");
    else if (step === "barrios") setStep("sectors");
    else if (step === "projects") setStep(projectBackStep);
  }

  if (!open) {
    return (
      <button
        type="button"
        onClick={openMenu}
        className="inline-flex items-center gap-[0.7rem] text-base font-medium text-brand-dark"
      >
        Menú
        <Image
          src={icoBarMobile}
          alt=""
          width={24}
          height={24}
          className="h-6 w-6 object-contain"
        />
      </button>
    );
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Menú principal"
      className="fixed inset-0 z-[100000] overflow-y-auto bg-surface pt-8"
    >
      <div className="flex items-center justify-end px-3 pt-3">
        <button
          type="button"
          aria-label="Cerrar menú"
          onClick={() => setOpen(false)}
          className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full text-ink hover:bg-surface-muted"
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

      {step === "initial" && (
            <ul className="space-y-6 p-3">
              <li className="rounded-[25px] bg-feria px-[18px] py-3 text-center shadow-[0_9px_11.8px_rgba(45,99,69,0.53)]">
                <a
                  href="#"
                  className="flex items-center justify-center gap-[10px] text-2xl leading-4 text-white"
                >
                  <IconFairGreen size={24} />
                  Feria Verde
                </a>
              </li>
              {mobileNavItems.map((item) => {
                if (item.action === "proyectos") {
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setStep("citys")}
                        className="text-2xl leading-4 text-ink"
                      >
                        {item.label}
                      </button>
                    </li>
                  );
                }

                if (item.action === "quienes-somos") {
                  return (
                    <li key={item.label}>
                      <button
                        type="button"
                        onClick={() => setQsOpen((prev) => !prev)}
                        className="text-2xl leading-4 text-ink"
                      >
                        {item.label}
                      </button>
                      {qsOpen && (
                        <div className="flex flex-col gap-4 px-4 pt-4">
                          <a
                            href="#"
                            className="text-[1.3rem] leading-4 text-ink"
                          >
                            Negocio Sostenible
                          </a>
                          <a
                            href="#"
                            className="text-[1.3rem] leading-4 text-ink"
                          >
                            Enconjunto
                          </a>
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.label}>
                    <a href={item.href} className="text-2xl leading-4 text-ink">
                      {item.label}
                    </a>
                  </li>
                );
              })}
            </ul>
          )}

          {step === "citys" && (
            <div className="stepWrapperMenuMobil">
              <StepHeader label="Proyectos" onBack={goBack} />
              <span className="block px-4 pt-6 text-xs text-text-muted">
                Ciudades
              </span>
              {loading ? (
                <p className="p-5 text-base text-brand">Cargando proyectos...</p>
              ) : error ? (
                <p className="p-5 text-base text-text-muted">{error}</p>
              ) : (
                <ul className="space-y-6 p-3">
                  {ciudades.map((c) => (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => selectCity(c.id)}
                        className={stepLinkClass}
                      >
                        {c.nombre}
                        <IconChevronRight size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {step === "sectors" && (
            <div className="stepWrapperMenuMobil">
              <StepHeader label="Ciudades" onBack={goBack} />
              <span className="block px-4 pt-6 text-xs text-text-muted">
                Sectores
              </span>
              {loading ? (
                <p className="p-5 text-base text-brand">Cargando proyectos...</p>
              ) : error ? (
                <p className="p-5 text-base text-text-muted">{error}</p>
              ) : sectores.length === 0 ? (
                <MensajeSinProyectos zona={city?.nombre ?? ""} />
              ) : (
                <ul className="space-y-6 p-3">
                  {sectores.map((s) => (
                    <li key={s.id}>
                      <button
                        type="button"
                        onClick={() => selectSector(s.id)}
                        className={stepLinkClass}
                      >
                        {s.nombre}
                        <IconChevronRight size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {step === "barrios" && (
            <div className="stepWrapperMenuMobil">
              <StepHeader label="Sectores" onBack={goBack} />
              <span className="block px-4 pt-6 text-xs text-text-muted">
                Barrios
              </span>
              {loading ? (
                <p className="p-5 text-base text-brand">Cargando proyectos...</p>
              ) : error ? (
                <p className="p-5 text-base text-text-muted">{error}</p>
              ) : barrios.length === 0 ? (
                <MensajeSinProyectos zona={sector?.nombre ?? ""} />
              ) : (
                <ul className="space-y-6 p-3">
                  {barrios.map((b) => (
                    <li key={b.id}>
                      <button
                        type="button"
                        onClick={() => selectBarrio(b.id)}
                        className={stepLinkClass}
                      >
                        {b.nombre}
                        <IconChevronRight size={14} />
                      </button>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}

          {step === "projects" && (
            <div className="stepWrapperMenuMobil">
              <StepHeader
                label={projectBackStep === "sectors" ? "Sectores" : "Barrios"}
                onBack={goBack}
              />
              <span className="block px-4 pt-6 text-xs text-text-muted">
                Proyectos en {barrio?.nombre ?? sector?.nombre}
              </span>
              {loading ? (
                <p className="p-5 text-base text-brand">Cargando proyectos...</p>
              ) : error ? (
                <p className="p-5 text-base text-text-muted">{error}</p>
              ) : proyectosList.length === 0 ? (
                <MensajeSinProyectos zona={barrio?.nombre ?? sector?.nombre ?? ""} />
              ) : (
                <ul className="space-y-6 p-3">
                  {proyectosList.map((p) => (
                    <li key={p.id}>
                      <a
                        href="#"
                        className={stepLinkClass}
                      >
                        {p.nombre}
                        <IconChevronRight size={14} />
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          )}
    </div>
  );
}