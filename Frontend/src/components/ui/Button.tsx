"use client";

import React from "react";
import Link from "next/link";
import { LucideIcon } from "lucide-react";

type Variant = "primary" | "secondary" | "outline" | "ghost" | "gold";
type Size = "sm" | "md" | "lg";

interface ButtonProps {
  children: React.ReactNode;
  variant?: Variant;
  size?: Size;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  className?: string;
  fullWidth?: boolean;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-[#0f2557] text-white hover:bg-[#142f85] focus:ring-[#0f2557] shadow-md hover:shadow-lg hover:-translate-y-0.5",
  secondary:
    "bg-slate-800 text-white hover:bg-slate-900 focus:ring-slate-500 shadow-md hover:shadow-lg hover:-translate-y-0.5",
  outline:
    "bg-transparent border-2 border-[#0f2557] text-[#0f2557] hover:bg-[#0f2557] hover:text-white focus:ring-[#0f2557]",
  ghost:
    "bg-transparent text-[#0f2557] hover:bg-[#0f2557]/8 focus:ring-[#0f2557]/40",
  gold:
    "bg-[#c9a84c] text-white hover:bg-[#b08d35] focus:ring-[#c9a84c] shadow-md hover:shadow-lg hover:-translate-y-0.5",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-6 py-3 text-sm gap-2",
  lg: "px-8 py-4 text-base gap-2",
};

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  disabled = false,
  loading = false,
  icon: Icon,
  iconPosition = "left",
  className = "",
  fullWidth = false,
  external = false,
}) => {
  const baseClasses = [
    "inline-flex items-center justify-center rounded-lg font-semibold",
    "transition-all duration-200 ease-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ].filter(Boolean).join(" ");

  const content = (
    <>
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && Icon && iconPosition === "left" && <Icon className="w-4 h-4 flex-shrink-0" />}
      <span>{children}</span>
      {!loading && Icon && iconPosition === "right" && <Icon className="w-4 h-4 flex-shrink-0" />}
    </>
  );

  if (href) {
    if (external) {
      return <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>{content}</a>;
    }
    return <Link href={href} className={baseClasses}>{content}</Link>;
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled || loading} className={baseClasses}>
      {content}
    </button>
  );
};
