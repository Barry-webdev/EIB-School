"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Accueil",        href: "/" },
  { label: "À propos",       href: "/a-propos" },
  { label: "Enseignements",  href: "/enseignements" },
  { label: "Inscriptions",   href: "/inscriptions" },
  { label: "Actualités",     href: "/actualites" },
  { label: "Activités",      href: "/activites" },
  { label: "Galerie",        href: "/galerie" },
  { label: "Contact",        href: "/contact" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setMobileMenuOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [mobileMenuOpen]);

  const isActive = (href: string) =>
    pathname === href || (href !== "/" && pathname.startsWith(href));

  return (
    <>
      {/* ── Top bar ── */}
      <div className="hidden lg:block bg-[#0f2557] text-white text-xs py-2">
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-6 text-slate-300">
            <span>📍 Guéme, Commune de Pita, République de Guinée</span>
            <span>📞 +224 620 22 95 84</span>
          </div>
          <div className="flex items-center gap-4 text-slate-300">
            <a href="https://fb.me/gspeib" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#c9a84c] transition-colors">Facebook</a>
            <span className="text-slate-600">|</span>
            <a href="https://wa.me/224620229584" target="_blank" rel="noopener noreferrer"
               className="hover:text-[#c9a84c] transition-colors">WhatsApp</a>
          </div>
        </div>
      </div>

      {/* ── Main header ── */}
      <header
        className={[
          "fixed left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "top-0 bg-white/98 backdrop-blur-md shadow-[0_1px_24px_rgba(15,37,87,0.10)] py-2"
            : "top-0 lg:top-8 bg-white/95 backdrop-blur-sm py-3",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">

            {/* ── Logo ── */}
            <Link href="/" className="flex items-center gap-3 group flex-shrink-0" aria-label="E.I.B — Accueil">
              <div className="relative w-11 h-11 rounded-xl overflow-hidden ring-1 ring-slate-200 group-hover:ring-[#c9a84c] transition-all duration-300 shadow-sm">
                <Image
                  src="/Logo EIB.jpg"
                  alt="Logo E.I.B"
                  fill
                  className="object-cover"
                  sizes="44px"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <p className="text-base font-bold text-[#0f2557] leading-tight tracking-tight"
                   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                  E.I.B
                </p>
                <p className="text-[10px] text-slate-500 leading-tight font-medium max-w-[180px]">
                  Complexe Scolaire Privé Elhadj Ibrahima Barry
                </p>
              </div>
            </Link>

            {/* ── Nav Desktop ── */}
            <nav className="hidden lg:flex items-center gap-0.5" aria-label="Navigation principale">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={isActive(item.href) ? "page" : undefined}
                  className={[
                    "relative px-3.5 py-2 text-sm font-medium rounded-lg transition-all duration-200",
                    "hover:text-[#0f2557] hover:bg-[#0f2557]/5",
                    isActive(item.href)
                      ? "text-[#0f2557] font-semibold"
                      : "text-slate-600",
                  ].join(" ")}
                >
                  {item.label}
                  {isActive(item.href) && (
                    <span className="absolute bottom-0 left-3.5 right-3.5 h-0.5 bg-[#c9a84c] rounded-full" />
                  )}
                </Link>
              ))}
            </nav>

            {/* ── CTA + Hamburger ── */}
            <div className="flex items-center gap-2.5">
              <Link
                href="/inscriptions"
                className="hidden lg:inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b08d35] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
              >
                S&apos;inscrire
              </Link>

              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden w-10 h-10 flex items-center justify-center rounded-lg text-slate-700 hover:bg-slate-100 transition-colors"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Overlay ── */}
      <div
        className={[
          "fixed inset-0 z-40 lg:hidden bg-[#0f2557]/50 backdrop-blur-sm transition-opacity duration-300",
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
        onClick={() => setMobileMenuOpen(false)}
        aria-hidden="true"
      />

      {/* ── Mobile Drawer ── */}
      <div
        id="mobile-menu"
        className={[
          "fixed top-0 right-0 bottom-0 w-80 max-w-[90vw] z-50 lg:hidden",
          "flex flex-col bg-white shadow-2xl",
          "transition-transform duration-300 ease-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Drawer header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-slate-100">
          <Link href="/" onClick={() => setMobileMenuOpen(false)} className="flex items-center gap-3">
            <div className="relative w-9 h-9 rounded-lg overflow-hidden ring-1 ring-slate-200">
              <Image src="/Logo EIB.jpg" alt="Logo E.I.B" fill className="object-cover" sizes="36px" />
            </div>
            <div>
              <p className="text-sm font-bold text-[#0f2557]"
                 style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>E.I.B</p>
              <p className="text-[10px] text-slate-400">La rigueur pour l&apos;excellence</p>
            </div>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-slate-500 hover:bg-slate-100"
            aria-label="Fermer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Nav links */}
        <nav className="flex-1 overflow-y-auto py-3" aria-label="Navigation mobile">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setMobileMenuOpen(false)}
              aria-current={isActive(item.href) ? "page" : undefined}
              className={[
                "flex items-center px-5 py-3.5 text-sm font-medium transition-colors",
                "border-l-2 mx-3 rounded-r-xl",
                isActive(item.href)
                  ? "border-[#c9a84c] bg-[#0f2557]/5 text-[#0f2557] font-semibold"
                  : "border-transparent text-slate-600 hover:bg-slate-50 hover:text-[#0f2557]",
              ].join(" ")}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* CTA mobile */}
        <div className="p-5 border-t border-slate-100 space-y-3">
          <Link
            href="/inscriptions"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full bg-[#c9a84c] hover:bg-[#b08d35] text-white font-semibold py-3 rounded-xl transition-colors text-sm"
          >
            S&apos;inscrire maintenant
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full border-2 border-[#0f2557] text-[#0f2557] hover:bg-[#0f2557] hover:text-white font-semibold py-3 rounded-xl transition-all text-sm"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </>
  );
};
