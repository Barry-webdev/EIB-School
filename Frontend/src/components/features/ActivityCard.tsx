import React from "react";
import Image from "next/image";
import { Badge } from "@/components/ui/Badge";
import type { Activity, ActivityCategory } from "@/types";

interface ActivityCardProps {
  activity: Activity;
  index?: number;
}

const categoryConfig: Record<ActivityCategory, {
  label: string;
  variant: "navy" | "gold" | "green" | "purple" | "red" | "gray";
  emoji: string;
}> = {
  culturelle:  { label: "Culturelle",     variant: "purple", emoji: "🎭" },
  sportive:    { label: "Sportive",        variant: "navy",   emoji: "⚽" },
  sortie:      { label: "Sortie scolaire", variant: "green",  emoji: "🚌" },
  concours:    { label: "Concours",        variant: "gold",   emoji: "🏆" },
  cérémonie:   { label: "Cérémonie",       variant: "red",    emoji: "🎓" },
  événement:   { label: "Événement",       variant: "gray",   emoji: "📅" },
};

const placeholderImages = [
  "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?w=800&q=80",
  "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=800&q=80",
  "https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?w=800&q=80",
  "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=800&q=80",
  "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80",
  "https://images.unsplash.com/photo-1567168544813-cc03465b4fa8?w=800&q=80",
  "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80",
  "https://images.unsplash.com/photo-1546483875-ad9014c88eba?w=800&q=80",
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800&q=80",
  "https://images.unsplash.com/photo-1494905998402-395d579af36f?w=800&q=80",
];

export const ActivityCard: React.FC<ActivityCardProps> = ({ activity, index = 0 }) => {
  const imageSrc = placeholderImages[index % placeholderImages.length];
  const config = categoryConfig[activity.category];

  return (
    <article className="group bg-white rounded-2xl border border-slate-100 overflow-hidden transition-all duration-300 hover:shadow-[0_8px_32px_rgba(15,37,87,0.12)] hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-44 overflow-hidden">
        <Image
          src={imageSrc}
          alt={activity.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
        <div className="absolute top-3 left-3">
          <Badge variant={config.variant}>{config.label}</Badge>
        </div>
        <div className="absolute bottom-3 right-3 w-9 h-9 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center text-lg shadow-sm">
          {config.emoji}
        </div>
      </div>

      {/* Body */}
      <div className="p-5">
        <h3
          className="font-bold text-[#0f2557] text-sm mb-2 group-hover:text-[#c9a84c] transition-colors"
          style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
        >
          {activity.title}
        </h3>
        <p className="text-slate-500 text-xs leading-relaxed line-clamp-3">{activity.description}</p>
      </div>
    </article>
  );
};
