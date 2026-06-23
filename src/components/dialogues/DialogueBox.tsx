"use client";

import type { CSSProperties } from "react";
import { MessageCircle, Sparkles, UserRound } from "lucide-react";
import { characters } from "@/data/characters";
import { missions } from "@/data/missions";
import { CharacterPortrait } from "@/components/characters/CharacterPortrait";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/appStore";

export function DialogueBox() {
  const selectedCharacter = useAppStore((state) => state.selectedCharacter);
  const friendshipPoints = useAppStore((state) => state.friendshipPoints);
  const setScene = useAppStore((state) => state.setScene);
  const completeMission = useAppStore((state) => state.completeMission);
  const addFriendship = useAppStore((state) => state.addFriendship);
  const character = characters.find((item) => item.id === selectedCharacter) ?? characters[0];
  const mission = missions.find((item) => item.characterId === character.id);
  const dialogue = character.dialogues[(friendshipPoints[character.id] ?? 0) % character.dialogues.length];

  return (
    <section className="dialogue-box" aria-live="polite">
      <div className="flex items-start gap-3">
        <span className="dialogue-character-portrait" style={{ "--character-color": character.color } as CSSProperties}>
          <CharacterPortrait character={character} size="medium" />
        </span>
        <div className="min-w-0">
          <h3 className="text-lg font-black">{character.name}</h3>
          <p className="text-sm text-white/68">{character.role}</p>
          <p className="mt-3 text-base leading-7 text-white">&ldquo;{dialogue}&rdquo;</p>
          <div className="mt-2 text-sm text-[#FFD93D]" aria-label={`${friendshipPoints[character.id] ?? 0} friendship points`}>
            {"♥".repeat(friendshipPoints[character.id] ?? 0)}
            <span className="text-white/28">{"♥".repeat(5 - (friendshipPoints[character.id] ?? 0))}</span>
          </div>
        </div>
      </div>
      <div className="mt-4 grid gap-2 sm:grid-cols-3">
        <Button icon={<Sparkles size={17} />} onClick={() => setScene("gadget")}>
          Explore Gadgets
        </Button>
        <Button icon={<MessageCircle size={17} />} onClick={() => mission && completeMission(mission.id, character.id)} variant="ghost">
          Get Mission
        </Button>
        <Button icon={<UserRound size={17} />} onClick={() => addFriendship(character.id, 1)} variant="ghost">
          Learn Character
        </Button>
      </div>
    </section>
  );
}
