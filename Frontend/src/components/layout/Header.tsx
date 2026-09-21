"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Enseignements", href: "/enseignements" },
  { label: "Inscriptions", href: "/inscriptions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Activités", href: "/activites" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Fermer le menu mobile lors d'un changement de page
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  // Bloquer le scroll quand le menu mobile est ouvert
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <>
      <header
        className={[
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-white shadow-md py-2"
            : "bg-white/95 backdrop-blur-sm py-3",
        ].join(" ")}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-3 group"
              aria-label="E.I.B - Accueil"
            >
              <div className="w-10 h-10 rounded-xl overflow-hidden shadow-md group-hover:shadow-lg transition-shadow flex-shrink-0">
                <Image
                  src="/Logo EIB.jpg"
                  alt="Logo E.I.B"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover"
                  priority
                />
              </div>
              <div className="hidden sm:block">
                <div className="text-lg font-bold text-blue-900 leading-tight">
                  E.I.B
                </div>
                <div className="text-xs text-gray-500 leading-tight font-medium">
                  Complexe Scolaire Privé Elhadj Ibrahima Barry
                </div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Navigation principale">
              {navItems.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={[
                      "px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "hover:text-blue-700 hover:bg-blue-50",
                      isActive
                        ? "text-blue-700 bg-blue-50 font-semibold"
                        : "text-gray-700",
                    ].join(" ")}
                    aria-current={isActive ? "page" : undefined}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            {/* CTA + Menu hamburger */}
            <div className="flex items-center gap-3">
              <Link
                href="/inscriptions"
                className="hidden lg:inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 shadow-sm hover:shadow-md"
              >
                S&apos;inscrire
              </Link>

              {/* Bouton hamburger mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                aria-label={mobileMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
                aria-expanded={mobileMenuOpen}
                aria-controls="mobile-menu"
              >
                {mobileMenuOpen ? (
                  <X className="w-6 h-6" />
                ) : (
                  <Menu className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Overlay mobile */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Menu mobile drawer */}
      <div
        id="mobile-menu"
        className={[
          "fixed top-0 right-0 bottom-0 w-72 max-w-full bg-white z-50 shadow-2xl lg:hidden",
          "flex flex-col transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
        aria-hidden={!mobileMenuOpen}
      >
        {/* Header du menu mobile */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setMobileMenuOpen(false)}
          >
            <div className="w-9 h-9 rounded-lg overflow-hidden flex-shrink-0">
              <Image
                src="/Logo EIB.jpg"
                alt="Logo E.I.B"
                width={36}
                height={36}
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-bold text-blue-900 text-lg">E.I.B</span>
          </Link>
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-gray-500 hover:bg-gray-100 transition-colors"
            aria-label="Fermer le menu"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Liens de navigation mobile */}
        <nav className="flex-1 overflow-y-auto py-4" aria-label="Navigation mobile">
          {navItems.map((item) => {
            const isActive =
              pathname === item.href ||
              (item.href !== "/" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "flex items-center px-6 py-3.5 text-base font-medium transition-colors",
                  "hover:bg-blue-50 hover:text-blue-700",
                  "border-l-4 mx-2 rounded-r-lg",
                  isActive
                    ? "border-blue-700 bg-blue-50 text-blue-700"
                    : "border-transparent text-gray-700",
                ].join(" ")}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA mobile */}
        <div className="p-6 border-t border-gray-100">
          <Link
            href="/inscriptions"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            S&apos;inscrire maintenant
          </Link>
          <Link
            href="/contact"
            onClick={() => setMobileMenuOpen(false)}
            className="flex items-center justify-center w-full mt-3 border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white font-semibold py-3 rounded-xl transition-all"
          >
            Nous contacter
          </Link>
        </div>
      </div>
    </>
  );
};
