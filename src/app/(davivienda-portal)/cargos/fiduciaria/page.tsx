import type { Metadata } from "next";
import { FiduciariaView } from "@davivienda-pagos/features/cargos-fiduciaria/components/fiduciaria-view";

export const metadata: Metadata = {
  title: "Fiduciaria Davivienda S. A. | Portal de Pagos",
};

export default function FiduciariaPage() {
  return <FiduciariaView />;
}