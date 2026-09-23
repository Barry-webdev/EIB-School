import React from "react";

interface SectionTitleProps {
  pretitle?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  pretitle,
  title,
  subtitle,
  align = "center",
  light = false,
  className = "",
}) => {
  const alignClass = {
    left:   "text-left items-start",
    center: "text-center items-center",
    right:  "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {pretitle && (
        <span className="inline-flex items-center gap-2.5 text-xs font-bold tracking-[0.18em] uppercase text-[#c9a84c]">
          <span className="w-6 h-px bg-[#c9a84c] rounded-full" />
          {pretitle}
          <span className="w-6 h-px bg-[#c9a84c] rounded-full" />
        </span>
      )}

      <h2
        className={[
          "font-display text-3xl md:text-4xl font-bold leading-tight text-balance",
          light ? "text-white" : "text-[#0f2557]",
        ].join(" ")}
        style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={[
            "text-base md:text-lg max-w-2xl leading-relaxed",
            light ? "text-slate-300" : "text-slate-500",
          ].join(" ")}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
