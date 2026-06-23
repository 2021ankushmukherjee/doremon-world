export interface Achievement {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export const achievements: Achievement[] = [
  { id: "explorer", title: "Explorer", description: "Visit all locations in the pocket universe.", icon: "map" },
  { id: "time-traveler", title: "Time Traveler", description: "Use the Time Machine five times.", icon: "clock" },
  { id: "inventor", title: "Inventor", description: "Try every gadget in the explorer.", icon: "wrench" },
  { id: "pocket-master", title: "Pocket Master", description: "Unlock every secret, mission, and badge.", icon: "trophy" },
  { id: "secret-dorami", title: "Dorami Signal", description: "Collect five gadgets and unlock Dorami.", icon: "sparkles" },
  { id: "golden-gadget", title: "Golden Gadget", description: "Complete every mission.", icon: "star" },
];
