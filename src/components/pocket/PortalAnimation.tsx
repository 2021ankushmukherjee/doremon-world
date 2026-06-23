"use client";

import { motion } from "framer-motion";
import { useAppStore } from "@/store/appStore";

export function PortalAnimation() {
  const scene = useAppStore((state) => state.scene);

  if (scene !== "portal") {
    return null;
  }

  return (
    <motion.div
      animate={{ opacity: [0, 1, 1, 0], scale: [0.8, 1, 1.08, 1.2] }}
      className="fixed inset-0 z-40 grid place-items-center bg-[#050816]/48 text-center text-white backdrop-blur-sm"
      transition={{ duration: 2.4, times: [0, 0.22, 0.78, 1] }}
    >
      <div>
        <div className="mx-auto mb-6 h-28 w-28 rounded-full border-4 border-[#FFD93D] bg-[#7B61FF]/25 shadow-[0_0_80px_rgba(123,97,255,0.72)]" />
        <p className="text-sm font-black uppercase tracking-[0.28em] text-[#FFD93D]">Entering pocket universe</p>
      </div>
    </motion.div>
  );
}
