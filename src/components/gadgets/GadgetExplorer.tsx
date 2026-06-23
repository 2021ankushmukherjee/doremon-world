"use client";

import { gadgets } from "@/data/gadgets";
import { GadgetCard } from "@/components/gadgets/GadgetCard";
import { GadgetViewer } from "@/components/gadgets/GadgetViewer";

export function GadgetExplorer() {
  return (
    <>
      <div className="gadget-grid" aria-label="Gadget explorer">
        {gadgets.map((gadget) => (
          <GadgetCard gadget={gadget} key={gadget.id} />
        ))}
      </div>
      <GadgetViewer />
    </>
  );
}
