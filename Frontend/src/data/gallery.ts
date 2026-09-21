import { GalleryItem, GalleryCategory } from "@/types";

export const galleryCategories: GalleryCategory[] = [
  { id: "all", label: "Tous" },
  { id: "vie-scolaire", label: "Vie scolaire" },
  { id: "sport", label: "Sport" },
  { id: "culture", label: "Culture & Arts" },
  { id: "evenements", label: "Événements" },
  { id: "infrastructures", label: "Infrastructures" },
];

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
    alt: "Élèves en classe",
    category: "vie-scolaire",
    title: "En classe",
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
    alt: "Cours de sciences",
    category: "vie-scolaire",
    title: "Cours de sciences",
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1574872149521-a3a8b6f8a2e6?w=800&q=80",
    alt: "Match de football",
    category: "sport",
    title: "Tournoi de football",
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80",
    alt: "Pièce de théâtre",
    category: "culture",
    title: "Spectacle de théâtre",
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
    alt: "Cérémonie de remise de prix",
    category: "evenements",
    title: "Remise des prix",
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1562774053-701939374585?w=800&q=80",
    alt: "Bibliothèque",
    category: "infrastructures",
    title: "Bibliothèque",
  },
  {
    id: "7",
    src: "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
    alt: "Activités artistiques",
    category: "culture",
    title: "Atelier peinture",
  },
  {
    id: "8",
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800&q=80",
    alt: "Récréation",
    category: "vie-scolaire",
    title: "Récréation",
  },
  {
    id: "9",
    src: "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
    alt: "Séance de basketball",
    category: "sport",
    title: "Entraînement basketball",
  },
  {
    id: "10",
    src: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
    alt: "Journée portes ouvertes",
    category: "evenements",
    title: "Journée portes ouvertes",
  },
  {
    id: "11",
    src: "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800&q=80",
    alt: "Laboratoire informatique",
    category: "infrastructures",
    title: "Labo informatique",
  },
  {
    id: "12",
    src: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
    alt: "Cours de musique",
    category: "culture",
    title: "Club musique",
  },
  {
    id: "13",
    src: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
    alt: "Fête de fin d'année",
    category: "evenements",
    title: "Fête de fin d'année",
  },
  {
    id: "14",
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&q=80",
    alt: "Salle de classe moderne",
    category: "infrastructures",
    title: "Salle de classe",
  },
  {
    id: "15",
    src: "https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=800&q=80",
    alt: "Élèves en récréation",
    category: "vie-scolaire",
    title: "Moments de partage",
  },
  {
    id: "16",
    src: "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
    alt: "Compétition sportive",
    category: "sport",
    title: "Compétition sportive",
  },
];

export const getGalleryByCategory = (category: string): GalleryItem[] => {
  if (category === "all") return galleryItems;
  return galleryItems.filter((item) => item.category === category);
};

export const getFeaturedGallery = (count = 6): GalleryItem[] =>
  galleryItems.slice(0, count);
