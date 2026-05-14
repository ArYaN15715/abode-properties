import type * as React from "react";

export interface AbodeButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export function AbodeButton({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: AbodeButtonProps) {
  const base =
    "inline-flex items-center justify-center font-body font-medium tracking-wide transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#B7A89A] focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants = {
    primary:
      "bg-[#1C1C1C] text-[#F7F6F2] hover:bg-[#8A7867] active:scale-[0.98]",
    secondary:
      "border border-[#1C1C1C] text-[#1C1C1C] bg-transparent hover:bg-[#1C1C1C] hover:text-[#F7F6F2] active:scale-[0.98]",
    ghost:
      "text-[#1C1C1C] bg-transparent hover:text-[#8A7867] active:scale-[0.98]",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}

export default AbodeButton;
