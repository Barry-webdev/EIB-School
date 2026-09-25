import React from "react";
import Image from "next/image";

interface PageHeroProps {
  pretitle?: string;
  title: string;
  subtitle?: string;
}

export const PageHero: React.FC<PageHeroProps> = ({ pretitle, title, subtitle }) => (
  <section className="relative py-24 text-white overflow-hidden" aria-label="En-tête de page">
    {/* Image établissement en fond */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/Etablissement.jpeg"
        alt="Complexe Scolaire Privé E.I.B"
        fill
        className="object-cover object-center"
        priority
        sizes="100vw"
      />
      {/* Overlay navy semi-transparent */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/92 via-[#0f2557]/82 to-[#0f2557]/65" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#071540]/50 via-transparent to-transparent" />
    </div>

    {/* Motif pointillé décoratif */}
    <div
      className="absolute inset-0 z-0 opacity-5"
      style={{
        backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)",
        backgroundSize: "36px 36px",
      }}
    />

    {/* Contenu */}
    <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      {pretitle && (
        <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c] mb-5">
          <span className="w-8 h-px bg-[#c9a84c]" />
          {pretitle}
          <span className="w-8 h-px bg-[#c9a84c]" />
        </span>
      )}
      <h1
        className="text-4xl sm:text-5xl font-bold text-white mb-4 leading-tight"
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h1>
      {subtitle && (
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  </section>
);
