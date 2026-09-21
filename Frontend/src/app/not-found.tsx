import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Home, Search } from "lucide-react";

export const metadata: Metadata = {
  title: "Page introuvable — 404",
};

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Enseignements", href: "/enseignements" },
  { label: "Inscriptions", href: "/inscriptions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Contact", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 to-blue-800 flex items-center justify-center px-4">
      <div className="text-center max-w-2xl">
        {/* Logo */}
        <div className="w-24 h-24 rounded-2xl overflow-hidden mx-auto mb-8 shadow-xl border-2 border-white/20">
          <Image
            src="/Logo EIB.jpg"
            alt="Logo E.I.B"
            width={96}
            height={96}
            className="w-full h-full object-cover"
          />
        </div>

        {/* 404 */}
        <p className="text-8xl font-bold text-amber-400 mb-4">404</p>
        <h1 className="text-3xl font-bold text-white mb-4">Page introuvable</h1>
        <p className="text-blue-200 text-lg mb-10">
          La page que vous recherchez n&apos;existe pas ou a été déplacée.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-6 py-3 rounded-xl transition-colors"
          >
            <Home className="w-5 h-5" />
            Retour à l&apos;accueil
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold px-6 py-3 rounded-xl transition-colors"
          >
            <Search className="w-5 h-5" />
            Nous contacter
          </Link>
        </div>

        {/* Liens rapides */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-6">
          <p className="text-white font-semibold mb-4">Pages disponibles :</p>
          <div className="flex flex-wrap gap-2 justify-center">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-4 py-2 bg-white/10 hover:bg-amber-500 text-white text-sm font-medium rounded-full transition-colors"
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
