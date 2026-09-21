import React from "react";
import {
  Shield,
  Users,
  BookOpen,
  Cpu,
  Heart,
  Globe,
  Award,
  TrendingUp,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reasons = [
  {
    icon: Award,
    title: "Excellence académique",
    description:
      "Des résultats constants aux examens nationaux avec un taux de réussite de 96%. Notre engagement : la réussite de chaque élève.",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: Users,
    title: "Enseignants qualifiés",
    description:
      "Un corps enseignant diplômé, expérimenté et passionné, qui accompagne chaque élève avec bienveillance et rigueur.",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Cpu,
    title: "Infrastructures modernes",
    description:
      "Des salles de classe équipées, un laboratoire informatique, une bibliothèque riche, un terrain de sport et des espaces de détente.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: Heart,
    title: "Suivi personnalisé",
    description:
      "Chaque élève bénéficie d'un suivi individuel. Nos équipes identifient rapidement les difficultés et apportent un soutien adapté.",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: Globe,
    title: "Ouverture internationale",
    description:
      "Des partenariats avec des établissements étrangers, des échanges culturels et des programmes linguistiques renforcés.",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Shield,
    title: "Environnement sécurisé",
    description:
      "Un espace scolaire sûr, surveillé et bienveillant où chaque élève peut s'épanouir sereinement.",
    color: "from-teal-400 to-teal-600",
  },
  {
    icon: BookOpen,
    title: "Programme enrichi",
    description:
      "Des activités parascolaires variées (sport, arts, technologie) qui complètent et enrichissent le programme académique.",
    color: "from-indigo-400 to-indigo-600",
  },
  {
    icon: TrendingUp,
    title: "25 ans d'expérience",
    description:
      "Deux décennies de savoir-faire pédagogique au service des familles et de leur engagement pour la réussite de leurs enfants.",
    color: "from-orange-400 to-orange-600",
  },
];

export const WhyUs: React.FC = () => (
  <section
    className="py-20 bg-gradient-to-br from-blue-900 to-blue-800 relative overflow-hidden"
    aria-label="Pourquoi nous choisir"
  >
    {/* Déco */}
    <div className="absolute inset-0 opacity-5">
      <div className="absolute top-10 right-10 w-96 h-96 bg-amber-400 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
    </div>

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <SectionTitle
          pretitle="Notre différence"
          title="Pourquoi choisir l'E.I.B ?"
          subtitle="Huit raisons pour lesquelles les familles de Pita nous font confiance depuis 25 ans."
          light
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {reasons.map((reason, i) => {
          const Icon = reason.icon;
          return (
            <div
              key={i}
              className="group bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${reason.color} rounded-xl flex items-center justify-center mb-4 shadow-lg`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-white font-bold text-base mb-2">
                {reason.title}
              </h3>
              <p className="text-blue-200 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
