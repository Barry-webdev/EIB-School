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
    left: "text-left items-start",
    center: "text-center items-center",
    right: "text-right items-end",
  }[align];

  return (
    <div className={`flex flex-col gap-3 ${alignClass} ${className}`}>
      {pretitle && (
        <span className="inline-flex items-center gap-2 text-sm font-semibold tracking-widest uppercase text-amber-500">
          <span className="w-8 h-0.5 bg-amber-500 rounded" />
          {pretitle}
          <span className="w-8 h-0.5 bg-amber-500 rounded" />
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl font-bold leading-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg max-w-2xl leading-relaxed ${
            light ? "text-gray-300" : "text-gray-500"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};
