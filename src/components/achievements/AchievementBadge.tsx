"use client";

import { Award, Clock, Map, Sparkles, Star, Trophy, Wrench } from "lucide-react";
import type { Achievement } from "@/data/achievements";

const icons = {
  map: Map,
  clock: Clock,
  wrench: Wrench,
  trophy: Trophy,
  sparkles: Sparkles,
  star: Star,
};

export function AchievementBadge({ achievement, unlocked }: { achievement: Achievement; unlocked: boolean }) {
  const Icon = icons[achievement.icon as keyof typeof icons] ?? Award;

  return (
    <article className={`achievement-badge ${unlocked ? "is-unlocked" : ""}`}>
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-white/10">
        <Icon size={19} />
      </span>
      <div>
        <h3 className="text-sm font-black">{achievement.title}</h3>
        <p className="text-xs leading-5 text-white/60">{achievement.description}</p>
      </div>
    </article>
  );
}
