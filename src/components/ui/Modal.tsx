"use client";

import type { ReactNode } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";

export function Modal({
  title,
  children,
  onClose,
}: {
  title: string;
  children: ReactNode;
  onClose: () => void;
}) {
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-[#050816]/72 px-2 py-3 backdrop-blur-md sm:px-4" role="dialog" aria-modal="true">
      <section className="mobile-modal-shell max-h-[calc(100dvh-1.5rem)] w-full max-w-2xl overflow-auto rounded-lg border border-white/14 bg-[#101638]/95 p-3 text-white shadow-[0_0_80px_rgba(123,97,255,0.28)] sm:max-h-[86vh] sm:p-5">
        <div className="mb-4 flex items-center justify-between gap-4">
          <h2 className="min-w-0 text-lg font-black sm:text-xl">{title}</h2>
          <Button aria-label="Close modal" className="h-11 w-11 px-0" icon={<X size={18} />} onClick={onClose} variant="ghost" />
        </div>
        {children}
      </section>
    </div>
  );
}
