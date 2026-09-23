import React from "react";
import { Users, GraduationCap, Trophy, BookOpen, Star, Clock } from "lucide-react";

const stats = [
  { icon: Users,        value: "850+",  label: "Élèves inscrits",      sub: "Par année scolaire",      color: "#0f2557" },
  { icon: GraduationCap, value: "60+",  label: "Enseignants",           sub: "Qualifiés et dévoués",    color: "#c9a84c" },
  { icon: Trophy,       value: "96%",   label: "Taux de réussite",      sub: "Aux examens nationaux",   color: "#059669" },
  { icon: BookOpen,     value: "5",     label: "Niveaux d'enseignement",sub: "De la maternelle à la Santé", color: "#7c3aed" },
  { icon: Star,         value: "25 ans",label: "D'expérience",          sub: "Au service de l'éducation", color: "#c9a84c" },
  { icon: Clock,        value: "12+",   label: "Activités parascolaires",sub: "Sport, arts, sciences",  color: "#0284c7" },
];

export const StatsSection: React.FC = () => (
  <section className="py-16 bg-white border-b border-slate-100" aria-label="Chiffres clés">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {stats.map((stat, i) => {
          const Icon = stat.icon;
          return (
            <div
              key={i}
              className="group flex flex-col items-center text-center p-5 rounded-2xl border border-slate-100 bg-white hover:border-[#c9a84c]/30 hover:shadow-[0_4px_20px_rgba(15,37,87,0.08)] transition-all duration-300"
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-3 transition-transform duration-300 group-hover:scale-110"
                style={{ backgroundColor: `${stat.color}12` }}
              >
                <Icon className="w-5 h-5" style={{ color: stat.color }} />
              </div>
              <p className="text-2xl font-bold text-[#0f2557] leading-none mb-1"
                 style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
                {stat.value}
              </p>
              <p className="text-xs font-semibold text-slate-700 leading-tight mb-0.5">{stat.label}</p>
              <p className="text-[10px] text-slate-400 leading-tight">{stat.sub}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
