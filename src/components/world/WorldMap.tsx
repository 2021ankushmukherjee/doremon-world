"use client";

import { LocationCard } from "@/components/world/LocationCard";

export const locations = [
  "Doraemon Pocket Center",
  "Nobita House",
  "School",
  "Empty Ground",
  "Future Lab",
  "Gadget Museum",
  "Time Machine Station",
];

export function WorldMap() {
  return (
    <div className="world-map">
      {locations.map((location, index) => (
        <LocationCard index={index} key={location} location={location} />
      ))}
    </div>
  );
}
