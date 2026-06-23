import type { Mission } from "@/types/mission";

export const missions: Mission[] = [
  {
    id: "homework-rescue",
    title: "Homework Rescue",
    characterId: "nobita",
    description: "Use Memory Bread or Translation Jelly to help Nobita finish the cosmic worksheet.",
    reward: "Friendship points with Nobita",
    requiredAction: "Try Translation Jelly",
  },
  {
    id: "alien-lesson",
    title: "Alien Language Lesson",
    characterId: "shizuka",
    description: "Translate a pocket signal without scaring the sender.",
    reward: "Shizuka friendship and Explorer progress",
    requiredAction: "Use Translation Jelly",
  },
  {
    id: "sound-shield",
    title: "Gian Sound Shield",
    characterId: "gian",
    description: "Test a gadget against Gian's rehearsal shockwave.",
    reward: "Rare gadget unlock",
    requiredAction: "Fire the Air Cannon",
  },
  {
    id: "collector-race",
    title: "Collector Race",
    characterId: "suneo",
    description: "Discover eight gadgets before Suneo finishes arranging his display case.",
    reward: "Inventor progress",
    requiredAction: "Try eight gadgets",
  },
  {
    id: "pocket-mastery",
    title: "Pocket Mastery",
    characterId: "doraemon",
    description: "Collect five gadgets to unlock Dorami and the rare-gadget wing.",
    reward: "Dorami unlock",
    requiredAction: "Collect five gadgets",
  },
];
