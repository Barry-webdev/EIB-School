import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  if (req.headers.get("x-secret") !== process.env.REVALIDATE_SECRET) {
    return NextResponse.json({ ok: false, error: "Non autorisé" }, { status: 401 });
  }

  let type: string | undefined;
  try {
    const body = await req.json();
    type = body?._type;
  } catch {
    // corps vide ou invalide : on rafraîchit tout par sécurité
  }

  const all = !type;

  if (all || type === "actualite") {
    revalidatePath("/actualites");
    revalidatePath("/actualites/[slug]", "page");
  }
  if (all || type === "activite") {
    revalidatePath("/activites");
  }
  if (all || type === "album") {
    revalidatePath("/galerie");
  }

  // L'accueil affiche des actualités, activités et photos
  revalidatePath("/");

  return NextResponse.json({ ok: true, revalidated: type ?? "all" });
}