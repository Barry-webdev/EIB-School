/**
 * Couche de services API — EIB School Frontend
 *
 * Ce fichier sert de couche d'abstraction entre le frontend et les données.
 * Actuellement, il utilise des données mockées locales.
 * Pour connecter au backend, remplacez les imports par des appels fetch/axios.
 *
 * Exemple de migration vers API :
 * export const fetchNews = () => fetch(`${API_BASE}/news`).then(r => r.json())
 */

import { newsData, getNewsBySlug, getLatestNews } from "@/data/news";
import { activitiesData, getFeaturedActivities } from "@/data/activities";
import { educationLevels } from "@/data/education";
import { galleryItems, getGalleryByCategory, getFeaturedGallery } from "@/data/gallery";
import { contactInfo } from "@/data/contact";
import type { ContactFormData } from "@/types";

// ——— News ———
export const fetchAllNews = async () => {
  // await fetch(`${API_BASE}/news`)
  return newsData;
};

export const fetchNewsBySlug = async (slug: string) => {
  // await fetch(`${API_BASE}/news/${slug}`)
  return getNewsBySlug(slug);
};

export const fetchLatestNews = async (count = 3) => {
  return getLatestNews(count);
};

// ——— Activities ———
export const fetchAllActivities = async () => {
  return activitiesData;
};

export const fetchFeaturedActivities = async (count = 6) => {
  return getFeaturedActivities(count);
};

// ——— Education ———
export const fetchEducationLevels = async () => {
  return educationLevels;
};

// ——— Gallery ———
export const fetchAllGallery = async () => {
  return galleryItems;
};

export const fetchGalleryByCategory = async (category: string) => {
  return getGalleryByCategory(category);
};

export const fetchFeaturedGallery = async (count = 6) => {
  return getFeaturedGallery(count);
};

// ——— Contact ———
export const fetchContactInfo = async () => {
  return contactInfo;
};

/**
 * Soumettre le formulaire de contact
 * À remplacer par un vrai appel API backend
 */
export const submitContactForm = async (data: ContactFormData): Promise<{ success: boolean; message: string }> => {
  // Simuler un délai réseau
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // TODO: remplacer par fetch(`${API_BASE}/contact`, { method: 'POST', body: JSON.stringify(data) })
  console.log("Contact form data (mock):", data);

  // Simuler succès
  return {
    success: true,
    message: "Votre message a bien été envoyé. Nous vous répondrons dans les plus brefs délais.",
  };
};
