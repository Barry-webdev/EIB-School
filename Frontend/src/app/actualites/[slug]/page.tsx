import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ChevronLeft, Tag, Share2, ArrowRight } from "lucide-react";
import { newsData, getNewsBySlug, getLatestNews } from "@/data/news";
import { NewsCard } from "@/components/features/NewsCard";
import { Badge } from "@/components/ui/Badge";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Générer les pages statiques pour chaque actualité
export async function generateStaticParams() {
  return newsData.map((news) => ({ slug: news.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const news = getNewsBySlug(slug);
  if (!news) return { title: "Article introuvable" };
  return {
    title: news.title,
    description: news.excerpt,
  };
}

const formatDate = (dateStr: string) =>
  new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

const placeholderImages = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=1200&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=1200&q=80",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=1200&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=1200&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1200&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=1200&q=80",
];

export default async function NewsDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const news = getNewsBySlug(slug);

  if (!news) notFound();

  const newsIndex = newsData.findIndex((n) => n.slug === slug);
  const imageSrc = placeholderImages[newsIndex % placeholderImages.length];

  const relatedNews = getLatestNews(4).filter((n) => n.slug !== slug).slice(0, 3);

  // Parser le contenu (lignes) 
  const contentLines = news.content
    .trim()
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb */}
      <div className="bg-gray-50 border-b border-gray-200 py-3">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center gap-2 text-sm" aria-label="Fil d'Ariane">
            <Link href="/" className="text-gray-400 hover:text-blue-700 transition-colors">
              Accueil
            </Link>
            <span className="text-gray-300">/</span>
            <Link
              href="/actualites"
              className="text-gray-400 hover:text-blue-700 transition-colors"
            >
              Actualités
            </Link>
            <span className="text-gray-300">/</span>
            <span className="text-gray-700 font-medium truncate max-w-xs">
              {news.title}
            </span>
          </nav>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Retour */}
        <Link
          href="/actualites"
          className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-700 text-sm mb-8 transition-colors group"
        >
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Retour aux actualités
        </Link>

        {/* Meta */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          <Badge variant="blue">{news.category}</Badge>
          <span className="flex items-center gap-1.5 text-gray-400 text-sm">
            <Calendar className="w-4 h-4" />
            {formatDate(news.date)}
          </span>
          {news.author && (
            <span className="flex items-center gap-1.5 text-gray-400 text-sm">
              <User className="w-4 h-4" />
              {news.author}
            </span>
          )}
        </div>

        {/* Titre */}
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {news.title}
        </h1>

        {/* Extrait */}
        <p className="text-xl text-gray-500 leading-relaxed mb-8 border-l-4 border-amber-500 pl-5">
          {news.excerpt}
        </p>

        {/* Image principale */}
        <div className="relative h-72 sm:h-96 rounded-2xl overflow-hidden mb-10 shadow-lg">
          <Image
            src={imageSrc}
            alt={news.title}
            fill
            className="object-cover"
            priority
            sizes="(max-width: 896px) 100vw, 896px"
          />
        </div>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none">
          {contentLines.map((line, i) => {
            if (line.startsWith("- ")) {
              return (
                <li key={i} className="text-gray-700 leading-relaxed mb-2 ml-4 list-disc">
                  {line.slice(2)}
                </li>
              );
            }
            return (
              <p key={i} className="text-gray-700 leading-relaxed mb-4">
                {line}
              </p>
            );
          })}
        </div>

        {/* Partage */}
        <div className="mt-10 pt-8 border-t border-gray-100 flex items-center justify-between">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <Tag className="w-4 h-4" />
            {news.category}
          </div>
          <button
            className="flex items-center gap-2 text-gray-500 hover:text-blue-700 text-sm transition-colors"
            aria-label="Partager l'article"
          >
            <Share2 className="w-4 h-4" />
            Partager
          </button>
        </div>
      </article>

      {/* Articles connexes */}
      {relatedNews.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-end justify-between mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Autres actualités
              </h2>
              <Link
                href="/actualites"
                className="flex items-center gap-1.5 text-blue-700 font-semibold text-sm hover:gap-2.5 transition-all"
              >
                Toutes les actualités
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedNews.map((n, i) => (
                <NewsCard key={n.id} news={n} index={i + 1} />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
