import { client } from "./client";
import type { Activity } from "@/types";

const fields = `
  _id, titre, description, categorie,
  "imageUrl": image.asset->url
`;

function mapActivity(a: any): Activity {
  return {
    id: a._id,
    title: a.titre,
    description: a.description ?? "",
    image: a.imageUrl ? `${a.imageUrl}?w=800&auto=format` : "",
    category: a.categorie,
  } as Activity;
}

export async function getAllActivities(): Promise<Activity[]> {
  const raw = await client.fetch(
    `*[_type == "activite"] | order(_createdAt desc){ ${fields} }`
  );
  return raw.map(mapActivity);
}

export async function getFeaturedActivities(count = 6): Promise<Activity[]> {
  const raw = await client.fetch(
    `*[_type == "activite"] | order(enAvant desc, _createdAt desc)[0...$count]{ ${fields} }`,
    { count }
  );
  return raw.map(mapActivity);
}

export async function getActivitiesByCategory(category: string): Promise<Activity[]> {
  const raw = await client.fetch(
    `*[_type == "activite" && categorie == $category] | order(_createdAt desc){ ${fields} }`,
    { category }
  );
  return raw.map(mapActivity);
}