import React from "react";
import { Shield, Users, BookOpen, Cpu, Heart, Globe, Award, TrendingUp } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const reasons = [
  { icon: Award,      title: "Excellence académique",   desc: "Taux de réussite de 96% aux examens nationaux grâce à un encadrement rigoureux et personnalisé.",      accent: "#c9a84c" },
  { icon: Users,      title: "Enseignants qualifiés",    desc: "Un corps enseignant diplômé et passionné, accompagnant chaque élève avec bienveillance et rigueur.",   accent: "#0f2557" },
  { icon: Cpu,        title: "Infrastructures modernes", desc: "Laboratoires équipés, bibliothèque, salle informatique, terrain de sport et espaces de vie.",           accent: "#059669" },
  { icon: Heart,      title: "Suivi personnalisé",       desc: "Chaque difficulté est identifiée rapidement. Nos équipes apportent un accompagnement adapté.",           accent: "#e11d48" },
  { icon: Globe,      title: "Ouverture sur le monde",   desc: "Partenariats internationaux, échanges culturels et programmes linguistiques renforcés.",                accent: "#7c3aed" },
  { icon: Shield,     title: "Environnement sécurisé",   desc: "Un cadre scolaire surveillé, bienveillant, où chaque élève peut s'épanouir sereinement.",              accent: "#0284c7" },
  { icon: BookOpen,   title: "Programme enrichi",        desc: "Activités parascolaires variées complétant le programme académique pour un développement global.",       accent: "#c9a84c" },
  { icon: TrendingUp, title: "25 ans d'expérience",      desc: "Deux décennies de savoir-faire pédagogique au service des familles et de la réussite de leurs enfants.", accent: "#0f2557" },
];

export const WhyUs: React.FC = () => (
  <section
    className="py-20 lg:py-28 relative overflow-hidden"
    style={{ background: "linear-gradient(135deg, #071540 0%, #0f2557 55%, #142f85 100%)" }}
    aria-label="Pourquoi nous choisir"
  >
    {/* Déco fond */}
    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#c9a84c]/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-white/3 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute inset-0 opacity-3"
         style={{ backgroundImage: "radial-gradient(circle, rgba(201,168,76,0.1) 1px, transparent 1px)", backgroundSize: "48px 48px" }} />

    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-14">
        <SectionTitle
          pretitle="Notre différence"
          title="Pourquoi choisir l'E.I.B ?"
          subtitle="Huit raisons pour lesquelles les familles de Pita nous font confiance depuis 25 ans."
          light
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {reasons.map((reason, i) => {
          const Icon = reason.icon;
          return (
            <div
              key={i}
              className="group relative bg-white/6 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Accent line top */}
              <div className="absolute top-0 left-6 right-6 h-0.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                   style={{ backgroundColor: reason.accent }} />

              <div className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                   style={{ backgroundColor: `${reason.accent}20` }}>
                <Icon className="w-5 h-5" style={{ color: reason.accent }} />
              </div>
              <h3 className="text-white font-semibold text-sm mb-2 leading-snug">{reason.title}</h3>
              <p className="text-slate-400 text-xs leading-relaxed">{reason.desc}</p>
            </div>
          );
        })}
      </div>
    </div>
  </section>
);
