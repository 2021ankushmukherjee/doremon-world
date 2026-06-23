"use client";

import { create } from "zustand";
import { persist } from "zustand/middleware";
import { characters } from "@/data/characters";
import { gadgets } from "@/data/gadgets";

export type Scene = "landing" | "portal" | "world" | "gadget";

interface AppState {
  scene: Scene;
  selectedGadget: string | null;
  selectedCharacter: string | null;
  selectedLocation: string;
  discoveredGadgets: string[];
  visitedLocations: string[];
  completedMissions: string[];
  unlockedAchievements: string[];
  friendshipPoints: Record<string, number>;
  soundEnabled: boolean;
  timeMachineUses: number;
  uiScale: number;
  setScene: (scene: Scene) => void;
  selectGadget: (id: string | null) => void;
  selectCharacter: (id: string | null) => void;
  visitLocation: (location: string) => void;
  discoverGadget: (id: string) => void;
  completeMission: (id: string, characterId: string) => void;
  unlockAchievement: (id: string) => void;
  addFriendship: (characterId: string, points: number) => void;
  toggleSound: () => void;
  useTimeMachine: () => void;
  setUiScale: (scale: number) => void;
  resetProgress: () => void;
}

const initialFriendship = Object.fromEntries(
  characters.map((character) => [character.id, character.id === "doraemon" ? 5 : 3]),
) as Record<string, number>;

const initialState = {
  scene: "landing" as Scene,
  selectedGadget: null,
  selectedCharacter: "doraemon",
  selectedLocation: "Doraemon Pocket Center",
  discoveredGadgets: gadgets.filter((gadget) => gadget.unlocked).slice(0, 3).map((gadget) => gadget.id),
  visitedLocations: ["Doraemon Pocket Center"],
  completedMissions: [] as string[],
  unlockedAchievements: [] as string[],
  friendshipPoints: initialFriendship,
  soundEnabled: true,
  timeMachineUses: 0,
  uiScale: 1,
};

function uniquePush(values: string[], value: string) {
  return values.includes(value) ? values : [...values, value];
}

export const useAppStore = create<AppState>()(
  persist(
    (set, get) => ({
      ...initialState,
      setScene: (scene) => set({ scene }),
      selectGadget: (id) => set({ selectedGadget: id, scene: id ? "gadget" : get().scene }),
      selectCharacter: (id) => set({ selectedCharacter: id }),
      visitLocation: (location) =>
        set((state) => ({
          selectedLocation: location,
          visitedLocations: uniquePush(state.visitedLocations, location),
          unlockedAchievements:
            state.visitedLocations.length >= 6
              ? uniquePush(state.unlockedAchievements, "explorer")
              : state.unlockedAchievements,
        })),
      discoverGadget: (id) =>
        set((state) => {
          const discoveredGadgets = uniquePush(state.discoveredGadgets, id);
          const unlockedAchievements = [...state.unlockedAchievements];
          if (discoveredGadgets.length >= 5 && !unlockedAchievements.includes("secret-dorami")) {
            unlockedAchievements.push("secret-dorami");
          }
          if (discoveredGadgets.length >= gadgets.length && !unlockedAchievements.includes("inventor")) {
            unlockedAchievements.push("inventor");
          }
          return { discoveredGadgets, unlockedAchievements };
        }),
      completeMission: (id, characterId) =>
        set((state) => {
          const completedMissions = uniquePush(state.completedMissions, id);
          const unlockedAchievements = [...state.unlockedAchievements];
          if (completedMissions.length >= 5 && !unlockedAchievements.includes("golden-gadget")) {
            unlockedAchievements.push("golden-gadget");
          }
          return {
            completedMissions,
            unlockedAchievements,
            friendshipPoints: {
              ...state.friendshipPoints,
              [characterId]: Math.min(5, (state.friendshipPoints[characterId] ?? 0) + 1),
            },
          };
        }),
      unlockAchievement: (id) =>
        set((state) => ({ unlockedAchievements: uniquePush(state.unlockedAchievements, id) })),
      addFriendship: (characterId, points) =>
        set((state) => ({
          friendshipPoints: {
            ...state.friendshipPoints,
            [characterId]: Math.min(5, (state.friendshipPoints[characterId] ?? 0) + points),
          },
        })),
      toggleSound: () => set((state) => ({ soundEnabled: !state.soundEnabled })),
      useTimeMachine: () =>
        set((state) => ({
          timeMachineUses: state.timeMachineUses + 1,
          unlockedAchievements:
            state.timeMachineUses + 1 >= 5
              ? uniquePush(state.unlockedAchievements, "time-traveler")
              : state.unlockedAchievements,
        })),
      setUiScale: (scale) => set({ uiScale: scale }),
      resetProgress: () => set(initialState),
    }),
    {
      name: "doraemon-pocket-universe",
      partialize: (state) => ({
        discoveredGadgets: state.discoveredGadgets,
        visitedLocations: state.visitedLocations,
        completedMissions: state.completedMissions,
        unlockedAchievements: state.unlockedAchievements,
        friendshipPoints: state.friendshipPoints,
        soundEnabled: state.soundEnabled,
        timeMachineUses: state.timeMachineUses,
      }),
    },
  ),
);
