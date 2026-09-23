"use client";

import React, { useState } from "react";
import { Send, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import type { ContactFormData, FormStatus } from "@/types";
import { submitContactForm } from "@/lib/api";

const subjectOptions = [
  "Informations sur les inscriptions",
  "Renseignements sur les programmes",
  "Informations sur les frais de scolarité",
  "Partenariat",
  "Autre demande",
];

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "", email: "", phone: "", subject: "", message: "",
  });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");
    try {
      const result = await submitContactForm(formData);
      if (result.success) {
        setStatus("success");
        setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
        setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Impossible d'envoyer le message. Vérifiez votre connexion.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center py-14 px-6 text-center">
        <div className="w-16 h-16 bg-emerald-50 border border-emerald-100 rounded-2xl flex items-center justify-center mb-5">
          <CheckCircle className="w-8 h-8 text-emerald-600" />
        </div>
        <h3 className="text-xl font-bold text-[#0f2557] mb-2"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}>
          Message envoyé !
        </h3>
        <p className="text-slate-500 text-sm mb-6 max-w-xs">
          Merci. Notre équipe vous répondra dans les plus brefs délais.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="bg-[#0f2557] hover:bg-[#142f85] text-white font-semibold px-6 py-2.5 rounded-xl text-sm transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  const inputClass = [
    "w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-900",
    "placeholder:text-slate-400",
    "focus:outline-none focus:ring-2 focus:ring-[#c9a84c]/50 focus:border-[#c9a84c] focus:bg-white",
    "transition-all duration-200",
  ].join(" ");

  const labelClass = "block text-xs font-semibold text-slate-700 mb-1.5 uppercase tracking-wide";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="name" className={labelClass}>Nom complet <span className="text-rose-500">*</span></label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange}
            placeholder="Votre nom complet" required autoComplete="name" className={inputClass} />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>Adresse e-mail <span className="text-rose-500">*</span></label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange}
            placeholder="votre@email.com" required autoComplete="email" className={inputClass} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className={labelClass}>Téléphone</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handleChange}
            placeholder="+224 6XX XX XX XX" autoComplete="tel" className={inputClass} />
        </div>
        <div>
          <label htmlFor="subject" className={labelClass}>Sujet <span className="text-rose-500">*</span></label>
          <select id="subject" name="subject" value={formData.subject} onChange={handleChange}
            required className={inputClass}>
            <option value="">Choisissez un sujet</option>
            {subjectOptions.map((opt) => <option key={opt} value={opt}>{opt}</option>)}
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>Message <span className="text-rose-500">*</span></label>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange}
          placeholder="Décrivez votre demande en détail..." required rows={5}
          className={`${inputClass} resize-none`} />
      </div>

      {status === "error" && (
        <div className="flex items-center gap-2 p-3 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs">
          <AlertCircle className="w-4 h-4 flex-shrink-0" />
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full flex items-center justify-center gap-2 bg-[#0f2557] hover:bg-[#142f85] disabled:bg-slate-400 text-white font-semibold py-3.5 px-6 rounded-xl transition-all duration-200 shadow-md hover:shadow-lg text-sm"
      >
        {status === "loading" ? (
          <><Loader2 className="w-4 h-4 animate-spin" /> Envoi en cours...</>
        ) : (
          <><Send className="w-4 h-4" /> Envoyer le message</>
        )}
      </button>

      <p className="text-[11px] text-slate-400 text-center">
        * Champs obligatoires. Vos données ne seront pas partagées avec des tiers.
      </p>
    </form>
  );
};
