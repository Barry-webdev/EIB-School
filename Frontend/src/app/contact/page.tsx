import type { Metadata } from "next";
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { ContactForm } from "@/components/features/ContactForm";
import { contactInfo } from "@/data/contact";

// Icône Facebook SVG inline (absente de lucide-react récent)
const FacebookIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez le Complexe Scolaire Privé E.I.B : adresse à Pita (Guinée), téléphone, WhatsApp, email et formulaire de contact.",
};

const socialIcons: Record<string, React.ElementType> = {
  facebook: FacebookIcon,
  whatsapp: MessageCircle,
};

const socialColors: Record<string, string> = {
  facebook: "bg-blue-600 hover:bg-blue-700",
  whatsapp: "bg-green-600 hover:bg-green-700",
};

const faqItems = [
  {
    question: "Comment s'inscrire au Complexe E.I.B ?",
    answer:
      "Rendez-vous à notre secrétariat pour retirer le dossier d'inscription. Consultez notre page Inscriptions pour les tarifs et la procédure complète.",
  },
  {
    question: "Quels sont les niveaux proposés ?",
    answer:
      "L'E.I.B accueille les élèves de la Maternelle jusqu'à l'École Professionnelle de la Santé. Consultez notre page Enseignements pour le détail.",
  },
  {
    question: "L'établissement dispose-t-il d'un service de cantine ?",
    answer:
      "Oui, nous disposons d'une cantine scolaire proposant des repas équilibrés. Contactez le secrétariat pour les tarifs.",
  },
  {
    question: "Existe-t-il des activités après les cours ?",
    answer:
      "Oui, de nombreuses activités parascolaires sont disponibles : sport, arts, technologie, etc. Consultez notre page Activités.",
  },
];

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      {/* ── Hero ── */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Écrivez-nous
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Contactez-nous</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Notre équipe est disponible pour répondre à toutes vos questions.
            N&apos;hésitez pas à nous contacter.
          </p>
        </div>
      </section>

      {/* ── Coordonnées + Formulaire ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">

            {/* Colonne gauche — Coordonnées */}
            <div className="lg:col-span-2 space-y-5">
              <SectionTitle
                pretitle="Coordonnées"
                title="Nos informations"
                align="left"
              />

              {/* Adresse */}
              <a
                href="https://maps.google.com/?q=Pita+Guinée"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                    Adresse
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    Guéme, Commune de Pita<br />République de Guinée
                  </p>
                </div>
              </a>

              {/* Téléphone */}
              <a
                href="tel:+224620229584"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                    Téléphone
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">
                    +224 620 22 95 84<br />+224 620 47 13 92
                  </p>
                </div>
              </a>

              {/* WhatsApp */}
              <a
                href="https://wa.me/224620229584"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-green-50 transition-colors group"
              >
                <div className="w-11 h-11 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-green-700 transition-colors">
                    WhatsApp
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">+224 620 22 95 84</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:gspeib224@gmail.com"
                className="flex items-start gap-4 p-4 bg-gray-50 rounded-2xl hover:bg-blue-50 transition-colors group"
              >
                <div className="w-11 h-11 bg-blue-700 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm group-hover:text-blue-700 transition-colors">
                    Email
                  </p>
                  <p className="text-gray-500 text-sm mt-0.5">gspeib224@gmail.com</p>
                </div>
              </a>

              {/* Horaires */}
              <div className="flex items-start gap-4 p-4 bg-amber-50 border border-amber-100 rounded-2xl">
                <div className="w-11 h-11 bg-amber-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">Horaires d&apos;ouverture</p>
                  <p className="text-gray-600 text-sm mt-0.5">{contactInfo.hours.weekdays}</p>
                  <p className="text-gray-600 text-sm">{contactInfo.hours.saturday}</p>
                  <p className="text-gray-400 text-sm">{contactInfo.hours.sunday}</p>
                </div>
              </div>

              {/* Réseaux sociaux */}
              <div>
                <p className="font-semibold text-gray-700 text-sm mb-3">Suivez-nous</p>
                <div className="flex items-center gap-2">
                  {contactInfo.socialLinks.map((social) => {
                    const Icon = socialIcons[social.icon] || MessageCircle;
                    const colorClass = socialColors[social.icon] || "bg-gray-600 hover:bg-gray-700";
                    return (
                      <a
                        key={social.platform}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Suivez-nous sur ${social.platform}`}
                        className={`w-11 h-11 ${colorClass} text-white rounded-xl flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5 shadow-sm hover:shadow-md`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Colonne droite — Formulaire */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
                <SectionTitle
                  pretitle="Formulaire"
                  title="Envoyez-nous un message"
                  subtitle="Nous vous répondrons dans les plus brefs délais, généralement sous 24h."
                  align="left"
                  className="mb-8"
                />
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Google Maps ── */}
      <section>
        <div className="relative h-72 sm:h-96 bg-gray-200">
          <iframe
            src={contactInfo.mapEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation du Complexe E.I.B à Pita sur Google Maps"
            className="w-full h-full"
          />
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Questions fréquentes"
            title="FAQ"
            subtitle="Les questions les plus souvent posées par les familles."
            align="center"
            className="mb-10"
          />
          <div className="space-y-4">
            {faqItems.map((item, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:border-blue-200 transition-colors"
              >
                <h3 className="font-bold text-gray-900 mb-2">{item.question}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
