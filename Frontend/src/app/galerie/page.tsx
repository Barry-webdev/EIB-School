import type { Metadata } from "next";
import { SectionTitle } from "@/components/ui/SectionTitle";
import { PageHero } from "@/components/ui/PageHero";
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
      <PageHero
        pretitle="Photos de l'établissement"
        title="Galerie photos"
        subtitle="Des images de notre vie scolaire, de nos événements et de nos infrastructures."
      />

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
