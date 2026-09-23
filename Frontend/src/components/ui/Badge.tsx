import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "navy" | "gold" | "green" | "gray" | "red" | "purple" | "blue";
  size?: "sm" | "md";
  className?: string;
}

const variantClasses = {
  navy:   "bg-[#0f2557]/10 text-[#0f2557] border border-[#0f2557]/15",
  gold:   "bg-[#c9a84c]/12 text-[#8f6f22] border border-[#c9a84c]/25",
  green:  "bg-emerald-50 text-emerald-700 border border-emerald-200",
  gray:   "bg-slate-100 text-slate-600 border border-slate-200",
  red:    "bg-rose-50 text-rose-700 border border-rose-200",
  purple: "bg-purple-50 text-purple-700 border border-purple-200",
  blue:   "bg-blue-50 text-blue-700 border border-blue-200",
};

const sizeClasses = {
  sm: "px-2 py-0.5 text-xs",
  md: "px-2.5 py-1 text-xs",
};

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = "navy",
  size = "md",
  className = "",
}) => (
  <span
    className={`inline-flex items-center font-semibold rounded-full ${variantClasses[variant]} ${sizeClasses[size]} ${className}`}
  >
    {children}
  </span>
);
