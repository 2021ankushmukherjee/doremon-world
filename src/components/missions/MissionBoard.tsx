"use client";

import { missions } from "@/data/missions";
import { MissionCard } from "@/components/missions/MissionCard";

export function MissionBoard() {
  return (
    <section className="space-y-3 rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur-xl">
      <h2 className="text-lg font-black">Mission Board</h2>
      <div className="grid gap-3">
        {missions.slice(0, 3).map((mission) => (
          <MissionCard key={mission.id} mission={mission} />
        ))}
      </div>
    </section>
  );
}
