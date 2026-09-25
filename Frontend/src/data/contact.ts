import { ContactInfo } from "@/types";

export const contactInfo: ContactInfo = {
  address: "Guéme, Commune de Pita, République de Guinée",
  phone: "+224 620 22 95 84 / 620 47 13 92",
  whatsapp: "+224 620 22 95 84",
  email: "gspeib224@gmail.com",
  hours: {
    weekdays: "Lundi – Vendredi : 7h30 – 17h00",
    saturday: "Samedi : 7h30 – 14h00",
    sunday: "Dimanche : Fermé",
  },
  socialLinks: [
    {
      platform: "Facebook",
      url: "https://fb.me/gspeib",
      icon: "facebook",
    },
    {
      platform: "WhatsApp",
      url: "https://wa.me/224620229584",
      icon: "whatsapp",
    },
  ],
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d31619.57490898239!2d-12.254!3d11.086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sPita%2C%20Guin%C3%A9e!5e0!3m2!1sfr!2sgn!4v1700000000000",
};
