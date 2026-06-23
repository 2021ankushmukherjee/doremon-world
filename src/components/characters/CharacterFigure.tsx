"use client";

import { motion } from "framer-motion";
import type { CSSProperties } from "react";
import type { Character } from "@/types/character";
import { CharacterPortrait } from "@/components/characters/CharacterPortrait";
import { useAppStore } from "@/store/appStore";

export function CharacterFigure({ character }: { character: Character }) {
  const discoveredGadgets = useAppStore((state) => state.discoveredGadgets);
  const selectCharacter = useAppStore((state) => state.selectCharacter);
  const unlocked = character.unlocked || (character.id === "dorami" && discoveredGadgets.length >= 5);

  return (
    <motion.button
      aria-label={`Talk to ${character.name}`}
      className={`character-token ${unlocked ? "" : "is-locked"}`}
      onClick={() => unlocked && selectCharacter(character.id)}
      style={{ "--character-color": character.color } as CSSProperties}
      type="button"
      whileHover={{ y: -6, scale: 1.04 }}
      whileTap={{ scale: 0.95 }}
    >
      <span className="character-face">
        {unlocked ? <CharacterPortrait character={character} /> : "?"}
      </span>
      <span className="mt-2 text-xs font-black text-white">{character.name.split(" ")[0]}</span>
    </motion.button>
  );
}
