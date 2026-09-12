"use client";

import Link from "next/link";
import { useState } from "react";
import { LanguageSwitcher } from "@/components/shared/LanguageSwitcher";
import { useLanguage } from "@/providers/LanguageProvider";
import type { LocalizedText } from "@/types";

const logoUrl =
  "https://pub-ec6b76c0eef842d1bd7d65492c044988.r2.dev/D-Signio/Home%20Page/Logo%20Nav.png";

export type HeaderNavItem = {
  href: string;
  label: LocalizedText;
};

const defaultNavItems: HeaderNavItem[] = [
  {
    href: "#about",
    label: { es: "Sobre D-Signio", en: "About D-Signio" },
  },
  {
    href: "#business-lines",
    label: { es: "Líneas de negocio", en: "Business Lines" },
  },
  {
    href: "#projects",
    label: { es: "Proyectos", en: "Projects" },
  },
  {
    href: "#contact",
    label: { es: "Contacto", en: "Contact" },
  },
];

type HeaderProps = {
  navItems?: HeaderNavItem[];
};

export function Header({ navItems = defaultNavItems }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="site-header" data-open={isOpen}>
      <div className="header-shell">
        <Link
          className="header-brand"
          href="/"
          aria-label="D Signio"
          onClick={() => setIsOpen(false)}
        >
          <img src={logoUrl} alt="D Signio" />
        </Link>

        <nav
          id="site-navigation"
          className="header-nav"
          aria-label={t({ es: "Navegación principal", en: "Primary navigation" })}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setIsOpen(false)}
            >
              {t(item.label)}
            </Link>
          ))}
        </nav>

        <div className="header-actions">
          <LanguageSwitcher />
          <button
            className="menu-button"
            type="button"
            aria-label={
              isOpen
                ? t({ es: "Cerrar menú", en: "Close menu" })
                : t({ es: "Abrir menú", en: "Open menu" })
            }
            aria-expanded={isOpen}
            aria-controls="site-navigation"
            onClick={() => setIsOpen((current) => !current)}
          >
            <span className="menu-button-lines" aria-hidden="true" />
          </button>
        </div>
      </div>
    </header>
  );
}
