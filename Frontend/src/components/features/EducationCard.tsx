import React from "react";
import Link from "next/link";
import { ChevronRight, Users, BookOpen } from "lucide-react";
import type { EducationLevel } from "@/types";

interface EducationCardProps {
  level: EducationLevel;
}

export const EducationCard: React.FC<EducationCardProps> = ({ level }) => {
  const isSante = level.id === "ecole-sante";

  return (
    <article className="group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 flex flex-col h-full relative">
      {/* Badge Nouveau pour l'école de santé */}
      {isSante && (
        <div className="absolute top-3 right-3 z-10 bg-amber-500 text-white text-xs font-bold px-2.5 py-1 rounded-full shadow-md">
          Nouveau
        </div>
      )}

      {/* En-tête coloré */}
      <div
        className={`bg-gradient-to-br ${level.color} p-6 text-white relative overflow-hidden`}
      >
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16" />
        <div className="relative z-10">
          <div className="text-4xl mb-3">{level.icon}</div>
          <h3 className="text-xl font-bold mb-1">{level.name}</h3>
          <p className="text-white/80 text-sm flex items-center gap-2">
            <Users className="w-4 h-4" />
            {level.ageRange}
          </p>
          {isSante && (
            <p className="mt-2 text-white/70 text-xs font-medium">
              🎓 Bac requis
            </p>
          )}
        </div>
      </div>

      {/* Contenu */}
      <div className="p-6 flex flex-col flex-1">
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          {level.description}
        </p>

        {/* Matières principales */}
        <div className="mb-4">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2 flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            {isSante ? "Modules principaux" : "Matières principales"}
          </p>
          <div className="flex flex-wrap gap-1.5">
            {level.subjects.slice(0, 5).map((subject, i) => (
              <span
                key={i}
                className={`px-2.5 py-1 rounded-full text-xs font-medium border ${
                  isSante
                    ? "bg-rose-50 border-rose-200 text-rose-700"
                    : "bg-gray-50 border-gray-200 text-gray-600"
                }`}
              >
                {subject}
              </span>
            ))}
            {level.subjects.length > 5 && (
              <span className="px-2.5 py-1 bg-gray-100 rounded-full text-xs text-gray-400">
                +{level.subjects.length - 5}
              </span>
            )}
          </div>
        </div>

        {/* Objectifs */}
        <div className="flex-1 mb-5">
          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wide mb-2">
            Objectifs
          </p>
          <ul className="space-y-1.5">
            {level.objectives.slice(0, 3).map((obj, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                <span
                  className={`w-1.5 h-1.5 rounded-full flex-shrink-0 mt-1.5 ${
                    isSante ? "bg-rose-500" : "bg-amber-500"
                  }`}
                />
                {obj}
              </li>
            ))}
          </ul>
        </div>

        <Link
          href="/enseignements"
          className={`inline-flex items-center gap-1.5 font-semibold text-sm hover:gap-2.5 transition-all duration-200 group/link ${
            isSante ? "text-rose-600" : "text-blue-700"
          }`}
        >
          Voir le détail
          <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
