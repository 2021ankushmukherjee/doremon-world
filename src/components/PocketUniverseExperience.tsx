"use client";

import { AnimatePresence, motion } from "framer-motion";
import type { CSSProperties } from "react";
import { characters } from "@/data/characters";
import { CharacterPortrait } from "@/components/characters/CharacterPortrait";
import { FloatingObjects } from "@/components/effects/FloatingObjects";
import { ParticleBackground } from "@/components/effects/ParticleBackground";
import { HeroScene } from "@/components/landing/HeroScene";
import { PocketPortal } from "@/components/pocket/PocketPortal";
import { PortalAnimation } from "@/components/pocket/PortalAnimation";
import { PocketWorld } from "@/components/world/PocketWorld";
import { BottomNavigation } from "@/components/ui/BottomNavigation";
import { GadgetExplorer } from "@/components/gadgets/GadgetExplorer";
import { useAppStore } from "@/store/appStore";

export function PocketUniverseExperience() {
  const scene = useAppStore((state) => state.scene);
  const uiScale = useAppStore((state) => state.uiScale);

  return (
    <div className="pocket-universe" style={{ "--ui-scale": uiScale } as CSSProperties}>
      <ParticleBackground />
      <FloatingObjects />
      <PocketPortal />
      <PortalAnimation />
      <AnimatePresence mode="wait">
        {scene === "landing" || scene === "portal" ? (
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.08, filter: "blur(16px)" }}
            initial={{ opacity: 0, scale: 0.98 }}
            key="landing"
            transition={{ duration: 0.45 }}
          >
            <HeroScene />
          </motion.div>
        ) : scene === "gadget" ? (
          <motion.main
            animate={{ opacity: 1, y: 0 }}
            className="relative z-10 min-h-screen px-3 pb-28 pt-[max(env(safe-area-inset-top),1rem)] text-white sm:px-4 sm:pt-[max(env(safe-area-inset-top),1.5rem)] md:px-8 md:pb-8"
            exit={{ opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            key="gadget"
          >
            <div className="mx-auto max-w-7xl">
              <div className="gadget-page-hero">
                <div>
                  <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#FFD93D] sm:text-xs sm:tracking-[0.3em]">Gadget explorer</p>
                  <h1 className="mt-2 text-2xl font-black sm:text-3xl md:text-5xl">Try pocket gadgets</h1>
                </div>
                <div className="gadget-page-cast" aria-label="Doraemon cartoon cast">
                  {characters.slice(0, 4).map((character) => (
                    <CharacterPortrait character={character} key={character.id} size="medium" />
                  ))}
                </div>
              </div>
              <div className="mt-6">
                <GadgetExplorer />
              </div>
            </div>
          </motion.main>
        ) : (
          <motion.div
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 16 }}
            initial={{ opacity: 0, y: 16 }}
            key="world"
          >
            <PocketWorld />
          </motion.div>
        )}
      </AnimatePresence>
      <BottomNavigation />
    </div>
  );
}
