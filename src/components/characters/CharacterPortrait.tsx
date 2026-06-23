"use client";

import type { CSSProperties } from "react";
import type { Character } from "@/types/character";

type CharacterPortraitProps = {
  character: Character;
  size?: "small" | "medium" | "large";
};

export function CharacterPortrait({ character, size = "small" }: CharacterPortraitProps) {
  const characterClass = `character-portrait character-portrait--${character.id} character-portrait--${size} character-portrait--${character.portraitPosition}`;

  return (
    <span
      aria-label={`${character.name} character image`}
      className={characterClass}
      role="img"
      style={{ "--character-color": character.color } as CSSProperties}
    />
  );
}
