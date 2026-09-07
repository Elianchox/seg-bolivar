import type { Metadata } from "next";
import type { ReactNode } from "react";
import { roboto } from "@/fonts/roboto";
import { robotoCondensed } from "@/fonts/roboto-condensed";
import "./globals.css";

export const metadata: Metadata = {
  title: "Seg Bolivar",
  description: "Aplicación de Seguridad Bolívar",
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es">
      <body
        className={`${roboto.variable} ${robotoCondensed.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}