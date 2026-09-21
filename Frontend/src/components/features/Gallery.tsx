"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight, ZoomIn, Grid } from "lucide-react";
import type { GalleryItem, GalleryCategory } from "@/types";

interface GalleryProps {
  items: GalleryItem[];
  categories?: GalleryCategory[];
  showFilter?: boolean;
  initialCategory?: string;
}

export const Gallery: React.FC<GalleryProps> = ({
  items,
  categories = [],
  showFilter = false,
  initialCategory = "all",
}) => {
  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? items
      : items.filter((item) => item.category === activeCategory);

  // Gestion clavier pour le lightbox
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowLeft") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev - 1 + filteredItems.length) % filteredItems.length : null
        );
      }
      if (e.key === "ArrowRight") {
        setLightboxIndex((prev) =>
          prev !== null ? (prev + 1) % filteredItems.length : null
        );
      }
    },
    [lightboxIndex, filteredItems.length]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [handleKeyDown]);

  // Bloquer scroll quand lightbox ouvert
  useEffect(() => {
    if (lightboxIndex !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxIndex]);

  return (
    <div>
      {/* Filtres par catégorie */}
      {showFilter && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 justify-center mb-8">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={[
                "px-4 py-2 rounded-full text-sm font-semibold transition-all duration-200",
                activeCategory === cat.id
                  ? "bg-blue-700 text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-blue-50 hover:text-blue-700 border border-gray-200",
              ].join(" ")}
              aria-pressed={activeCategory === cat.id}
            >
              {cat.label}
            </button>
          ))}
        </div>
      )}

      {/* Grille */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
        {filteredItems.map((item, index) => (
          <button
            key={item.id}
            onClick={() => setLightboxIndex(index)}
            className="group relative aspect-square overflow-hidden rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label={`Voir l'image : ${item.alt}`}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-500"
              sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
              loading="lazy"
            />
            {/* Overlay hover */}
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-center justify-center">
              <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform scale-75 group-hover:scale-100" />
            </div>
            {/* Titre overlay */}
            {item.title && (
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="text-white text-xs font-medium truncate">
                  {item.title}
                </p>
              </div>
            )}
          </button>
        ))}
      </div>

      {/* Message si aucune image */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-gray-400">
          <Grid className="w-12 h-12 mx-auto mb-3 opacity-40" />
          <p>Aucune image dans cette catégorie.</p>
        </div>
      )}

      {/* Lightbox Modal */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Visionneuse d'image"
        >
          {/* Bouton fermer */}
          <button
            onClick={() => setLightboxIndex(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Fermer la visionneuse"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Compteur */}
          <div className="absolute top-4 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-4 py-1.5 rounded-full">
            {lightboxIndex + 1} / {filteredItems.length}
          </div>

          {/* Navigation gauche */}
          <button
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex - 1 + filteredItems.length) %
                  filteredItems.length
              )
            }
            className="absolute left-2 sm:left-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Image précédente"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Image principale */}
          <div className="relative w-full h-full flex items-center justify-center px-20 py-16">
            <div className="relative w-full h-full max-w-5xl max-h-full">
              <Image
                src={filteredItems[lightboxIndex].src}
                alt={filteredItems[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>
          </div>

          {/* Titre de l'image */}
          {filteredItems[lightboxIndex].title && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-white/10 text-white text-sm px-5 py-2 rounded-full max-w-xs text-center">
              {filteredItems[lightboxIndex].title}
            </div>
          )}

          {/* Navigation droite */}
          <button
            onClick={() =>
              setLightboxIndex(
                (lightboxIndex + 1) % filteredItems.length
              )
            }
            className="absolute right-2 sm:right-6 z-10 w-12 h-12 bg-white/10 hover:bg-white/20 text-white rounded-full flex items-center justify-center transition-colors"
            aria-label="Image suivante"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Fond cliquable pour fermer */}
          <div
            className="absolute inset-0 -z-0"
            onClick={() => setLightboxIndex(null)}
            aria-hidden="true"
          />
        </div>
      )}
    </div>
  );
};
