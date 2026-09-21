import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { NewsCard } from "@/components/features/NewsCard";
import { newsData } from "@/data/news";

export const metadata: Metadata = {
  title: "Actualités",
  description:
    "Toutes les actualités de l'EIB : résultats scolaires, événements, partenariats, vie scolaire et bien plus.",
};

export default function ActualitesPage() {
  const sortedNews = [...newsData].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  const featured = sortedNews[0];
  const rest = sortedNews.slice(1);

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Informations & événements
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            Actualités
          </h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Restez informés des dernières nouvelles, événements et succès de
            l&apos;EIB.
          </p>
        </div>
      </section>

      {/* Actualité à la une */}
      {featured && (
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionTitle
              pretitle="À la une"
              title="Dernière actualité"
              align="left"
              className="mb-8"
            />
            <div className="max-w-2xl">
              <NewsCard news={featured} featured index={0} />
            </div>
          </div>
        </section>
      )}

      {/* Toutes les actualités */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionTitle
            pretitle="Archive"
            title="Toutes les actualités"
            align="left"
            className="mb-8"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {rest.map((news, i) => (
              <NewsCard key={news.id} news={news} index={i + 1} />
            ))}
          </div>

          {newsData.length === 0 && (
            <div className="text-center py-16 text-gray-400">
              <p>Aucune actualité disponible pour le moment.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
