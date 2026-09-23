import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
  as?: "div" | "article" | "section";
}

const paddingClasses = {
  none: "",
  sm:   "p-4",
  md:   "p-6",
  lg:   "p-8",
};

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  padding = "md",
  as: Tag = "div",
}) => (
  <Tag
    className={[
      "bg-white rounded-2xl border border-slate-100",
      "transition-all duration-300",
      hover
        ? "hover:shadow-[0_8px_32px_rgba(15,37,87,0.12)] hover:-translate-y-1 cursor-pointer"
        : "shadow-[0_2px_16px_rgba(15,37,87,0.06)]",
      paddingClasses[padding],
      className,
    ].filter(Boolean).join(" ")}
  >
    {children}
  </Tag>
);
