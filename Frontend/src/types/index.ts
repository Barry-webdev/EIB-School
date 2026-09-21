// ============================================================
// TYPES / INTERFACES — EIB School Frontend
// Conçus pour être remplacés facilement par des données API
// ============================================================

export interface News {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  category: string;
  author?: string;
}

export interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
  category: ActivityCategory;
  date?: string;
}

export type ActivityCategory =
  | "culturelle"
  | "sportive"
  | "sortie"
  | "concours"
  | "cérémonie"
  | "événement";

export interface EducationLevel {
  id: string;
  name: string;
  shortName: string;
  description: string;
  subjects: string[];
  objectives: string[];
  ageRange: string;
  icon: string;
  color: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title?: string;
}

export interface GalleryCategory {
  id: string;
  label: string;
}

export interface ContactInfo {
  address: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: {
    weekdays: string;
    saturday: string;
    sunday: string;
  };
  socialLinks: SocialLink[];
  mapEmbedUrl?: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

export type FormStatus = "idle" | "loading" | "success" | "error";

export interface Stat {
  value: string;
  label: string;
  icon: string;
}

export interface Value {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface InscriptionStep {
  step: number;
  title: string;
  description: string;
}

export interface InscriptionDocument {
  name: string;
  required: boolean;
}
