import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  ChevronRight,
} from "lucide-react";

// Icônes réseaux sociaux SVG inline (Facebook, Instagram, YouTube ne sont plus dans lucide-react)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.96-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
    <polygon fill="white" points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
  </svg>
);

const quickLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Nos enseignements", href: "/enseignements" },
  { label: "Inscriptions", href: "/inscriptions" },
  { label: "Actualités", href: "/actualites" },
  { label: "Activités", href: "/activites" },
  { label: "Galerie", href: "/galerie" },
  { label: "Contact", href: "/contact" },
];

const socialLinks = [
  {
    platform: "Facebook",
    href: "https://fb.me/gspeib",
    icon: FacebookIcon,
    label: "Suivez-nous sur Facebook",
    color: "hover:bg-blue-600",
  },
  {
    platform: "WhatsApp",
    href: "https://wa.me/224620229584",
    icon: MessageCircle,
    label: "Contactez-nous sur WhatsApp",
    color: "hover:bg-green-600",
  },
];

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-900 text-white" aria-label="Pied de page">
      {/* Bande supérieure */}
      <div className="bg-amber-500 py-3">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-white">
            La rigueur pour l&apos;excellence — Complexe Scolaire Privé Elhadj Ibrahima Barry
          </p>
        </div>
      </div>

      {/* Corps principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Colonne 1 — Présentation */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="w-11 h-11 rounded-xl overflow-hidden flex-shrink-0 group-hover:ring-2 group-hover:ring-amber-400 transition-all">
                <Image
                  src="/Logo EIB.jpg"
                  alt="Logo E.I.B"
                  width={44}
                  height={44}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <div className="text-xl font-bold text-white">E.I.B</div>
                <div className="text-xs text-blue-200">
                  Complexe Scolaire Privé Elhadj Ibrahima Barry
                </div>
              </div>
            </Link>
            <p className="text-blue-200 text-sm leading-relaxed mb-5">
              Le Complexe Scolaire Privé Elhadj Ibrahima Barry est un
              établissement d&apos;excellence, dédié à l&apos;épanouissement de
              chaque élève dans un environnement bienveillant et rigoureux.
            </p>
            {/* Réseaux sociaux */}
            <div className="flex items-center gap-2">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.platform}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={`w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center transition-all duration-200 ${social.color}`}
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Colonne 2 — Liens rapides */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5 pb-2 border-b border-white/20">
              Liens rapides
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-blue-200 hover:text-amber-400 text-sm transition-colors group"
                  >
                    <ChevronRight className="w-4 h-4 text-amber-500 group-hover:translate-x-1 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Colonne 3 — Contact */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5 pb-2 border-b border-white/20">
              Coordonnées
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <span className="text-blue-200 text-sm">
                  Guéme, Commune de Pita,<br />République de Guinée
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="tel:+224620229584"
                  className="text-blue-200 hover:text-amber-400 text-sm transition-colors"
                >
                  +224 620 22 95 84 / 620 47 13 92
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="https://wa.me/224620229584"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-200 hover:text-amber-400 text-sm transition-colors"
                >
                  WhatsApp : +224 620 22 95 84
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-amber-400 flex-shrink-0" />
                <a
                  href="mailto:gspeib224@gmail.com"
                  className="text-blue-200 hover:text-amber-400 text-sm transition-colors"
                >
                  gspeib224@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Colonne 4 — Horaires */}
          <div>
            <h3 className="text-base font-semibold text-white mb-5 pb-2 border-b border-white/20">
              Horaires d&apos;ouverture
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Lundi – Vendredi</p>
                  <p className="text-blue-200 text-sm">7h30 – 18h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Samedi</p>
                  <p className="text-blue-200 text-sm">8h00 – 13h00</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-white text-sm font-medium">Dimanche</p>
                  <p className="text-blue-200 text-sm">Fermé</p>
                </div>
              </li>
            </ul>

            {/* CTA inscription */}
            <Link
              href="/inscriptions"
              className="inline-flex items-center gap-2 mt-6 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200"
            >
              S&apos;inscrire maintenant
            </Link>
          </div>
        </div>
      </div>

      {/* Barre de copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-blue-300 text-sm text-center">
              © {currentYear} E.I.B — Complexe Scolaire Privé Elhadj Ibrahima Barry. Tous droits réservés.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="#"
                className="text-blue-300 hover:text-amber-400 text-sm transition-colors"
              >
                Mentions légales
              </Link>
              <span className="text-blue-600">|</span>
              <Link
                href="#"
                className="text-blue-300 hover:text-amber-400 text-sm transition-colors"
              >
                Politique de confidentialité
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
