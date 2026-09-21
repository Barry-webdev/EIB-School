import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "blue" | "gold" | "green" | "gray" | "red" | "purple";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  blue: "bg-blue-100 text-blue-700",
  gold: "bg-amber-100 text-amber-700",
  green: "bg-emerald-100 text-emerald-700",
  gray: "bg-gray-100 text-gray-700",
  red: "bg-red-100 text-red-700",
  purple: "bg-purple-100 text-purple-700",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-3 py-1 text-sm",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "blue",
  size = "md",
  className = "",
}) => (
  <span
    className={`inline-flex items-center font-medium rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
  >
    {children}
  </span>
);
