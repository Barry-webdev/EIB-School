import { defineField, defineType } from "sanity";

export default defineType({
  name: "album",
  title: "Album photo",
  type: "document",
  fields: [
    defineField({
      name: "titre",
      title: "Titre de l'album",
      type: "string",
      validation: (r) => r.required(),
    }),
    defineField({
      name: "categorie",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Vie scolaire", value: "vie-scolaire" },
          { title: "Sport", value: "sport" },
          { title: "Culture & Arts", value: "culture" },
          { title: "Événements", value: "evenements" },
          { title: "Infrastructures", value: "infrastructures" },
        ],
        layout: "dropdown",
      },
      validation: (r) => r.required(),
    }),
    defineField({
      name: "date",
      title: "Date",
      type: "date",
    }),
    defineField({
      name: "photos",
      title: "Photos",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            { name: "titre", type: "string", title: "Titre (facultatif)" },
            { name: "alt", type: "string", title: "Description courte (facultatif)" },
          ],
        },
      ],
      validation: (r) => r.required().min(1),
    }),
  ],
  preview: {
    select: { title: "titre", subtitle: "categorie", media: "photos.0" },
  },
});