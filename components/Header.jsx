"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

const navLinks = [
  { label: "Início", href: "/", key: "inicio" },
  { label: "Quem Somos", href: "/#sobre", key: "sobre" },
  { label: "Coleção", href: "/#colecao", key: "colecao" },
  { label: "Contato", href: "/contato", key: "contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const pathname = usePathname();

  // "scroll-spy": destaca Quem Somos / Coleção conforme a seção visível na home
  useEffect(() => {
    if (pathname !== "/") return;

    const sections = [
      { id: "sobre", key: "sobre" },
      { id: "colecao", key: "colecao" },
    ]
      .map(({ id, key }) => ({ el: document.getElementById(id), key }))
      .filter((s) => s.el);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) {
          const match = sections.find((s) => s.el === visible.target);
          if (match) setActiveSection(match.key);
        } else if (window.scrollY < 200) {
          setActiveSection("inicio");
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    sections.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, [pathname]);

  const isActive = (link) => {
    if (link.key === "contato") return pathname === "/contato";
    if (pathname !== "/") return false;
    return activeSection === link.key;
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-ink/95 backdrop-blur border-b border-white/10 z-50">
      {/* BARRA SUPERIOR */}
      <div className="bg-brand py-2 px-6 text-center text-xs md:text-sm font-medium tracking-wide text-ink">
        Vista a sua fé com estilo — conheça a loja CriaMood
      </div>

      {/* HEADER PRINCIPAL */}
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/logo-full-white.png"
            alt="CriaMood"
            width={1801}
            height={320}
            priority
            className="h-10 md:h-12 w-auto"
          />
        </Link>

        {/* BOTÃO MOBILE */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-3xl text-paper font-light"
          aria-label="Abrir menu"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* MENU DESKTOP */}
        <nav className="hidden lg:flex items-center gap-9 text-sm font-medium uppercase tracking-wide">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              aria-current={isActive(link) ? "page" : undefined}
              className={`duration-300 ${
                isActive(link)
                  ? "text-brand"
                  : "text-paper-muted hover:text-brand"
              }`}
            >
              {link.label}
            </Link>
          ))}

          <a
            href={STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-brand hover:bg-brand-dark text-ink font-semibold px-6 py-3 rounded-full duration-300"
          >
            Loja Online
          </a>
        </nav>
      </div>

      {/* MENU MOBILE */}
      {menuOpen && (
        <div className="lg:hidden bg-ink border-t border-white/10 shadow-lg">
          <nav className="flex flex-col text-base">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                aria-current={isActive(link) ? "page" : undefined}
                className={`px-6 py-4 border-b border-white/10 font-medium hover:bg-ink-soft ${
                  isActive(link) ? "text-brand" : "text-paper"
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              className="px-6 py-4 bg-brand text-ink font-semibold text-center"
            >
              Ir para a Loja Online
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
