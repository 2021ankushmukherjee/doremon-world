import type { Gadget } from "@/types/gadget";

export const gadgets: Gadget[] = [
  { id: "anywhere-door", name: "Anywhere Door", description: "Open a portal to Tokyo, the Moon, Future City, or an underwater world.", icon: "door-open", animation: "door", unlocked: true },
  { id: "bamboo-copter", name: "Bamboo Copter", description: "Attach the rotor and glide through the pocket sky.", icon: "fan", animation: "flight", unlocked: true },
  { id: "time-machine", name: "Time Machine", description: "Jump between the Dinosaur Era, Present, 2100, and a Space Colony.", icon: "clock", animation: "timeline", unlocked: true },
  { id: "small-light", name: "Small Light", description: "Shrink the interface into a tiny toy universe.", icon: "minimize", animation: "shrink", unlocked: true },
  { id: "big-light", name: "Big Light", description: "Scale everything up with a theatrical beam.", icon: "maximize", animation: "grow", unlocked: true },
  { id: "translation-jelly", name: "Translation Jelly", description: "Type a phrase and make it sound pocket-universal.", icon: "languages", animation: "jelly", unlocked: true },
  { id: "memory-bread", name: "Memory Bread", description: "Feed notes to a cheerful slice and watch it absorb facts.", icon: "book-open", animation: "bread", unlocked: false },
  { id: "air-cannon", name: "Air Cannon", description: "Tap targets to fire soft bursts of pocket air.", icon: "target", animation: "cannon", unlocked: false },
  { id: "time-cloth", name: "Time Cloth", description: "Age or restore pocket objects with a shimmering cloth.", icon: "sparkles", animation: "cloth", unlocked: false },
  { id: "copying-mirror", name: "Copying Mirror", description: "Duplicate playful objects for collection combos.", icon: "copy", animation: "mirror", unlocked: false },
  { id: "what-if-phone", name: "What-if Telephone Booth", description: "Generate alternate worlds from wild questions.", icon: "phone", animation: "what-if", unlocked: false },
  { id: "pass-loop", name: "Pass Loop", description: "Place a loop and slip through secret pocket walls.", icon: "circle", animation: "loop", unlocked: false },
];
