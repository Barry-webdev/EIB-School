import { defineField, defineType } from "sanity";

export default defineType({
  name: "actualite",
  title: "Actualité",
  type: "document",
  fields: [
    defineField({ name: "titre", title: "Titre", type: "string", validation: (r) => r.required() }),
    defineField({ name: "slug", title: "Adresse (slug)", type: "slug", options: { source: "titre" }, validation: (r) => r.required() }),
    defineField({ name: "date", title: "Date", type: "date", validation: (r) => r.required() }),
    defineField({ name: "image", title: "Image", type: "image", options: { hotspot: true } }),
    defineField({
        name: "categorie",
        title: "Catégorie",
        type: "string",
        options: {
          list: ["Vie scolaire", "Résultats", "Sport", "International", "Événement", "Distinctions"],
          layout: "dropdown",
        },
        validation: (r) => r.required(),
      }),
      defineField({
        name: "auteur",
        title: "Auteur",
        type: "string",
        initialValue: "Direction EIB",
      }),
    defineField({ name: "resume", title: "Résumé", type: "text", rows: 3 }),
    defineField({ name: "contenu", title: "Contenu", type: "array", of: [{ type: "block" }, { type: "image" }] }),
  ],
});