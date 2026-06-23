"use client";

import { Award, RotateCcw, Volume2, VolumeX } from "lucide-react";
import { characters } from "@/data/characters";
import { CharacterFigure } from "@/components/characters/CharacterFigure";
import { DialogueBox } from "@/components/dialogues/DialogueBox";
import { WorldEvents } from "@/components/world/WorldEvents";
import { WorldMap } from "@/components/world/WorldMap";
import { AchievementPanel } from "@/components/achievements/AchievementPanel";
import { GadgetExplorer } from "@/components/gadgets/GadgetExplorer";
import { MissionBoard } from "@/components/missions/MissionBoard";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/appStore";

export function PocketWorld() {
  const soundEnabled = useAppStore((state) => state.soundEnabled);
  const toggleSound = useAppStore((state) => state.toggleSound);
  const resetProgress = useAppStore((state) => state.resetProgress);

  return (
    <main className="relative z-10 min-h-screen px-3 pb-28 pt-[max(env(safe-area-inset-top),1rem)] text-white sm:px-4 md:px-8 md:pb-8">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <header className="lg:col-span-2">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="text-[0.68rem] font-black uppercase tracking-[0.16em] text-[#FFD93D] sm:text-xs sm:tracking-[0.3em]">Pocket universe</p>
              <h1 className="mt-2 text-2xl font-black sm:text-3xl md:text-5xl">Explore the living gadget world</h1>
            </div>
            <div className="flex gap-2">
              <Button aria-label="Toggle sound" icon={soundEnabled ? <Volume2 size={17} /> : <VolumeX size={17} />} onClick={toggleSound} variant="ghost" />
              <Button aria-label="Reset progress" icon={<RotateCcw size={17} />} onClick={resetProgress} variant="ghost" />
            </div>
          </div>
        </header>
        <section className="space-y-5">
          <WorldMap />
          <div className="character-stage">
            {characters.map((character) => (
              <CharacterFigure character={character} key={character.id} />
            ))}
          </div>
          <DialogueBox />
        </section>
        <aside className="space-y-5">
          <WorldEvents />
          <MissionBoard />
          <AchievementPanel compact />
        </aside>
        <section className="lg:col-span-2">
          <div className="mb-3 flex items-center gap-2 text-[#FFD93D]">
            <Award size={18} />
            <h2 className="text-lg font-black">Gadget Deck</h2>
          </div>
          <GadgetExplorer />
        </section>
      </div>
    </main>
  );
}
