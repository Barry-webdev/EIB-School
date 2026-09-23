"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, BookOpen, Users, Award, GraduationCap, ArrowDown } from "lucide-react";

const stats = [
  { icon: Users,        value: "850+",  label: "Élèves" },
  { icon: BookOpen,     value: "60+",   label: "Enseignants" },
  { icon: Award,        value: "96%",   label: "Réussite" },
  { icon: GraduationCap, value: "25 ans", label: "Expérience" },
];

export const Hero: React.FC = () => {
  const scrollTo = () => {
    document.getElementById("about-preview")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Bannière principale"
    >
      {/* ── Fond photo établissement ── */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Etablissement.jpeg"
          alt="Complexe Scolaire Privé Elhadj Ibrahima Barry — Pita, Guinée"
          fill
          className="object-cover object-center scale-105"
          priority
          sizes="100vw"
        />
        {/* Overlay multicouche pour profondeur */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071540]/92 via-[#0f2557]/78 to-[#0f2557]/55" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#071540]/70 via-transparent to-transparent" />
      </div>

      {/* ── Motif géométrique décoratif ── */}
      <div className="absolute inset-0 z-0 opacity-5"
           style={{ backgroundImage: "radial-gradient(circle, #c9a84c 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      {/* ── Contenu ── */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-24 lg:pt-40 lg:pb-32">
        <div className="max-w-3xl">

          {/* Logo */}
          <div className="mb-8 animate-fade-up" style={{ animationDelay: "0.1s", opacity: 0, animationFillMode: "forwards" }}>
            <div className="relative w-20 h-20 rounded-2xl overflow-hidden ring-2 ring-[#c9a84c]/40 shadow-2xl">
              <Image src="/Logo EIB.jpg" alt="Logo E.I.B" fill className="object-cover" sizes="80px" priority />
            </div>
          </div>

          {/* Label */}
          <div className="mb-5 animate-fade-up" style={{ animationDelay: "0.2s", opacity: 0, animationFillMode: "forwards" }}>
            <span className="inline-flex items-center gap-2 text-xs font-bold tracking-[0.2em] uppercase text-[#c9a84c]">
              <span className="w-8 h-px bg-[#c9a84c]" />
              Complexe Scolaire Privé — Pita, Guinée
              <span className="w-8 h-px bg-[#c9a84c]" />
            </span>
          </div>

          {/* Titre */}
          <h1
            className="mb-4 font-bold text-white leading-[1.1] animate-fade-up"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(2.4rem, 6vw, 4.2rem)",
              animationDelay: "0.3s", opacity: 0, animationFillMode: "forwards"
            }}
          >
            Elhadj Ibrahima Barry
            <span className="block text-[#c9a84c]">E.I.B</span>
          </h1>

          {/* Slogan */}
          <p className="text-white/70 text-lg sm:text-xl font-light italic mb-5 animate-fade-up"
             style={{ animationDelay: "0.4s", opacity: 0, animationFillMode: "forwards" }}>
            &ldquo; La rigueur pour l&apos;excellence &rdquo;
          </p>

          {/* Description */}
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-10 max-w-xl animate-fade-up"
             style={{ animationDelay: "0.5s", opacity: 0, animationFillMode: "forwards" }}>
            Un établissement d&apos;excellence formant les élèves de la maternelle à
            l&apos;École Professionnelle de la Santé, dans un cadre exigeant et bienveillant.
          </p>

          {/* CTA */}
          <div className="flex flex-wrap gap-3 mb-16 animate-fade-up"
               style={{ animationDelay: "0.6s", opacity: 0, animationFillMode: "forwards" }}>
            <Link
              href="/a-propos"
              className="inline-flex items-center gap-2 bg-[#c9a84c] hover:bg-[#b08d35] text-white font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              <BookOpen className="w-4 h-4" />
              Découvrir l&apos;établissement
            </Link>
            <Link
              href="/inscriptions"
              className="inline-flex items-center gap-2 bg-white text-[#0f2557] hover:bg-slate-50 font-semibold px-7 py-3.5 rounded-xl text-sm transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            >
              S&apos;inscrire
              <ChevronRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white/80 hover:text-white font-medium px-7 py-3.5 rounded-xl text-sm transition-all duration-200"
            >
              Nous contacter
            </Link>
          </div>

          {/* Chiffres clés */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 animate-fade-up"
               style={{ animationDelay: "0.7s", opacity: 0, animationFillMode: "forwards" }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i}
                  className="bg-white/8 backdrop-blur-md border border-white/12 rounded-2xl px-4 py-4 text-center hover:bg-white/12 transition-colors">
                  <Icon className="w-5 h-5 text-[#c9a84c] mx-auto mb-2" />
                  <p className="text-xl font-bold text-white leading-none mb-1">{stat.value}</p>
                  <p className="text-white/55 text-xs">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* ── Scroll indicator ── */}
      <button
        onClick={scrollTo}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 text-white/50 hover:text-white/80 transition-colors group"
        aria-label="Défiler vers le bas"
      >
        <span className="text-xs tracking-widest uppercase text-[10px]">Découvrir</span>
        <ArrowDown className="w-5 h-5 animate-bounce" />
      </button>
    </section>
  );
};
