import type { Metadata } from "next";
import type { ReactNode } from "react";
import { helvetica } from "@core/fonts/helvetica";
import { roboto } from "@core/fonts/roboto";

export const metadata: Metadata = {
  title: "Seg Bolivar",
  description: "Aplicación de Seguridad Bolívar",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="es"
      className={`${roboto.variable} ${helvetica.variable} min-h-screen antialiased`}
    >
      <body className="min-h-screen">{children}</body>
    </html>
  );
}