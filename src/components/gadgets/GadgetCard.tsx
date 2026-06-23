"use client";

import {
  Sparkles,
} from "lucide-react";
import { motion } from "framer-motion";
import { GadgetIllustration } from "@/components/gadgets/GadgetIllustration";
import type { Gadget } from "@/types/gadget";
import { useAppStore } from "@/store/appStore";

export function GadgetCard({ gadget }: { gadget: Gadget }) {
  const discoveredGadgets = useAppStore((state) => state.discoveredGadgets);
  const selectGadget = useAppStore((state) => state.selectGadget);
  const discoverGadget = useAppStore((state) => state.discoverGadget);
  const unlocked = gadget.unlocked || discoveredGadgets.length >= 5 || discoveredGadgets.includes(gadget.id);

  return (
    <motion.button
      aria-label={`${unlocked ? "Open" : "Locked"} ${gadget.name}`}
      className={`gadget-card ${unlocked ? "" : "is-locked"}`}
      onClick={() => {
        if (!unlocked) {
          return;
        }
        discoverGadget(gadget.id);
        selectGadget(gadget.id);
      }}
      type="button"
      whileHover={{ y: -6, rotateX: 5, rotateY: -5 }}
      whileTap={{ scale: 0.96 }}
    >
      <span className="gadget-card-picture">
        {unlocked ? <GadgetIllustration gadget={gadget} /> : <Sparkles size={38} />}
      </span>
      <span className="text-left text-base font-black text-white">{gadget.name}</span>
      <span className="mt-2 line-clamp-3 text-left text-sm leading-6 text-white/62">{unlocked ? gadget.description : "Collect more gadgets to unlock this secret."}</span>
    </motion.button>
  );
}
