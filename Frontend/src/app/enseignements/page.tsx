import type { Metadata } from "next";
import Link from "next/link";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { educationLevels } from "@/data/education";
import {
  CheckCircle,
  Users,
  BookOpen,
  ChevronRight,
  Target,
  Stethoscope,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Nos enseignements",
  description:
    "Découvrez les niveaux et cycles d'enseignement de l'EIB : maternelle, primaire, collège, lycée et École Professionnelle de la Santé.",
};

export default function EnseignementsPage() {
  // Séparer les niveaux scolaires classiques de l'école professionnelle
  const niveauxScolaires = educationLevels.filter(
    (l) => l.id !== "ecole-sante"
  );
  const ecoleSante = educationLevels.find((l) => l.id === "ecole-sante");

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Programmes scolaires & professionnels
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Nos enseignements
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            De la maternelle au lycée, et jusqu&apos;aux formations
            professionnelles de santé — un parcours complet pour chaque élève.
          </p>
        </div>
      </section>

      {/* Progression visuelle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <SectionTitle
              pretitle="Parcours complet"
              title="De 3 ans à la vie professionnelle"
              subtitle="L'EIB propose un cursus continu et cohérent, de la maternelle jusqu'aux formations professionnelles supérieures."
            />
          </div>

          {/* Frise de progression */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-0 flex-wrap">
            {educationLevels.map((level, i) => (
              <div key={level.id} className="flex items-center">
                <div className="relative">
                  <div
                    className={`bg-gradient-to-br ${level.color} text-white rounded-2xl px-5 py-3 text-center min-w-[90px]`}
                  >
                    <div className="text-2xl mb-1">{level.icon}</div>
                    <p className="font-bold text-xs">{level.shortName}</p>
                    <p className="text-white/80 text-xs">{level.ageRange}</p>
                  </div>
                  {/* Badge "Nouveau" pour l'école de santé */}
                  {level.id === "ecole-sante" && (
                    <span className="absolute -top-2 -right-2 bg-amber-500 text-white text-xs font-bold px-2 py-0.5 rounded-full shadow">
                      Nouveau
                    </span>
                  )}
                </div>
                {i < educationLevels.length - 1 && (
                  <ChevronRight className="w-6 h-6 text-gray-300 mx-2 flex-shrink-0 rotate-90 sm:rotate-0" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Niveaux scolaires classiques ── */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Enseignement général"
            title="Maternelle · Primaire · Collège · Lycée"
            align="left"
            className="mb-8 pb-2 border-b border-gray-200"
          />
          <div className="space-y-10 mt-8">
            {niveauxScolaires.map((level) => (
              <article
                key={level.id}
                id={level.id}
                className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3">
                  {/* En-tête coloré */}
                  <div
                    className={`bg-gradient-to-br ${level.color} p-8 text-white flex flex-col justify-between`}
                  >
                    <div>
                      <div className="text-5xl mb-4">{level.icon}</div>
                      <h2 className="text-2xl font-bold mb-2">{level.name}</h2>
                      <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                        <Users className="w-4 h-4" />
                        <span>{level.ageRange}</span>
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed">
                        {level.description}
                      </p>
                    </div>
                    <Link
                      href="/inscriptions"
                      className="mt-6 inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white font-semibold px-4 py-2.5 rounded-xl text-sm transition-colors border border-white/30 w-fit"
                    >
                      S&apos;inscrire à ce niveau
                      <ChevronRight className="w-4 h-4" />
                    </Link>
                  </div>

                  {/* Contenu détaillé */}
                  <div className="lg:col-span-2 p-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                      <div>
                        <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                          <BookOpen className="w-5 h-5 text-blue-700" />
                          Matières enseignées
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {level.subjects.map((subject, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-gray-50 border border-gray-200 rounded-full text-xs text-gray-700 font-medium"
                            >
                              {subject}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                          <Target className="w-5 h-5 text-amber-600" />
                          Objectifs pédagogiques
                        </h3>
                        <ul className="space-y-2.5">
                          {level.objectives.map((obj, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                              <CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-600 text-sm">{obj}</span>
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
        <section
          id={ecoleSante.id}
          className="py-16 bg-gradient-to-br from-rose-50 to-red-50 border-t-4 border-rose-500"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* En-tête section */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg">
                  <Stethoscope className="w-6 h-6 text-white" />
                </div>
                <div>
                  <span className="text-xs font-bold uppercase tracking-widest text-rose-600 block">
                    Formation professionnelle supérieure
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900">
                    École Professionnelle de la Santé
                  </h2>
                </div>
              </div>
              <span className="sm:ml-auto inline-flex items-center gap-1.5 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow">
                ✦ Nouveau à l&apos;EIB
              </span>
            </div>

            {/* Carte principale */}
            <div className="bg-white rounded-3xl shadow-md border border-rose-100 overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-3">
                {/* Colonne gauche — présentation */}
                <div className="bg-gradient-to-br from-rose-500 to-red-700 p-8 text-white flex flex-col justify-between">
                  <div>
                    <div className="text-5xl mb-4">{ecoleSante.icon}</div>
                    <h3 className="text-2xl font-bold mb-2">{ecoleSante.name}</h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm mb-4">
                      <Users className="w-4 h-4" />
                      <span>{ecoleSante.ageRange}</span>
                    </div>
                    <p className="text-white/90 text-sm leading-relaxed mb-4">
                      {ecoleSante.description}
                    </p>
                    {/* Prérequis */}
                    <div className="bg-white/10 border border-white/20 rounded-xl p-4">
                      <p className="text-xs font-bold uppercase tracking-wide text-white/70 mb-2">
                        Condition d&apos;accès
                      </p>
                      <p className="text-white text-sm font-medium">
                        🎓 Baccalauréat requis (toutes séries)
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/inscriptions"
                    className="mt-6 inline-flex items-center gap-2 bg-white text-rose-600 hover:bg-rose-50 font-bold px-4 py-2.5 rounded-xl text-sm transition-colors w-fit shadow"
                  >
                    S&apos;inscrire à l&apos;école de santé
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>

                {/* Colonne droite — matières + objectifs */}
                <div className="lg:col-span-2 p-8">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Modules de formation */}
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                        <BookOpen className="w-5 h-5 text-rose-600" />
                        Modules de formation
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {ecoleSante.subjects.map((subject, i) => (
                          <span
                            key={i}
                            className="px-3 py-1.5 bg-rose-50 border border-rose-200 rounded-full text-xs text-rose-700 font-medium"
                          >
                            {subject}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Objectifs */}
                    <div>
                      <h3 className="flex items-center gap-2 font-bold text-gray-900 mb-4 text-sm uppercase tracking-wide">
                        <Target className="w-5 h-5 text-rose-600" />
                        Objectifs de formation
                      </h3>
                      <ul className="space-y-2.5">
                        {ecoleSante.objectives.map((obj, i) => (
                          <li key={i} className="flex items-start gap-2.5">
                            <CheckCircle className="w-4 h-4 text-rose-500 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-600 text-sm">{obj}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Débouchés */}
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <h3 className="font-bold text-gray-900 text-sm uppercase tracking-wide mb-4">
                      🩺 Débouchés professionnels
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {[
                        "Infirmier(ère) diplômé(e)",
                        "Aide-soignant(e)",
                        "Technicien de laboratoire",
                        "Agent de santé communautaire",
                        "Assistant médical",
                        "Sage-femme",
                      ].map((job, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 bg-rose-50 border border-rose-100 rounded-lg px-3 py-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-rose-500 flex-shrink-0" />
                          <span className="text-xs text-gray-700 font-medium">
                            {job}
                          </span>
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

      {/* CTA Inscription */}
      <section className="py-16 bg-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Prêt à rejoindre l&apos;EIB ?
          </h2>
          <p className="text-amber-100 text-lg mb-8">
            Les inscriptions sont ouvertes pour tous les niveaux, de la
            maternelle à l&apos;École Professionnelle de la Santé.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscriptions"
              className="bg-white text-amber-600 font-bold px-8 py-3.5 rounded-xl hover:bg-amber-50 transition-colors shadow-lg"
            >
              Voir les inscriptions
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white font-bold px-8 py-3.5 rounded-xl hover:bg-white/10 transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
