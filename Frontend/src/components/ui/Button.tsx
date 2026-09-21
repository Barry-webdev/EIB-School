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
    "bg-blue-700 text-white hover:bg-blue-800 focus:ring-blue-500 shadow-md hover:shadow-lg",
  secondary:
    "bg-gray-800 text-white hover:bg-gray-900 focus:ring-gray-500 shadow-md hover:shadow-lg",
  outline:
    "bg-transparent border-2 border-blue-700 text-blue-700 hover:bg-blue-700 hover:text-white focus:ring-blue-500",
  ghost:
    "bg-transparent text-blue-700 hover:bg-blue-50 focus:ring-blue-400",
  gold:
    "bg-amber-500 text-white hover:bg-amber-600 focus:ring-amber-400 shadow-md hover:shadow-lg",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
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
    "inline-flex items-center justify-center gap-2 rounded-lg font-semibold",
    "transition-all duration-200 ease-in-out",
    "focus:outline-none focus:ring-2 focus:ring-offset-2",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    variantClasses[variant],
    sizeClasses[size],
    fullWidth ? "w-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const content = (
    <>
      {loading && (
        <span className="w-4 h-4 border-2 border-current border-t-transparent rounded-full animate-spin" />
      )}
      {!loading && Icon && iconPosition === "left" && <Icon className="w-5 h-5" />}
      {children}
      {!loading && Icon && iconPosition === "right" && <Icon className="w-5 h-5" />}
    </>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={baseClasses}
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className={baseClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={baseClasses}
    >
      {content}
    </button>
  );
};
