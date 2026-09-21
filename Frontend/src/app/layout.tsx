import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    template: "%s | E.I.B — Complexe Scolaire Privé Elhadj Ibrahima Barry",
    default: "E.I.B — Complexe Scolaire Privé Elhadj Ibrahima Barry",
  },
  description:
    "Le Complexe Scolaire Privé Elhadj Ibrahima Barry (E.I.B) — La rigueur pour l'excellence. Maternelle, Primaire, Collège, Lycée et École Professionnelle de la Santé à Pita, Guinée.",
  keywords: [
    "EIB",
    "Elhadj Ibrahima Barry",
    "complexe scolaire",
    "école privée",
    "Pita",
    "Guinée",
    "maternelle",
    "primaire",
    "collège",
    "lycée",
    "école de la santé",
    "inscription",
  ],
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "E.I.B — Complexe Scolaire Privé Elhadj Ibrahima Barry",
    title: "E.I.B — Complexe Scolaire Privé Elhadj Ibrahima Barry",
    description:
      "La rigueur pour l'excellence — Un établissement scolaire d'excellence dédié à la réussite de chaque élève, à Pita, Guinée.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={inter.variable}>
      <body className="antialiased">
        <Header />
        <main className="min-h-screen pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
