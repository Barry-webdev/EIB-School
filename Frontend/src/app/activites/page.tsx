import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ActivityCard } from "@/components/features/ActivityCard";
import { activitiesData } from "@/data/activities";
import type { ActivityCategory } from "@/types";
import { Music, Palette, Dumbbell, Bus, Trophy, Star, Calendar } from "lucide-react";

export const metadata: Metadata = {
  title: "Activités & Vie scolaire",
  description:
    "Découvrez les activités culturelles, sportives, sorties scolaires et événements organisés par l'EIB pour enrichir la vie scolaire.",
};

const categoryConfig: Record<
  ActivityCategory | "all",
  { label: string; icon: React.ElementType; color: string; bg: string }
> = {
  all: { label: "Toutes", icon: Star, color: "text-gray-700", bg: "bg-gray-100" },
  culturelle: { label: "Culturelles", icon: Palette, color: "text-purple-700", bg: "bg-purple-100" },
  sportive: { label: "Sportives", icon: Dumbbell, color: "text-blue-700", bg: "bg-blue-100" },
  sortie: { label: "Sorties", icon: Bus, color: "text-emerald-700", bg: "bg-emerald-100" },
  concours: { label: "Concours", icon: Trophy, color: "text-amber-700", bg: "bg-amber-100" },
  cérémonie: { label: "Cérémonies", icon: Star, color: "text-rose-700", bg: "bg-rose-100" },
  événement: { label: "Événements", icon: Calendar, color: "text-teal-700", bg: "bg-teal-100" },
};

const categoryKeys = Object.keys(categoryConfig) as (ActivityCategory | "all")[];

const lifeSections = [
  {
    icon: "🎭",
    title: "Vie culturelle et artistique",
    description:
      "Théâtre, musique, chorale, arts plastiques, concours de poésie et débats : la culture fait partie intégrante de la vie à l'EIB.",
  },
  {
    icon: "⚽",
    title: "Sport et compétition",
    description:
      "Football, basketball, athlétisme et tournois inter-établissements permettent à nos élèves de développer esprit d'équipe et fair-play.",
  },
  {
    icon: "🚌",
    title: "Sorties et voyages",
    description:
      "Musées, sites culturels, voyages pédagogiques : nous ouvrons nos élèves sur leur environnement et sur le monde.",
  },
  {
    icon: "🏆",
    title: "Concours et distinctions",
    description:
      "Olympiades de mathématiques, concours de français, dictée nationale : nos élèves représentent fièrement l'EIB.",
  },
  {
    icon: "🎓",
    title: "Cérémonies et célébrations",
    description:
      "Remise des prix, fêtes de fin d'année, accueil des nouvelles familles : des moments de partage inoubliables.",
  },
  {
    icon: "💻",
    title: "Technologie et innovation",
    description:
      "Club robotique, initiation à la programmation et journées sciences pour préparer nos élèves aux métiers de demain.",
  },
];

export default function ActivitesPage() {
  const counts = categoryKeys.slice(1).reduce(
    (acc, cat) => {
      acc[cat] = activitiesData.filter((a) => a.category === cat).length;
      return acc;
    },
    {} as Record<string, number>
  );

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Épanouissement et vie scolaire
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Activités & Vie scolaire
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            À l&apos;EIB, l&apos;école est bien plus que les cours.
            Découvrez la richesse de notre vie scolaire.
          </p>
        </div>
      </section>

      {/* Sections vie scolaire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Notre vie"
            title="Une vie scolaire riche et épanouissante"
            subtitle="Des activités variées pour développer toutes les facettes de la personnalité de nos élèves."
            align="center"
            className="mb-12"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {lifeSections.map((section, i) => (
              <div
                key={i}
                className="bg-gray-50 rounded-2xl p-6 hover:bg-blue-50 hover:border-blue-100 border border-transparent transition-all duration-300 group"
              >
                <div className="text-4xl mb-4">{section.icon}</div>
                <h3 className="font-bold text-gray-900 text-base mb-2 group-hover:text-blue-700 transition-colors">
                  {section.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {section.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Catégories statistiques */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-3 justify-center">
            {categoryKeys.slice(1).map((cat) => {
              const config = categoryConfig[cat];
              const Icon = config.icon;
              return (
                <div
                  key={cat}
                  className={`flex items-center gap-2 ${config.bg} px-4 py-2 rounded-full`}
                >
                  <Icon className={`w-4 h-4 ${config.color}`} />
                  <span className={`font-semibold text-sm ${config.color}`}>
                    {config.label}
                  </span>
                  <span className="text-xs bg-white/60 px-2 py-0.5 rounded-full font-bold">
                    {counts[cat] || 0}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Grille des activités */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Toutes les activités"
            title="Nos activités cette année"
            align="left"
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {activitiesData.map((activity, i) => (
              <ActivityCard key={activity.id} activity={activity} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA rejoindre */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Votre enfant veut rejoindre nos activités ?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Toutes nos activités parascolaires sont ouvertes aux élèves inscrits
            à l&apos;EIB. Rejoignez-nous dès la prochaine rentrée !
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/inscriptions"
              className="bg-white text-amber-600 font-bold px-8 py-3.5 rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
            >
              S&apos;inscrire
            </a>
            <a
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              En savoir plus
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
