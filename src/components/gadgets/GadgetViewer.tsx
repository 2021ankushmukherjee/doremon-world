"use client";

import { Modal } from "@/components/ui/Modal";
import { GadgetAnimation } from "@/components/gadgets/GadgetAnimation";
import { gadgets } from "@/data/gadgets";
import { useAppStore } from "@/store/appStore";

export function GadgetViewer() {
  const selectedGadget = useAppStore((state) => state.selectedGadget);
  const selectGadget = useAppStore((state) => state.selectGadget);
  const gadget = gadgets.find((item) => item.id === selectedGadget);

  if (!gadget) {
    return null;
  }

  return (
    <Modal onClose={() => selectGadget(null)} title={gadget.name}>
      <p className="mb-4 text-sm leading-6 text-white/72">{gadget.description}</p>
      <GadgetAnimation gadget={gadget} />
    </Modal>
  );
}
