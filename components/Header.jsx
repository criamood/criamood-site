"use client";

import { useState } from "react";
import Link from "next/link";

const STORE_URL = "https://criamood.lojavirtualnuvem.com.br";

const navLinks = [
  { label: "Início", href: "/" },
  { label: "Quem Somos", href: "/#sobre" },
  { label: "Coleção", href: "/#colecao" },
  { label: "Contato", href: "/contato" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

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
          <img
            src="/images/logo-wordmark.png"
            alt="CriaMood"
            className="h-9 md:h-10 w-auto"
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
              className="text-paper-muted hover:text-brand duration-300"
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
                className="px-6 py-4 border-b border-white/10 text-paper font-medium hover:bg-ink-soft"
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
