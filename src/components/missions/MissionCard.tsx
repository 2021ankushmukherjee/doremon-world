"use client";

import { CheckCircle2, CircleDashed } from "lucide-react";
import type { Mission } from "@/types/mission";
import { Button } from "@/components/ui/Button";
import { useAppStore } from "@/store/appStore";

export function MissionCard({ mission }: { mission: Mission }) {
  const completedMissions = useAppStore((state) => state.completedMissions);
  const completeMission = useAppStore((state) => state.completeMission);
  const done = completedMissions.includes(mission.id);

  return (
    <article className={`mission-card ${done ? "is-done" : ""}`}>
      <div className="flex items-start gap-3">
        {done ? <CheckCircle2 className="text-[#9AE66E]" size={20} /> : <CircleDashed className="text-[#FFD93D]" size={20} />}
        <div>
          <h3 className="font-black">{mission.title}</h3>
          <p className="mt-1 text-sm leading-6 text-white/64">{mission.description}</p>
          <p className="mt-2 text-xs font-bold uppercase tracking-[0.16em] text-[#FFD93D]">{mission.reward}</p>
        </div>
      </div>
      <Button className="mt-3 w-full" disabled={done} onClick={() => completeMission(mission.id, mission.characterId)} variant={done ? "ghost" : "primary"}>
        {done ? "Completed" : mission.requiredAction}
      </Button>
    </article>
  );
}
