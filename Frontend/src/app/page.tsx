import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ChevronRight, MapPin, Phone, Mail } from "lucide-react";

const WhatsAppIcon = ({ className = "w-5 h-5" }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);
import { Hero }          from "@/components/sections/Hero";
import { AboutPreview }  from "@/components/sections/AboutPreview";
import { StatsSection }  from "@/components/sections/StatsSection";
import { WhyUs }         from "@/components/sections/WhyUs";
import { EducationCard } from "@/components/features/EducationCard";
import { NewsCard }      from "@/components/features/NewsCard";
import { ActivityCard }  from "@/components/features/ActivityCard";
import { Gallery }       from "@/components/features/Gallery";
import { ContactForm }   from "@/components/features/ContactForm";
import { SectionTitle }  from "@/components/ui/SectionTitle";
import { educationLevels } from "@/data/education";
import { getLatestNews }   from "@/sanity/lib/news";
import { getFeaturedActivities } from "@/sanity/lib/activities";
import { getFeaturedGallery } from "@/sanity/lib/gallery";

export const dynamic = 'force-dynamic';

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Bienvenue au Complexe Scolaire Privé Elhadj Ibrahima Barry (E.I.B) — La rigueur pour l'excellence à Pita, Guinée.",
};

export const revalidate = 60;

export default async function HomePage() {
  const latestNews         = await getLatestNews(3);
  const featuredActivities = await getFeaturedActivities(6);
  const featuredGallery    = await getFeaturedGallery(8);

  return (
    <>
      {/* 1 — Hero */}
      <Hero />

      {/* 2 — Chiffres */}
      <StatsSection />

      {/* 3 — Présentation */}
      <AboutPreview />

      {/* 4 — Enseignements */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Nos niveaux d'enseignement">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionTitle
              pretitle="Nos programmes"
              title="Niveaux d'enseignement"
              subtitle="De la maternelle jusqu'à l'École Professionnelle de la Santé."
              align="left"
            />
            <Link href="/enseignements"
              className="inline-flex items-center gap-2 text-[#0f2557] hover:text-[#c9a84c] font-semibold text-sm transition-colors whitespace-nowrap group">
              Tous les niveaux
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-5">
            {educationLevels.map((level) => (
              <EducationCard key={level.id} level={level} />
            ))}
          </div>
        </div>
      </section>

      {/* 5 — Pourquoi nous */}
      <WhyUs />

      {/* 6 — Actualités */}
      <section className="py-20 lg:py-28 bg-[#fafaf7]" aria-label="Dernières actualités">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionTitle
              pretitle="News"
              title="Dernières actualités"
              subtitle="Restez informés des événements et nouveautés de l'établissement."
              align="left"
            />
            <Link href="/actualites"
              className="inline-flex items-center gap-2 text-[#0f2557] hover:text-[#c9a84c] font-semibold text-sm transition-colors whitespace-nowrap group">
              Toutes les actualités
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news, i) => (
              <NewsCard key={news.id} news={news} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 7 — Activités */}
      <section className="py-20 lg:py-28 bg-white" aria-label="Activités scolaires">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionTitle
              pretitle="Vie scolaire"
              title="Activités & vie scolaire"
              subtitle="Sport, culture, arts et découvertes — bien plus que l'académique."
              align="left"
            />
            <Link href="/activites"
              className="inline-flex items-center gap-2 text-[#0f2557] hover:text-[#c9a84c] font-semibold text-sm transition-colors whitespace-nowrap group">
              Toutes les activités
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredActivities.map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* 8 — Galerie */}
      <section className="py-20 lg:py-28 bg-[#fafaf7]" aria-label="Galerie photos">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
            <SectionTitle
              pretitle="Photos"
              title="Notre galerie"
              subtitle="Des moments de vie partagés au sein du complexe."
              align="left"
            />
            <Link href="/galerie"
              className="inline-flex items-center gap-2 text-[#0f2557] hover:text-[#c9a84c] font-semibold text-sm transition-colors whitespace-nowrap group">
              Voir toute la galerie
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
          <Gallery items={featuredGallery} />
        </div>
      </section>

      {/* 9 — CTA Inscription */}
      <section className="py-16 bg-[#c9a84c]" aria-label="Appel à l'inscription">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-white/70 text-xs font-bold tracking-[0.18em] uppercase mb-4">
            Inscriptions ouvertes — Année 2026–2027
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-display">
            Rejoignez le Complexe E.I.B
          </h2>
          <p className="text-white/80 text-base mb-8 max-w-xl mx-auto">
            Les inscriptions pour l&apos;année scolaire 2026–2027 sont ouvertes. Frais d&apos;inscription : 50 000 GNF.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/inscriptions"
              className="inline-flex items-center gap-2 bg-[#0f2557] hover:bg-[#142f85] text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all hover:-translate-y-0.5 shadow-lg">
              Voir les inscriptions
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-8 py-3.5 rounded-xl text-sm transition-all">
              Nous contacter
            </Link>
          </div>
        </div>
      </section>

      {/* 10 — Contact */}
      <section className="py-20 lg:py-28 bg-white" id="contact-home" aria-label="Contactez-nous">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <SectionTitle
              pretitle="Contact"
              title="Nous contacter"
              subtitle="Une question ? Notre équipe vous répond rapidement."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Infos */}
            <div className="lg:col-span-2 space-y-5">
              <div className="rounded-2xl p-7 text-white"
                   style={{ background: "linear-gradient(135deg, #071540 0%, #0f2557 100%)" }}>
                <h3 className="font-bold text-base mb-5 font-display">
                  Nos coordonnées
                </h3>
                <div className="space-y-4">
                  {[
                    { Icon: MapPin,        text: "Guéme, Commune de Pita\nRépublique de Guinée", href: "#",                                    color: "bg-[#c9a84c]" },
                    { Icon: Phone,         text: "+224 620 22 95 84\n+224 620 47 13 92",          href: "tel:+224620229584",                     color: "bg-[#c9a84c]" },
                    { Icon: WhatsAppIcon, text: "WhatsApp : +224 620 22 95 84", href: "https://wa.me/224620229584", color: "bg-[#c9a84c]" },
                    { Icon: Mail,          text: "gspeib224@gmail.com",                           href: "mailto:gspeib224@gmail.com",            color: "bg-[#c9a84c]" },
                  ].map(({ Icon, text, href, color }, i) => (
                    <a key={i} href={href} className="flex items-start gap-3.5 group">
                      <div className={`w-9 h-9 ${color} rounded-lg flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-slate-300 group-hover:text-[#c9a84c] text-sm transition-colors whitespace-pre-line">
                        {text}
                      </p>
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#c9a84c]/8 border border-[#c9a84c]/20 rounded-2xl p-6">
                <h3 className="font-bold text-[#0f2557] text-sm mb-2 font-display">
                  Inscriptions ouvertes
                </h3>
                <p className="text-slate-500 text-xs mb-4 leading-relaxed">
                  Les inscriptions 2026–2027 sont ouvertes. Contactez-nous ou consultez notre page dédiée.
                </p>
                <Link href="/inscriptions"
                  className="inline-flex items-center gap-1.5 bg-[#c9a84c] hover:bg-[#b08d35] text-white font-semibold px-4 py-2 rounded-lg text-xs transition-all">
                  Page inscriptions
                  <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl border border-slate-100 shadow-[0_2px_24px_rgba(15,37,87,0.06)] p-8">
                <h3 className="font-bold text-[#0f2557] text-lg mb-6 font-display">
                  Envoyez-nous un message
                </h3>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}



