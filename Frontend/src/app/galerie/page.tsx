import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { Gallery } from "@/components/features/Gallery";
import { galleryItems, galleryCategories } from "@/data/gallery";

export const metadata: Metadata = {
  title: "Galerie photos",
  description:
    "Découvrez la galerie photos de l'EIB : vie scolaire, sport, culture, événements et infrastructures en images.",
};

export default function GaleriePage() {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-gradient-to-br from-blue-900 to-blue-700 py-20 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-amber-400 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-amber-300 text-sm font-semibold px-4 py-1.5 rounded-full mb-6">
            Photos de l&apos;établissement
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">Galerie photos</h1>
          <p className="text-blue-200 text-lg max-w-2xl mx-auto">
            Des images de notre vie scolaire, de nos événements et de nos
            infrastructures.
          </p>
        </div>
      </section>

      {/* Stats galerie */}
      <div className="bg-white border-b border-gray-100 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500">
            <span>
              <strong className="text-gray-900">{galleryItems.length}</strong> photos
            </span>
            <span className="w-px h-4 bg-gray-200" />
            <span>
              <strong className="text-gray-900">{galleryCategories.length - 1}</strong> catégories
            </span>
            <span className="w-px h-4 bg-gray-200" />
            <span>Cliquez sur une image pour l&apos;agrandir</span>
          </div>
        </div>
      </div>

      {/* Galerie avec filtres */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Gallery
            items={galleryItems}
            categories={galleryCategories}
            showFilter
          />
        </div>
      </section>
    </div>
  );
}
