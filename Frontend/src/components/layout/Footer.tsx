import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail, Clock, ChevronRight } from "lucide-react";

const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const WhatsAppIcon = ({ className = "w-4 h-4" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const quickLinks = [
  { label: "Accueil",            href: "/" },
  { label: "À propos",           href: "/a-propos" },
  { label: "Nos enseignements",  href: "/enseignements" },
  { label: "Inscriptions",       href: "/inscriptions" },
  { label: "Actualités",         href: "/actualites" },
  { label: "Activités",          href: "/activites" },
  { label: "Galerie",            href: "/galerie" },
  { label: "Contact",            href: "/contact" },
];

const social = [
  { platform: "Facebook", href: "https://www.facebook.com/share/1MpBHyQeYE/?mibextid=wwXIfr", Icon: FacebookIcon, bg: "hover:bg-blue-600" },
  { platform: "WhatsApp", href: "https://wa.me/224620229584", Icon: WhatsAppIcon, bg: "hover:bg-green-600" },
];

export const Footer: React.FC = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="text-white"
      style={{ background: "linear-gradient(160deg, #071540 0%, #0f2557 60%, #142f85 100%)" }}
      aria-label="Pied de page"
    >
      {/* ── Bande slogan ── */}
      <div className="border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs text-slate-400 italic">&ldquo; La rigueur pour l&apos;excellence &rdquo;</p>
          <p className="text-xs text-slate-400">Complexe Scolaire Privé Elhadj Ibrahima Barry — E.I.B</p>
        </div>
      </div>

      {/* ── Corps ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Identité */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-5 group">
              <div className="relative w-12 h-12 rounded-xl overflow-hidden ring-1 ring-white/20 group-hover:ring-[#c9a84c]/60 transition-all">
                <Image src="/Logo EIB.jpg" alt="Logo E.I.B" fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-tight font-display">E.I.B</p>
                <p className="text-[10px] text-slate-400 leading-tight max-w-[140px]">
                  Complexe Scolaire Privé Elhadj Ibrahima Barry
                </p>
              </div>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-5">
              Un établissement d&apos;excellence dédié à l&apos;épanouissement de chaque élève, de la maternelle à l&apos;École Professionnelle de la Santé.
            </p>
            <div className="flex items-center gap-2">
              {social.map(({ platform, href, Icon, bg }) => (
                <a key={platform} href={href} target="_blank" rel="noopener noreferrer"
                   aria-label={`Suivez-nous sur ${platform}`}
                   className={`w-9 h-9 bg-white/8 ${bg} rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5`}>
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Col 2 — Liens */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Navigation
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href}
                    className="flex items-center gap-2 text-slate-400 hover:text-[#c9a84c] text-sm transition-colors group">
                    <ChevronRight className="w-3.5 h-3.5 text-[#c9a84c]/50 group-hover:translate-x-0.5 transition-transform" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Coordonnées
            </h3>
            <ul className="space-y-3.5">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span className="text-slate-400 text-sm">Guéme, Commune de Pita,<br />République de Guinée</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <a href="tel:+224620229584" className="text-slate-400 hover:text-[#c9a84c] text-sm transition-colors">
                  +224 620 22 95 84<br />+224 620 47 13 92
                </a>
              </li>
              <li className="flex items-center gap-3">
                <WhatsAppIcon className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <a href="https://wa.me/224620229584" target="_blank" rel="noopener noreferrer"
                   className="text-slate-400 hover:text-[#c9a84c] text-sm transition-colors">
                  WhatsApp : +224 620 22 95 84
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#c9a84c] flex-shrink-0" />
                <a href="mailto:gspeib224@gmail.com"
                   className="text-slate-400 hover:text-[#c9a84c] text-sm transition-colors">
                  gspeib224@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Col 4 — Horaires + CTA */}
          <div>
            <h3 className="text-sm font-semibold text-white mb-5 pb-2 border-b border-white/10">
              Horaires
            </h3>
            <ul className="space-y-3 mb-7">
              {[
                { day: "Lundi – Vendredi", hours: "7h30 – 17h00" },
                { day: "Samedi",           hours: "7h30 – 11h30" },
                { day: "Dimanche",         hours: "Fermé" },
              ].map((h, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Clock className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-white text-xs font-medium">{h.day}</p>
                    <p className="text-slate-400 text-xs">{h.hours}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link
              href="/inscriptions"
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b08d35] text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            >
              S&apos;inscrire maintenant
            </Link>
          </div>
        </div>
      </div>

      {/* ── Copyright ── */}
      <div className="border-t border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-slate-500 text-xs">
            © {year} E.I.B — Complexe Scolaire Privé Elhadj Ibrahima Barry. Tous droits réservés.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-slate-500 hover:text-[#c9a84c] text-xs transition-colors">Mentions légales</Link>
            <span className="text-slate-700 text-xs">|</span>
            <Link href="#" className="text-slate-500 hover:text-[#c9a84c] text-xs transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};


