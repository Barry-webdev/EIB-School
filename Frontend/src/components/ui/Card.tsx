import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
  padding?: "none" | "sm" | "md" | "lg";
}

const paddingClasses = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8",
};

export const Card: React.FC<CardProps> = ({
  children,
  className = "",
  hover = false,
  padding = "md",
}) => (
  <div
    className={[
      "bg-white rounded-2xl shadow-sm border border-gray-100",
      hover
        ? "transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        : "",
      paddingClasses[padding],
      className,
    ]
      .filter(Boolean)
      .join(" ")}
  >
    {children}
  </div>
);
