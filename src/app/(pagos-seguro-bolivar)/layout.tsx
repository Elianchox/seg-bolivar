import type { ReactNode } from "react";
import { Footer } from "@pagos/components/layout/footer/footer";
import { Header } from "@pagos/components/layout/header/header";
import { MobileFixedActions } from "@pagos/components/layout/mobile-fixed-actions";

export default function PagosLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <div className="flex min-h-screen flex-col bg-surface">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <MobileFixedActions />
    </div>
  );
}
