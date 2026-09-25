import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable — 404",
};

const quickLinks = [
  { label: "Accueil",       href: "/" },
  { label: "À propos",      href: "/a-propos" },
  { label: "Enseignements", href: "/enseignements" },
  { label: "Inscriptions",  href: "/inscriptions" },
  { label: "Actualités",    href: "/actualites" },
  { label: "Contact",       href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden">
      {/* Image fond établissement */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Etablissement.jpeg"
          alt="E.I.B"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-[#071540]/92 via-[#0f2557]/85 to-[#0f2557]/75" />
      </div>

      <div className="relative z-10 text-center max-w-2xl">
        {/* Logo */}
        <div className="w-20 h-20 rounded-2xl overflow-hidden mx-auto mb-8 shadow-xl ring-2 ring-[#c9a84c]/30">
          <Image
            src="/Logo EIB.jpg"
            alt="Logo E.I.B"
            width={80}
            height={80}
            className="w-full h-full object-cover"
          />
        </div>

        <p
          className="text-7xl font-bold text-[#c9a84c] mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          404
        </p>
        <h1
          className="text-3xl font-bold text-white mb-4"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          Page introuvable
        </h1>
        <p className="text-slate-300 text-lg mb-10">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b08d35] text-white font-semibold px-6 py-3 rounded-xl transition-all hover:-translate-y-0.5"
          >
            <Home className="w-4 h-4" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all"
          >
            <Search className="w-4 h-4" />
            Nous contacter
          </Link>
        </div>

        <div className="bg-white/10 border border-white/15 rounded-2xl p-5">
          <p className="text-white text-sm font-medium mb-3">Pages disponibles :</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-1.5 bg-white/10 hover:bg-[#c9a84c] text-white text-sm font-medium rounded-full transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
