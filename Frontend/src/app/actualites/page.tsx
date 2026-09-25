import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
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
      <PageHero
        pretitle="Informations & événements"
        title="Actualités"
        subtitle="Restez informés des dernières nouvelles, événements et succès de l'E.I.B."
      />

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
