"use client";

import type { CSSProperties } from "react";
import type { Character } from "@/types/character";

type CharacterPortraitProps = {
  character: Character;
  size?: "small" | "medium" | "large";
};

export function CharacterPortrait({ character, size = "small" }: CharacterPortraitProps) {
  const characterClass = `character-portrait character-portrait--${character.id} character-portrait--${size} character-portrait--${character.portraitPosition}`;
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

  return (
    <span
      aria-label={`${character.name} character image`}
      className={characterClass}
      role="img"
      style={{
        "--character-color": character.color,
        "--portrait-image": `url("${basePath}/doraemon-friends.png")`,
      } as CSSProperties}
    />
  );
}
