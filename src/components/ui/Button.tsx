import type { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon?: ReactNode;
  variant?: "primary" | "ghost" | "danger";
}

export function Button({ children, icon, variant = "primary", className = "", ...props }: ButtonProps) {
  const variants = {
    primary: "bg-[#FFD93D] text-[#050816] shadow-[0_0_28px_rgba(255,217,61,0.32)] hover:bg-white",
    ghost: "border border-white/16 bg-white/8 text-white hover:bg-white/14",
    danger: "bg-[#FF4D4D] text-white shadow-[0_0_24px_rgba(255,77,77,0.26)] hover:bg-[#ff6868]",
  };

  return (
    <button
      className={`inline-flex min-h-11 max-w-full items-center justify-center gap-2 whitespace-normal rounded-lg px-3 py-2 text-center text-sm font-bold leading-tight transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#FFD93D] sm:px-4 ${variants[variant]} ${className}`}
      type="button"
      {...props}
    >
      {icon}
      {children}
    </button>
  );
}
