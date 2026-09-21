import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ChevronRight, Tag } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { News } from "@/types";

interface NewsCardProps {
  news: News;
  featured?: boolean;
}

const formatDate = (dateStr: string): string => {
  return new Date(dateStr).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
};

const categoryColors: Record<string, "blue" | "gold" | "green" | "purple" | "red" | "gray"> = {
  "Vie scolaire": "blue",
  "Résultats": "green",
  "Sport": "gold",
  "International": "purple",
  "Événement": "gold",
  "Distinctions": "green",
};

// Placeholder images par index
const placeholderImages = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
];

export const NewsCard: React.FC<NewsCardProps & { index?: number }> = ({
  news,
  featured = false,
  index = 0,
}) => {
  const imageSrc = placeholderImages[index % placeholderImages.length];
  const badgeVariant = categoryColors[news.category] || "gray";

  return (
    <article
      className={`group bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col ${
        featured ? "h-full" : ""
      }`}
    >
      {/* Image */}
      <div className="relative h-48 sm:h-52 overflow-hidden">
        <Image
          src={imageSrc}
          alt={news.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant={badgeVariant}>
            {news.category}
          </Badge>
        </div>
      </div>

      {/* Contenu */}
      <div className="p-5 flex flex-col flex-1">
        <div className="flex items-center gap-4 text-xs text-gray-400 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            {formatDate(news.date)}
          </span>
          {news.author && (
            <span className="flex items-center gap-1.5">
              <User className="w-3.5 h-3.5" />
              {news.author}
            </span>
          )}
        </div>

        <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-blue-700 transition-colors line-clamp-2">
          {news.title}
        </h3>

        <p className="text-gray-500 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
          {news.excerpt}
        </p>

        <Link
          href={`/actualites/${news.slug}`}
          className="inline-flex items-center gap-1.5 text-blue-700 font-semibold text-sm hover:gap-2.5 transition-all duration-200 group/link"
          aria-label={`Lire la suite : ${news.title}`}
        >
          Lire la suite
          <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
        </Link>
      </div>
    </article>
  );
};
