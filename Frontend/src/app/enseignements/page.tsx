import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { educationLevels } from "@/data/education";
import {
  CheckCircle,
  Users,
  BookOpen,
  ChevronRight,
  Target,
  Stethoscope,
  GraduationCap,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos enseignements",
  description:
    "Découvrez les niveaux et cycles d'enseignement de l'EIB : maternelle, primaire, collège, lycée et École Professionnelle de la Santé.",
};

export default function EnseignementsPage() {
  const niveauxScolaires = educationLevels.filter((l) => l.id !== "ecole-sante");
  const ecoleSante = educationLevels.find((l) => l.id === "ecole-sante");

  return (
    <div className="min-h-screen">
      <PageHero
        pretitle="Programmes scolaires & professionnels"
        title="Nos enseignements"
        subtitle="De la maternelle au lycée, et jusqu'aux formations professionnelles de santé — un parcours complet pour chaque élève."
      />

      {/* Frise de progression */}
      <section className="py-12 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 flex-wrap">
            {educationLevels.map((level, i) => (
              <div key={level.id} className="flex items-center">
                <div className="relative">
                  <div className="bg-[#0f2557] text-white rounded-2xl px-5 py-3 text-center min-w-[90px] hover:bg-[#142f85] transition-colors">
                    <div className="text-2xl mb-1">{level.icon}</div>
                    <p className="font-bold text-xs">{level.shortName}</p>
                    <p className="text-white/70 text-xs">{level.ageRange}</p>
                  </div>
                </div>
                {i < educationLevels.length - 1 && (
                  <ChevronRight className="w-5 h-5 text-slate-300 mx-2 flex-shrink-0 rotate-90 sm:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Niveaux scolaires ── */}
      <section className="py-12 bg-[#fafaf7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Enseignement général"
            title="Maternelle · Primaire · Collège · Lycée"
            align="left"
            className="mb-8 pb-3 border-b border-slate-200"
          />
          <div className="space-y-6 mt-8">
            {niveauxScolaires.map((level) => (
              <article
                key={level.id}
                id={level.id}
                className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* Colonne gauche — Navy uniforme */}
                  <div className="bg-[#0f2557] p-8 text-white flex flex-col justify-between">
                    <div>
                      <div className="text-5xl mb-4">{level.icon}</div>
                      <h2
                        className="text-2xl font-bold mb-2"
                        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                      >
                        {level.name}
                      </h2>
                      <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                        {level.ageRange && (
                          <Users className="w-4 h-4" />
                        )}
                        <span>{level.ageRange}</span>
                      </div>
                      <p className="text-slate-300 text-sm leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                    <Link
                      href="/inscriptions"
                      className="mt-6 inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b08d35] text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors w-fit"
                    >
                      S&apos;inscrire à ce niveau
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Colonne droite — contenu */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      {/* Matières */}
                      <div>
                        <h3 className="flex items-center gap-2 font-bold text-[#0f2557] mb-4 text-xs uppercase tracking-widest">
                          <BookOpen className="w-4 h-4 text-[#c9a84c]" />
                          Matières enseignées
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {level.subjects.map((subject, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-700 font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      {/* Objectifs */}
                      <div>
                        <h3 className="flex items-center gap-2 font-bold text-[#0f2557] mb-4 text-xs uppercase tracking-widest">
                          <Target className="w-4 h-4 text-[#c9a84c]" />
                          Objectifs pédagogiques
                        </h3>
                        <ul className="space-y-2.5">
                          {level.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                              <span className="text-slate-600 text-sm">{obj}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── École Professionnelle de la Santé ── */}
      {ecoleSante && (
        <section id={ecoleSante.id} className="py-12 bg-white border-t border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-8 pb-3 border-b border-slate-200">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 bg-[#0f2557] rounded-xl flex items-center justify-center shadow-sm">
                  <Stethoscope className="w-5 h-5 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-[#c9a84c]">
                    Formation professionnelle supérieure
                  </span>
                  <h2
                    className="text-xl font-bold text-[#0f2557]"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    École Professionnelle de la Santé
                  </h2>
                </div>
              </div>
              <span className="sm:ml-auto inline-flex items-center gap-1.5 bg-[#c9a84c] text-white text-xs font-bold px-3 py-1.5 rounded-full">
                ✦ Nouveau à l&apos;E.I.B
              </span>
            </div>

            {/* Carte santé — même style Navy */}
            <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                <div className="bg-[#0f2557] p-8 text-white flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">{ecoleSante.icon}</div>
                    <h3
                      className="text-2xl font-bold mb-2"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {ecoleSante.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/70 text-sm mb-4">
                      <Users className="w-4 h-4" />
                      <span>{ecoleSante.ageRange}</span>
                    </div>
                    <p className="text-slate-300 text-sm leading-relaxed mb-4">
                      {ecoleSante.description}
                    </p>
                    <div className="bg-white/10 border border-white/20 rounded-xl p-3">
                      <p className="text-xs font-bold uppercase tracking-wide text-white/60 mb-1">
                        Condition d&apos;accès
                      </p>
                      <p className="text-white text-sm font-medium">
                        🎓 Baccalauréat requis (toutes séries)
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/inscriptions"
                    className="mt-6 inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b08d35] text-white font-bold px-4 py-2.5 rounded-xl text-sm transition-colors w-fit"
                  >
                    S&apos;inscrire à l&apos;école de santé
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className="lg:col-span-2 p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-[#0f2557] mb-4 text-xs uppercase tracking-widest">
                        <BookOpen className="w-4 h-4 text-[#c9a84c]" />
                        Modules de formation
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {ecoleSante.subjects.map((subject, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-slate-50 border border-slate-200 rounded-full text-xs text-slate-700 font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-[#0f2557] mb-4 text-xs uppercase tracking-widest">
                        <Target className="w-4 h-4 text-[#c9a84c]" />
                        Objectifs de formation
                      </h3>
                      <ul className="space-y-2.5">
                        {ecoleSante.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                            <span className="text-slate-600 text-sm">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Débouchés */}
                  <div className="mt-8 pt-6 border-t border-slate-100">
                    <h3 className="font-bold text-[#0f2557] text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#c9a84c]" />
                      Débouchés professionnels
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "Infirmier(ère) d'État",
                        "Sage-Femme d'État",
                        "Technicien de laboratoire",
                        "Agent de santé (TSC)",
                        "Agent Technique (ATS)",
                        "Assistant médical",
                      ].map((job, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-slate-50 border border-slate-200 rounded-lg px-3 py-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#c9a84c] flex-shrink-0" />
                          <span className="text-xs text-slate-700 font-medium">{job}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-14 bg-[#0f2557]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2
            className="text-3xl font-bold text-white mb-4"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Prêt à rejoindre l&apos;E.I.B ?
          </h2>
          <p className="text-slate-300 text-base mb-8">
            Les inscriptions sont ouvertes pour tous les niveaux.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscriptions"
              className="bg-[#c9a84c] hover:bg-[#b08d35] text-white font-bold px-8 py-3.5 rounded-xl transition-colors shadow-lg"
            >
              Voir les inscriptions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white/30 hover:border-white/60 text-white font-bold px-8 py-3.5 rounded-xl transition-all"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
