import React from "react";
import Link from "next/link";
import Image from "next/image";
import { CheckCircle, ChevronRight } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";

const highlights = [
  "Enseignement de qualité internationale",
  "Corps enseignant qualifié et dévoué",
  "Infrastructures modernes et équipées",
  "Suivi personnalisé de chaque élève",
  "Activités parascolaires enrichissantes",
  "Environnement sûr et bienveillant",
];

const milestones = [
  { value: "850+",   label: "Élèves" },
  { value: "96%",    label: "Réussite" },
  { value: "60+",    label: "Enseignants" },
  { value: "25 ans", label: "Expertise" },
];

export const AboutPreview: React.FC = () => (
  <section
    id="about-preview"
    className="py-20 lg:py-28 bg-[#fafaf7]"
    aria-label="Présentation de l'établissement"
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* ── Colonne image ── */}
        <div className="relative order-2 lg:order-1">
          {/* Image principale */}
          <div className="relative h-80 sm:h-96 lg:h-[480px] rounded-3xl overflow-hidden shadow-[0_16px_48px_rgba(15,37,87,0.18)]">
            <Image
              src="/Etablissement.jpeg"
              alt="Complexe Scolaire Privé E.I.B"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2557]/40 via-transparent to-transparent" />
          </div>

          {/* Badge flottant chiffres */}
          <div className="absolute -bottom-6 -right-4 sm:-right-8 bg-white rounded-2xl shadow-[0_8px_32px_rgba(15,37,87,0.14)] p-5 grid grid-cols-2 gap-4 min-w-[200px]">
            {milestones.map((m, i) => (
              <div key={i} className="text-center">
                <p className="text-lg font-bold text-[#0f2557] leading-none"
                   style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>{m.value}</p>
                <p className="text-[10px] text-slate-400 mt-0.5">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Trait décoratif */}
          <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-[#c9a84c]/25 rounded-2xl -z-10" />
        </div>

        {/* ── Colonne texte ── */}
        <div className="order-1 lg:order-2">
          <SectionTitle
            pretitle="À propos de nous"
            title="Un complexe scolaire au service de l'excellence"
            subtitle="Depuis plus de 25 ans, le Complexe E.I.B forme des générations d'élèves à Pita, dans un environnement pédagogique rigoureux et stimulant."
            align="left"
          />

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mt-8 mb-8">
            {highlights.map((item, i) => (
              <li key={i} className="flex items-start gap-2.5">
                <CheckCircle className="w-4 h-4 text-[#c9a84c] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-600">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 bg-[#0f2557] hover:bg-[#142f85] text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5"
          >
            En savoir plus
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  </section>
);
