export interface Character {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  color: string;
  portraitPosition: "top-left" | "top-center" | "top-right" | "bottom-left" | "bottom-center" | "bottom-right";
  dialogues: string[];
  unlocked: boolean;
}
