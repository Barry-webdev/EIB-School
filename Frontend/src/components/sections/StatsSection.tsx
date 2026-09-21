import React from "react";
import { Users, GraduationCap, Trophy, BookOpen, Star, Clock } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "850+",
    label: "Élèves inscrits",
    description: "Chaque année scolaire",
    color: "from-blue-500 to-blue-700",
  },
  {
    icon: GraduationCap,
    value: "60+",
    label: "Enseignants",
    description: "Qualifiés et dévoués",
    color: "from-amber-400 to-amber-600",
  },
  {
    icon: Trophy,
    value: "96%",
    label: "Taux de réussite",
    description: "Aux examens nationaux",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    icon: BookOpen,
    value: "5",
    label: "Niveaux",
    description: "De la maternelle à la Santé",
    color: "from-purple-400 to-purple-600",
  },
  {
    icon: Star,
    value: "25 ans",
    label: "D'expérience",
    description: "Au service de l'éducation",
    color: "from-rose-400 to-rose-600",
  },
  {
    icon: Clock,
    value: "12",
    label: "Activités",
    description: "Parascolaires disponibles",
    color: "from-teal-400 to-teal-600",
  },
];

export const StatsSection: React.FC = () => (
  <section
    className="py-16 bg-gray-50"
    aria-label="Chiffres clés"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="bg-white rounded-2xl p-5 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div
                className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-xl flex items-center justify-center mx-auto mb-3`}
              >
                <Icon className="w-6 h-6 text-white" />
              </div>
              <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              <p className="text-sm font-semibold text-gray-700 mt-1">
                {stat.label}
              </p>
              <p className="text-xs text-gray-400 mt-0.5">{stat.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
