import type { Metadata } from "next";
import Link from "next/link";
import { ChevronRight, ArrowRight } from "lucide-react";
import { Hero } from "@/components/sections/Hero";
import { AboutPreview } from "@/components/sections/AboutPreview";
import { StatsSection } from "@/components/sections/StatsSection";
import { WhyUs } from "@/components/sections/WhyUs";
import { EducationCard } from "@/components/features/EducationCard";
import { NewsCard } from "@/components/features/NewsCard";
import { ActivityCard } from "@/components/features/ActivityCard";
import { Gallery } from "@/components/features/Gallery";
import { ContactForm } from "@/components/features/ContactForm";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { educationLevels } from "@/data/education";
import { getLatestNews } from "@/data/news";
import { getFeaturedActivities } from "@/data/activities";
import { getFeaturedGallery } from "@/data/gallery";
import { contactInfo } from "@/data/contact";
import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";

export const metadata: Metadata = {
  title: "Accueil",
  description:
    "Bienvenue au Complexe Scolaire Privé Elhadj Ibrahima Barry (E.I.B) — La rigueur pour l'excellence. Maternelle, Primaire, Collège, Lycée et École Professionnelle de la Santé à Pita, Guinée.",
};

export default function HomePage() {
  const latestNews = getLatestNews(3);
  const featuredActivities = getFeaturedActivities(6);
  const featuredGallery = getFeaturedGallery(8);

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* Chiffres clés */}
      <StatsSection />

      {/* Présentation établissement */}
      <AboutPreview />

      {/* Niveaux d'enseignement */}
      <section className="py-20 bg-gray-50" aria-label="Nos niveaux d'enseignement">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionTitle
              pretitle="Nos programmes"
              title="Niveaux d'enseignement"
              subtitle="De la maternelle au lycée et jusqu'à l'École Professionnelle de la Santé."
              align="left"
            />
            <Link
              href="/enseignements"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all whitespace-nowrap"
            >
              Voir tous les niveaux
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {educationLevels.map((level) => (
              <EducationCard key={level.id} level={level} />
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi nous choisir */}
      <WhyUs />

      {/* Actualités */}
      <section className="py-20 bg-white" aria-label="Dernières actualités">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionTitle
              pretitle="News"
              title="Dernières actualités"
              subtitle="Restez informés des événements et nouveautés de l'établissement."
              align="left"
            />
            <Link
              href="/actualites"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all whitespace-nowrap"
            >
              Toutes les actualités
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestNews.map((news, i) => (
              <NewsCard key={news.id} news={news} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Activités scolaires */}
      <section className="py-20 bg-gray-50" aria-label="Activités scolaires">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionTitle
              pretitle="Vie scolaire"
              title="Activités & vie scolaire"
              subtitle="Bien plus que l'académique — sport, culture, arts et découvertes."
              align="left"
            />
            <Link
              href="/activites"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all whitespace-nowrap"
            >
              Toutes les activités
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredActivities.map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Galerie aperçu */}
      <section className="py-20 bg-white" aria-label="Aperçu de la galerie">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <SectionTitle
              pretitle="Photos"
              title="Notre galerie"
              subtitle="Des moments de vie partagés au sein de l'établissement."
              align="left"
            />
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 text-blue-700 font-semibold hover:gap-3 transition-all whitespace-nowrap"
            >
              Voir toute la galerie
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          <Gallery items={featuredGallery} />
        </div>
      </section>

      {/* Section Contact */}
      <section
        className="py-20 bg-gray-50"
        id="contact-home"
        aria-label="Contactez-nous"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <SectionTitle
              pretitle="Contact"
              title="Nous contacter"
              subtitle="Une question ? Notre équipe est disponible pour vous répondre rapidement."
            />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Infos de contact */}
            <div className="space-y-6">
              <div className="bg-blue-900 text-white rounded-2xl p-8">
                <h3 className="text-xl font-bold mb-6">Nos coordonnées</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Adresse</p>
                      <p className="text-blue-200 text-sm mt-0.5">
                        Guéme, Commune de Pita, République de Guinée
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Téléphone</p>
                      <a
                        href="tel:+224620229584"
                        className="text-blue-200 hover:text-amber-400 text-sm mt-0.5 transition-colors"
                      >
                        +224 620 22 95 84 / 620 47 13 92
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MessageCircle className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">WhatsApp</p>
                      <a
                        href="https://wa.me/224620229584"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-200 hover:text-amber-400 text-sm mt-0.5 transition-colors"
                      >
                        +224 620 22 95 84
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-amber-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">Email</p>
                      <a
                        href="mailto:gspeib224@gmail.com"
                        className="text-blue-200 hover:text-amber-400 text-sm mt-0.5 transition-colors"
                      >
                        gspeib224@gmail.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-6">
                <h3 className="font-bold text-gray-900 mb-4">
                  Inscriptions ouvertes
                </h3>
                <p className="text-gray-600 text-sm mb-4">
                  Les inscriptions pour l&apos;année scolaire 2025-2026 sont
                  actuellement ouvertes. Contactez-nous ou visitez notre page
                  dédiée.
                </p>
                <Link
                  href="/inscriptions"
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold px-5 py-2.5 rounded-lg text-sm transition-all"
                >
                  Page inscriptions
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Formulaire */}
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Envoyez-nous un message
              </h3>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
