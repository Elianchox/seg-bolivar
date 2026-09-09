import type { ReactNode } from "react";
import { Footer } from "@davivienda-pagos/components/layout/footer/footer";
import { Header } from "@davivienda-pagos/components/layout/header/header";
import "@davivienda-pagos/globals.css";

export default function DaviviendaPortalLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <div className="relative flex min-h-screen flex-col bg-surface">
      <Header />
      {children}
      <Footer />
    </div>
  );
}