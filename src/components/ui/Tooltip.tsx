import type { ReactNode } from "react";

export function Tooltip({ label, children }: { label: string; children: ReactNode }) {
  return (
    <span className="group relative inline-flex">
      {children}
      <span className="pointer-events-none absolute bottom-full left-1/2 z-30 mb-2 min-w-max -translate-x-1/2 rounded-md bg-[#050816] px-2 py-1 text-xs font-semibold text-white opacity-0 shadow-xl transition group-hover:opacity-100 group-focus-within:opacity-100">
        {label}
      </span>
    </span>
  );
}
