"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@davivienda-pagos/components/ui/container";
import { IconMenu } from "@davivienda-pagos/components/ui/icons/menu";
import { headerNav } from "@davivienda-pagos/constants/header";
import logo from "@davivienda-pagos/assets/logo.svg";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-brand text-white">
      <Container className="flex h-[70px] flex-wrap items-center min-[576px]:h-[117px] min-[576px]:content-around min-[768px]:h-[90px]">
        <div className="flex h-full min-w-0 flex-1 items-center min-[576px]:mt-[10px] min-[576px]:h-auto min-[576px]:w-full min-[576px]:flex-none min-[576px]:justify-center min-[576px]:pt-[10px] min-[768px]:mt-0 min-[768px]:w-[240px] min-[768px]:justify-start min-[768px]:pt-0">
          <a href="#/" aria-label="logo" className="block w-full max-w-[270px] min-[768px]:max-w-none">
            <Image
              src={logo}
              alt="logo"
              width={960}
              height={96}
              priority
              className="h-auto w-full"
            />
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Cerrar menú" : "Abrir menú"}
          aria-expanded={open}
          aria-controls="home-sider"
          className="-mr-[10px] block shrink-0 p-[10px] text-white min-[576px]:hidden"
        >
          <IconMenu className="text-[24px]" />
        </button>

        <nav className="hidden w-full min-[576px]:block min-[768px]:w-auto min-[768px]:flex-1">
          <ul className="flex items-end justify-center gap-8 min-[576px]:leading-[46px] min-[768px]:justify-end">
            {headerNav.map(({ label, href, target, rel }) => (
              <li key={label}>
                <a
                  href={href}
                  target={target}
                  rel={rel}
                  className="text-[14px] leading-[21px] text-white transition-colors duration-300 hover:text-[#ff9393] underline"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </Container>

      <aside
        id="home-sider"
        aria-hidden={!open}
        className={`absolute bottom-0 left-0 top-[70px] z-[2] overflow-hidden bg-brand transition-all duration-200 min-[576px]:hidden ${
          open ? "w-full" : "pointer-events-none w-0"
        }`}
      >
        <ul className="flex flex-col">
          {headerNav.map(({ label, href, target, rel }) => (
            <li
              key={label}
              className="relative flex h-10 items-center px-[15px] text-[14px] text-white before:absolute before:left-[15px] before:right-[15px] before:top-0 before:h-px before:bg-white/50 before:content-[''] first:before:content-none"
            >
              <a
                href={href}
                target={target}
                rel={rel}
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </aside>
    </header>
  );
}