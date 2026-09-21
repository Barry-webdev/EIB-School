"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, BookOpen, Users, Award, ArrowDown } from "lucide-react";

export const Hero: React.FC = () => {
  const scrollToContent = () => {
    const el = document.getElementById("about-preview");
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Bannière principale"
    >
      {/* Image de fond — établissement */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Etablissement.jpeg"
          alt="Complexe Scolaire Privé Elhadj Ibrahima Barry"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Overlay dégradé pour lisibilité */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/85 via-blue-800/75 to-blue-900/80" />
      </div>

      {/* Contenu principal */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <div className="w-24 h-24 rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20">
            <Image
              src="/Logo EIB.jpg"
              alt="Logo Complexe Scolaire E.I.B"
              width={96}
              height={96}
              className="w-full h-full object-cover"
              priority
            />
          </div>
        </div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 text-white/90 text-sm font-medium mb-8">
          <Award className="w-4 h-4 text-amber-400" />
          <span>Excellence · Discipline · Réussite</span>
        </div>

        {/* Titre principal */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
          Complexe Scolaire Privé
          <span className="block text-amber-400">Elhadj Ibrahima Barry</span>
          <span className="block text-2xl sm:text-3xl md:text-4xl font-semibold mt-2 tracking-widest">
            E.I.B
          </span>
        </h1>

        {/* Slogan */}
        <p className="text-xl sm:text-2xl text-blue-200 font-light mb-4 italic">
          &ldquo; La rigueur pour l&apos;excellence &rdquo;
        </p>

        {/* Description courte */}
        <p className="max-w-2xl mx-auto text-blue-100 text-lg leading-relaxed mb-10">
          Un complexe scolaire d&apos;excellence à Pita, Guinée — offrant des
          enseignements de qualité de la maternelle à l&apos;École
          Professionnelle de la Santé, dans un cadre bienveillant et rigoureux.
        </p>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link
            href="/a-propos"
            className="inline-flex items-center gap-2 bg-white text-blue-900 font-bold px-8 py-4 rounded-xl hover:bg-amber-50 transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            <BookOpen className="w-5 h-5" />
            Découvrir l&apos;établissement
            <ChevronRight className="w-5 h-5" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl hover:-translate-y-0.5 text-base"
          >
            Nous contacter
          </Link>
          <Link
            href="/inscriptions"
            className="inline-flex items-center gap-2 border-2 border-white/60 text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            S&apos;inscrire
          </Link>
        </div>

        {/* Chiffres clés dans le Hero */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {[
            { icon: Users, value: "850+", label: "Élèves" },
            { icon: BookOpen, value: "60+", label: "Enseignants" },
            { icon: Award, value: "96%", label: "Taux de réussite" },
            { icon: Award, value: "25 ans", label: "D'expérience" },
          ].map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-4 text-center"
              >
                <Icon className="w-6 h-6 text-amber-400 mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-blue-200 text-sm">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Flèche de scroll */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
        aria-label="Défiler vers le bas"
      >
        <ArrowDown className="w-7 h-7" />
      </button>
    </section>
  );
};
