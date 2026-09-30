import { defineField, defineType } from "sanity";

export default defineType({
  name: "activite",
  title: "Activité / Vie scolaire",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 4,
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Culturelle", value: "culturelle" },
          { title: "Sportive", value: "sportive" },
          { title: "Sortie", value: "sortie" },
          { title: "Concours", value: "concours" },
          { title: "Cérémonie", value: "cérémonie" },
          { title: "Événement", value: "événement" },
        ],
        layout: "dropdown",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "enAvant",
      title: "Afficher sur la page d'accueil",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: { title: "titre", subtitle: "categorie", media: "image" },
  },
});