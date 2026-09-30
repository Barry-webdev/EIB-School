import { client } from "./client";
import type { News } from "@/types";

const fields = `
  _id, titre, date, resume, categorie, auteur,
  "slug": slug.current,
  "imageUrl": image.asset->url
`;

export function mapNews(n: any): News {
  return {
    id: n._id,
    slug: n.slug,
    title: n.titre,
    excerpt: n.resume ?? "",
    content: "",
    image: n.imageUrl ? `${n.imageUrl}?w=800&auto=format` : "",
    date: n.date,
    category: n.categorie ?? "Vie scolaire",
    author: n.auteur,
  };
}

export async function getAllSlugs(): Promise<string[]> {
  return client.fetch(`*[_type == "actualite" && defined(slug.current)].slug.current`);
}

export async function getNewsDetail(slug: string) {
  const raw = await client.fetch(
    `*[_type == "actualite" && slug.current == $slug][0]{
      ${fields},
      contenu[]{ ..., _type == "image" => { "url": asset->url } }
    }`,
    { slug }
  );
  if (!raw) return null;
  return {
    news: mapNews(raw),
    heroImage: raw.imageUrl ? `${raw.imageUrl}?w=1200&auto=format` : "",
    contenu: raw.contenu ?? [],
  };
}

export async function getRelatedNews(slug: string, count = 3): Promise<News[]> {
  const raw = await client.fetch(
    `*[_type == "actualite" && slug.current != $slug] | order(date desc)[0...$count]{ ${fields} }`,
    { slug, count }
  );
  return raw.map(mapNews);
}

export async function getLatestNews(count = 3): Promise<News[]> {
  const raw = await client.fetch(
    `*[_type == "actualite"] | order(date desc)[0...$count]{ ${fields} }`,
    { count }
  );
  return raw.map(mapNews);
}