import { ContactInfo } from "@/types";

export const contactInfo: ContactInfo = {
  address: "Guéme, Commune de Pita, République de Guinée",
  phone: "+224 628 40 42 70 / 620 22 95 84",
  whatsapp: "+224 620 22 95 84",
  email: "gspeib224@gmail.com",
  hours: {
    weekdays: "Lundi – Vendredi : 7h30 – 17h00",
    saturday: "Samedi : 7h30 – 11h30",
    sunday: "Dimanche : Fermé",
  },
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://www.facebook.com/share/1MpBHyQeYE/?mibextid=wwXIfr",
      icon: "facebook",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/224620229584",
      icon: "whatsapp",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d854.4117689502002!2d-12.389543511633581!3d11.070762035647348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e1!3m2!1sfr!2s!4v1791375368109!5m2!1sfr!2s",
};
