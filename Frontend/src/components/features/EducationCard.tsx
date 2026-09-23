import React from "react";
import Link from "next/link";
import { ChevronRight, Users, BookOpen, Target } from "lucide-react";
import type { EducationLevel } from "@/types";

interface EducationCardProps {
  level: EducationLevel;
}

export const EducationCard: React.FC<EducationCardProps> = ({ level }) => {
  const isSante = level.id === "ecole-sante";

  return (
    <article className="group relative bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(15,37,87,0.12)] hover:-translate-y-1.5">
      {/* Badge Nouveau */}
      {isSante && (
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-[#c9a84c] text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
            Nouveau
          </span>
        </div>
      )}

      {/* Header coloré */}
      <div className={`bg-gradient-to-br ${level.color} p-5 text-white relative overflow-hidden`}>
        <div className="absolute -top-4 -right-4 w-20 h-20 bg-white/10 rounded-full" />
        <div className="relative z-10">
          <div className="text-3xl mb-2">{level.icon}</div>
          <h3 className="font-bold text-sm leading-tight mb-1"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
            {level.name}
          </h3>
          <p className="text-white/75 text-xs flex items-center gap-1.5">
            <Users className="w-3 h-3" />
            {level.ageRange}
            {isSante && <span className="ml-1 text-white/60">· Bac requis</span>}
          </p>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-1">
        <p className="text-slate-500 text-xs leading-relaxed mb-4 line-clamp-3">{level.description}</p>

        {/* Matières */}
        <div className="mb-4">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <BookOpen className="w-3 h-3" />
            {isSante ? "Modules" : "Matières"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {level.subjects.slice(0, 4).map((s, i) => (
              <span key={i}
                className={`px-2 py-0.5 rounded-full text-[10px] font-medium border ${
                  isSante
                    ? "bg-rose-50 border-rose-200 text-rose-700"
                    : "bg-slate-50 border-slate-200 text-slate-600"
                }`}>
                {s}
              </span>
            ))}
            {level.subjects.length > 4 && (
              <span className="px-2 py-0.5 bg-slate-100 rounded-full text-[10px] text-slate-400">
                +{level.subjects.length - 4}
              </span>
            )}
          </div>
        </div>

        {/* Objectifs */}
        <div className="flex-1 mb-5">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2 flex items-center gap-1.5">
            <Target className="w-3 h-3" />
            Objectifs
          </p>
          <ul className="space-y-1">
            {level.objectives.slice(0, 3).map((obj, i) => (
              <li key={i} className="flex items-start gap-1.5 text-xs text-slate-600">
                <span className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1 ${isSante ? "bg-rose-400" : "bg-[#c9a84c]"}`} />
                {obj}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/enseignements"
          className={`inline-flex items-center gap-1.5 font-semibold text-xs transition-colors group/link ${
            isSante ? "text-rose-600 hover:text-rose-800" : "text-[#0f2557] hover:text-[#c9a84c]"
          }`}
        >
          Voir le détail
          <ChevronRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
