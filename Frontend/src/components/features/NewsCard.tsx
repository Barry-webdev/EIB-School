import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { News } from "@/types";

interface NewsCardProps {
  news: News;
  featured?: boolean;
  index?: number;
}

const formatDate = (d: string) =>
  new Date(d).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });

const categoryVariant: Record<string, "navy" | "gold" | "green" | "purple" | "red" | "gray" | "blue"> = {
  "Vie scolaire": "navy",
  "Résultats":    "green",
  "Sport":        "gold",
  "International":"purple",
  "Événement":    "gold",
  "Distinctions": "green",
};

const placeholderImages = [
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
];

export const NewsCard: React.FC<NewsCardProps> = ({ news, featured = false, index = 0 }) => {
  const imageSrc = placeholderImages[index % placeholderImages.length];
  const variant = categoryVariant[news.category] ?? "gray";

  return (
    <article className="group bg-white rounded-2xl border border-slate-100 overflow-hidden flex flex-col h-full transition-all duration-300 hover:shadow-[0_8px_32px_rgba(15,37,87,0.12)] hover:-translate-y-1">

      {/* Image */}
      <div className="relative h-48 overflow-hidden flex-shrink-0">
        <Image
          src={imageSrc}
          alt={news.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant={variant}>{news.category}</Badge>
        </div>
      </div>

      {/* Body */}
      <div className="flex flex-col flex-1 p-5">
        <div className="flex items-center gap-3 text-[11px] text-slate-400 mb-3">
          <span className="flex items-center gap-1.5">
            <Calendar className="w-3 h-3" />
            {formatDate(news.date)}
          </span>
          {news.author && (
            <span className="flex items-center gap-1.5">
              <User className="w-3 h-3" />
              {news.author}
            </span>
          )}
        </div>

        <h3
          className="text-sm font-bold text-[#0f2557] mb-2 leading-snug group-hover:text-[#c9a84c] transition-colors line-clamp-2"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {news.title}
        </h3>

        <p className="text-slate-500 text-xs leading-relaxed mb-4 flex-1 line-clamp-3">
          {news.excerpt}
        </p>

        <Link
          href={`/actualites/${news.slug}`}
          className="inline-flex items-center gap-1.5 text-[#0f2557] hover:text-[#c9a84c] font-semibold text-xs transition-colors group/link"
          aria-label={`Lire : ${news.title}`}
        >
          Lire la suite
          <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
        </Link>
      </div>
    </article>
  );
};
