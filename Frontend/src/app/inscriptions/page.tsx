import type { Metadata } from "next";
import Link from "next/link";
import {
  CheckCircle,
  FileText,
  Calendar,
  Phone,
  Mail,
  MessageCircle,
  ChevronRight,
  AlertCircle,
  Clock,
  CreditCard,
  Users,
  ClipboardList,
  Info,
} from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
import { Card } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Inscriptions",
  description:
    "Toutes les informations sur les inscriptions au Complexe Scolaire Privé Elhadj Ibrahima Barry (E.I.B) : tarifs, procédure, dossiers à fournir.",
};

const steps = [
  {
    step: 1,
    icon: FileText,
    title: "Retirer le dossier",
    description:
      "Venez retirer le dossier d'inscription directement au secrétariat de l'établissement.",
    color: "from-blue-500 to-blue-700",
  },
  {
    step: 2,
    icon: ClipboardList,
    title: "Constituer le dossier",
    description:
      "Rassemblez toutes les pièces requises. Remplissez soigneusement le formulaire d'inscription.",
    color: "from-amber-400 to-amber-600",
  },
  {
    step: 3,
    icon: Users,
    title: "Entretien d'admission",
    description:
      "Un entretien avec la direction peut être organisé pour les nouvelles inscriptions et les passages en lycée.",
    color: "from-purple-400 to-purple-600",
  },
  {
    step: 4,
    icon: CreditCard,
    title: "Règlement des frais",
    description:
      "Tout versement se fait à la comptabilité contre un reçu en bonne et due forme.",
    color: "from-emerald-400 to-emerald-600",
  },
  {
    step: 5,
    icon: CheckCircle,
    title: "Confirmation d'admission",
    description:
      "Vous recevrez une confirmation officielle d'admission. L'élève est officiellement inscrit.",
    color: "from-teal-400 to-teal-600",
  },
];

const documents = [
  { name: "Un extrait d'acte de naissance", required: true },
  { name: "4 photos d'identité", required: true },
  {
    name: "L'attestation du CEE, BEPC ou l'Attestation de niveau pour la 8ème, 9ème, 11ème, 12ème",
    required: true,
  },
  {
    name: "Un paquet de RAM pour chaque élève en classe d'examen",
    required: true,
  },
];

const notices = [
  "Tout versement se fait à la comptabilité contre un reçu en bonne et due forme.",
  "Tout montant encaissé est entièrement dû, pas de remboursement ni permutation.",
  "5% de réduction pour tout paiement Annuel ou à partir du 4ème enfant d'une même famille.",
];

// ── Tarifs officiels (fiche 2026-2027) ──────────────────────────────
const feesEnseignementGeneral = [
  {
    num: 1,
    level: "Maternelle",
    mensualite: "100 000 GNF",
    t1: "300 000 GNF",
    t2: "300 000 GNF",
    t3: "300 000 GNF",
    annuel: "900 000 GNF",
    color: "bg-emerald-50",
    badge: "bg-emerald-100 text-emerald-800",
  },
  {
    num: 2,
    level: "Primaire",
    mensualite: "110 000 GNF",
    t1: "330 000 GNF",
    t2: "330 000 GNF",
    t3: "330 000 GNF",
    annuel: "990 000 GNF",
    color: "bg-blue-50",
    badge: "bg-blue-100 text-blue-800",
  },
  {
    num: 3,
    level: "Collège",
    mensualite: "150 000 GNF",
    t1: "450 000 GNF",
    t2: "450 000 GNF",
    t3: "450 000 GNF",
    annuel: "1 350 000 GNF",
    color: "bg-amber-50",
    badge: "bg-amber-100 text-amber-800",
  },
  {
    num: 4,
    level: "Lycée",
    mensualite: "170 000 GNF",
    t1: "510 000 GNF",
    t2: "510 000 GNF",
    t3: "510 000 GNF",
    annuel: "1 530 000 GNF",
    color: "bg-purple-50",
    badge: "bg-purple-100 text-purple-800",
  },
];

const feesEcoleSante = [
  {
    num: 1,
    level: "6ème Année",
    note: "Classe d'examen",
    mensualite: "150 000 GNF",
    t1: "450 000 GNF",
    t2: "450 000 GNF",
    t3: "450 000 GNF",
    annuel: "1 350 000 GNF",
  },
  {
    num: 2,
    level: "10ème Année",
    note: "Classe d'examen",
    mensualite: "190 000 GNF",
    t1: "570 000 GNF",
    t2: "570 000 GNF",
    t3: "570 000 GNF",
    annuel: "1 710 000 GNF",
  },
  {
    num: 3,
    level: "Terminale",
    note: "Classe d'examen",
    mensualite: "210 000 GNF",
    t1: "630 000 GNF",
    t2: "630 000 GNF",
    t3: "630 000 GNF",
    annuel: "1 890 000 GNF",
  },
];

export default function InscriptionsPage() {
  return (
    <div className="min-h-screen">
      <PageHero
        pretitle="Année scolaire 2026 – 2027"
        title="Inscriptions"
        subtitle="Tout ce qu'il faut savoir pour inscrire votre enfant au Complexe Scolaire Privé E.I.B."
      />

      {/* Bannière inscription/réinscription */}
      <div className="bg-amber-500 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-center sm:text-left flex-wrap">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold">Enseignement général :</span>{" "}
                <span className="text-white text-xl font-extrabold">50 000 GNF</span>
              </div>
            </div>
            <span className="hidden sm:block w-px h-8 bg-white/30" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                <FileText className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-white font-bold">École Professionnelle de la Santé :</span>{" "}
                <span className="text-white text-xl font-extrabold">100 000 GNF</span>
              </div>
            </div>
            <span className="hidden sm:block w-px h-8 bg-white/30" />
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-white/80" />
              <span className="text-amber-100 text-sm font-medium">
                Inscriptions ouvertes — Année scolaire 2026 – 2027
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* ── Tarifs Enseignement Général ── */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Tarifs officiels 2026 – 2027"
            title="Tarifs & modalités de paiement"
            subtitle="Enseignement général — de la Maternelle au Lycée"
            align="center"
            className="mb-10"
          />

          {/* Table desktop / scroll mobile */}
          <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm mb-6">
            <table className="w-full min-w-[640px]">
              <thead className="bg-blue-900 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide w-8">
                    N°
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide">
                    Cycle
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    Mensualité
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    1ère Tranche
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    2ème Tranche
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    3ème Tranche
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide bg-amber-600">
                    Écolage Annuel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {feesEnseignementGeneral.map((fee) => (
                  <tr key={fee.num} className={`${fee.color} hover:brightness-95 transition-all`}>
                    <td className="px-4 py-4 text-center">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mx-auto ${fee.badge}`}>
                        {fee.num}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-bold text-gray-900 text-sm">
                      {fee.level}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm font-medium">
                      {fee.mensualite}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm">
                      {fee.t1}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm">
                      {fee.t2}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm">
                      {fee.t3}
                    </td>
                    <td className="px-4 py-4 text-center font-extrabold text-blue-700 text-sm bg-amber-50">
                      {fee.annuel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Tarifs Classes d'examen École de la Santé ── */}
          <SectionTitle
            pretitle="Tarifs officiels 2026 – 2027"
            title="Tarifs & modalités de paiement des classes d'Examen"
            subtitle="Applicable aux classes d'examen : 6ème Année, 10ème Année et Terminale."
            align="center"
            className="mb-6 mt-14"
          />

          <div className="overflow-x-auto rounded-2xl border border-rose-200 shadow-sm">
            <table className="w-full min-w-[640px]">
              <thead className="bg-gradient-to-r from-rose-600 to-red-700 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide w-8">
                    N°
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide">
                    Cycle
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    Mensualité
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    1ère Tranche
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    2ème Tranche
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">
                    3ème Tranche
                  </th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide bg-rose-800">
                    Écolage Annuel
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100">
                {feesEcoleSante.map((fee) => (
                  <tr key={fee.num} className="bg-rose-50 hover:bg-rose-100 transition-colors">
                    <td className="px-4 py-4 text-center">
                      <span className="w-7 h-7 rounded-full bg-rose-200 text-rose-800 flex items-center justify-center text-xs font-bold mx-auto">
                        {fee.num}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <p className="font-bold text-gray-900 text-sm">{fee.level}</p>
                      <span className="inline-block mt-0.5 text-xs bg-rose-200 text-rose-800 font-semibold px-2 py-0.5 rounded-full">
                        {fee.note}
                      </span>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm font-medium">
                      {fee.mensualite}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm">
                      {fee.t1}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm">
                      {fee.t2}
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm">
                      {fee.t3}
                    </td>
                    <td className="px-4 py-4 text-center font-extrabold text-rose-700 text-sm bg-rose-100">
                      {fee.annuel}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* ── Tableau 3 : Filières & tarifs École Professionnelle de la Santé ── */}
          <SectionTitle
            pretitle="École Professionnelle de la Santé — Filières"
            title="Tarifs par filière"
            subtitle="Inscription : 100 000 GNF (distinct des frais d'inscription de l'enseignement général)"
            align="center"
            className="mb-6 mt-14"
          />

          {/* Filières disponibles */}
          <div className="flex flex-wrap gap-2 justify-center mb-5">
            {["Infirmier d'État", "Sage Femme d'État", "Technicien de Laboratoire", "Technicien de Santé Communautaire (TSC)", "Agent Technique de la Santé (ATS)"].map((f, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                ✅ {f}
              </span>
            ))}
          </div>

          <div className="overflow-x-auto rounded-2xl border border-rose-200 shadow-sm">
            <table className="w-full min-w-[500px]">
              <thead className="bg-gradient-to-r from-rose-700 to-red-800 text-white">
                <tr>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide w-8">N°</th>
                  <th className="px-4 py-3 text-left text-xs font-bold uppercase tracking-wide">Niveau / Filière</th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">1ère Tranche</th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide">2ème Tranche</th>
                  <th className="px-4 py-3 text-center text-xs font-bold uppercase tracking-wide bg-rose-900">Annuel</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-rose-100">
                {[
                  { num: 1, icon: "🩺", level: "Infirmier d'État",           t1: "1 800 000 GNF", t2: "1 000 000 GNF", annuel: "2 800 000 GNF", color: "bg-red-50",    badge: "bg-red-100 text-red-800" },
                  { num: 2, icon: "👩‍⚕️", level: "Sage Femme d'État",          t1: "1 800 000 GNF", t2: "1 000 000 GNF", annuel: "2 800 000 GNF", color: "bg-rose-50",  badge: "bg-rose-100 text-rose-800" },
                  { num: 3, icon: "🔬", level: "Technicien de Laboratoire",   t1: "1 800 000 GNF", t2: "1 000 000 GNF", annuel: "2 800 000 GNF", color: "bg-amber-50", badge: "bg-amber-100 text-amber-800" },
                  { num: 4, icon: "🏥", level: "TSC / ATS",                   t1: "1 600 000 GNF", t2: "1 000 000 GNF", annuel: "2 600 000 GNF", color: "bg-slate-50", badge: "bg-slate-100 text-slate-800" },
                ].map((fee) => (
                  <tr key={fee.num} className={`${fee.color} hover:brightness-95 transition-all`}>
                    <td className="px-4 py-4 text-center">
                      <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold mx-auto ${fee.badge}`}>
                        {fee.num}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">{fee.icon}</span>
                        <span className="font-bold text-gray-900 text-sm">{fee.level}</span>
                      </div>
                    </td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm font-medium">{fee.t1}</td>
                    <td className="px-4 py-4 text-center text-gray-700 text-sm">{fee.t2}</td>
                    <td className="px-4 py-4 text-center font-extrabold text-rose-700 text-sm bg-rose-100">{fee.annuel}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Notes importantes */}
          <div className="mt-8 bg-blue-50 border border-blue-200 rounded-2xl p-6">
            <div className="flex items-center gap-2 mb-4">
              <Info className="w-5 h-5 text-blue-700 flex-shrink-0" />
              <h3 className="font-bold text-blue-900">Notes importantes</h3>
            </div>
            <ul className="space-y-2">
              {notices.map((note, i) => (
                <li key={i} className="flex items-start gap-2.5 text-sm text-blue-800">
                  <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Dossiers à fournir */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Dossiers */}
            <div>
              <SectionTitle
                pretitle="Dossier d'inscription"
                title="Dossiers à fournir"
                subtitle="Un livret comportant les pièces suivantes."
                align="left"
              />
              <ul className="space-y-4 mt-8">
                {documents.map((doc, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-blue-700 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                      <FileText className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <span className="text-gray-700 text-sm leading-relaxed">
                        {doc.name}
                      </span>
                      {doc.required && (
                        <span className="ml-2 text-xs text-red-500 font-semibold">
                          Obligatoire
                        </span>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Procédure */}
            <div>
              <SectionTitle
                pretitle="Comment s'inscrire"
                title="Procédure d'inscription"
                subtitle="5 étapes simples pour inscrire votre enfant."
                align="left"
              />
              <div className="space-y-4 mt-8">
                {steps.map((step) => {
                  const Icon = step.icon;
                  return (
                    <div key={step.step} className="flex items-start gap-4">
                      <div
                        className={`w-10 h-10 bg-gradient-to-br ${step.color} rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm`}
                      >
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900 text-sm">
                          Étape {step.step} — {step.title}
                        </p>
                        <p className="text-gray-500 text-sm mt-0.5 leading-relaxed">
                          {step.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact inscription */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Des questions sur les inscriptions ?
          </h2>
          <p className="text-blue-200 text-lg mb-8">
            Notre équipe est disponible pour vous accompagner dans toutes vos
            démarches d&apos;inscription.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            <a
              href="tel:+224620229584"
              className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-5 transition-colors"
            >
              <Phone className="w-7 h-7 text-amber-400" />
              <span className="font-semibold text-sm">Appeler</span>
              <span className="text-blue-300 text-xs text-center">
                +224 620 22 95 84<br />/ 620 47 13 92
              </span>
            </a>
            <a
              href="https://wa.me/224620229584"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-green-600/20 hover:bg-green-600/30 border border-green-500/30 rounded-2xl p-5 transition-colors"
            >
              <MessageCircle className="w-7 h-7 text-green-400" />
              <span className="font-semibold text-sm">WhatsApp</span>
              <span className="text-green-300 text-xs">+224 620 22 95 84</span>
            </a>
            <a
              href="mailto:gspeib224@gmail.com"
              className="flex flex-col items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 rounded-2xl p-5 transition-colors"
            >
              <Mail className="w-7 h-7 text-amber-400" />
              <span className="font-semibold text-sm">Email</span>
              <span className="text-blue-300 text-xs">gspeib224@gmail.com</span>
            </a>
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-bold px-8 py-3.5 rounded-xl transition-colors"
          >
            Formulaire de contact
            <ChevronRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
