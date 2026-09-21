import React from "react";
import Link from "next/link";
import { CheckCircle, ChevronRight, Target, Eye, Heart } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const highlights = [
  "Enseignement de qualité internationale",
  "Corps enseignant qualifié et dévoué",
  "Infrastructures modernes et équipées",
  "Suivi personnalisé de chaque élève",
  "Activités parascolaires enrichissantes",
  "Environnement sûr et bienveillant",
];

const values = [
  {
    icon: Target,
    title: "Excellence",
    desc: "Nous visons les plus hauts standards éducatifs",
    color: "text-blue-700",
    bg: "bg-blue-50",
  },
  {
    icon: Heart,
    title: "Bienveillance",
    desc: "Chaque élève est accompagné avec attention",
    color: "text-amber-600",
    bg: "bg-amber-50",
  },
  {
    icon: Eye,
    title: "Vision",
    desc: "Former les citoyens et leaders de demain",
    color: "text-emerald-600",
    bg: "bg-emerald-50",
  },
];

export const AboutPreview: React.FC = () => (
  <section
    id="about-preview"
    className="py-20 bg-white"
    aria-label="Présentation de l'établissement"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Colonne gauche — texte */}
        <div>
          <SectionTitle
            pretitle="À propos de nous"
            title="Un complexe scolaire au service de l'excellence"
            subtitle="Depuis plus de 25 ans, le Complexe E.I.B forme des générations d'élèves à Pita, dans un environnement pédagogique rigoureux et stimulant."
            align="left"
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8 mb-8">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700 text-sm">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold px-6 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg"
          >
            En savoir plus
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>

        {/* Colonne droite — valeurs + image déco */}
        <div className="space-y-4">
          {/* Image placeholder / illustration */}
          <div className="relative bg-gradient-to-br from-blue-900 to-blue-700 rounded-3xl p-8 text-white overflow-hidden mb-6">
            <div className="absolute top-0 right-0 w-40 h-40 bg-amber-400/20 rounded-full blur-2xl" />
            <div className="relative z-10">
              <p className="text-2xl font-bold mb-2">25 ans d&apos;excellence</p>
              <p className="text-blue-200 text-sm leading-relaxed">
                Fondé à Pita, le Complexe Scolaire Privé Elhadj Ibrahima Barry
                n&apos;a cessé d&apos;innover et d&apos;améliorer son offre
                pédagogique pour accompagner chaque élève vers le succès.
              </p>
              <div className="mt-4 flex items-center gap-6">
                <div>
                  <p className="text-3xl font-bold text-amber-400">850+</p>
                  <p className="text-blue-300 text-xs">Élèves</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-3xl font-bold text-amber-400">96%</p>
                  <p className="text-blue-300 text-xs">Réussite</p>
                </div>
                <div className="w-px h-12 bg-white/20" />
                <div>
                  <p className="text-3xl font-bold text-amber-400">60+</p>
                  <p className="text-blue-300 text-xs">Enseignants</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cartes valeurs */}
          <div className="grid grid-cols-3 gap-4">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div
                  key={i}
                  className={`${v.bg} rounded-2xl p-4 text-center`}
                >
                  <Icon className={`w-8 h-8 ${v.color} mx-auto mb-2`} />
                  <p className="font-bold text-gray-900 text-sm">{v.title}</p>
                  <p className="text-gray-500 text-xs mt-1 leading-tight">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  </section>
);
