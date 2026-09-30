import { client } from "./client";
import type { GalleryItem } from "@/types";

const photoFields = `
  _key, titre, alt,
  asset->{ url, metadata{ lqip } }
`;

function flatten(albums: any[]): GalleryItem[] {
  return albums.flatMap((album) =>
    (album.photos ?? [])
      .filter((p: any) => p?.asset?.url)
      .map((p: any) => ({
        id: `${album._id}-${p._key}`,
        src: `${p.asset.url}?w=600&auto=format`,
        fullSrc: `${p.asset.url}?w=1600&auto=format`,
        blur: p.asset.metadata?.lqip,
        alt: p.alt || p.titre || album.titre,
        title: p.titre || album.titre,
        category: album.categorie,
      }))
  );
}

export async function getAllGalleryItems(): Promise<GalleryItem[]> {
  const albums = await client.fetch(`
    *[_type == "album"] | order(date desc, _createdAt desc){
      _id, titre, categorie,
      photos[]{ ${photoFields} }
    }
  `);
  return flatten(albums);
}

export async function getFeaturedGallery(count = 8): Promise<GalleryItem[]> {
  const albums = await client.fetch(
    `*[_type == "album"] | order(date desc, _createdAt desc)[0...$count]{
      _id, titre, categorie,
      photos[0...$count]{ ${photoFields} }
    }`,
    { count }
  );
  return flatten(albums).slice(0, count);
}