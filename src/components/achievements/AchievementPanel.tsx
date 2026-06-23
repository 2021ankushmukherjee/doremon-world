"use client";

import { achievements } from "@/data/achievements";
import { AchievementBadge } from "@/components/achievements/AchievementBadge";
import { useAppStore } from "@/store/appStore";

export function AchievementPanel({ compact = false }: { compact?: boolean }) {
  const unlockedAchievements = useAppStore((state) => state.unlockedAchievements);
  const visible = compact ? achievements.slice(0, 4) : achievements;

  return (
    <section className="space-y-3 rounded-lg border border-white/12 bg-white/8 p-4 backdrop-blur-xl">
      <div className="flex items-center justify-between gap-3">
        <h2 className="text-lg font-black">Achievements</h2>
        <span className="rounded-lg bg-[#FFD93D]/16 px-3 py-1 text-xs font-black text-[#FFD93D]">
          {unlockedAchievements.length}/{achievements.length}
        </span>
      </div>
      <div className="grid gap-2">
        {visible.map((achievement) => (
          <AchievementBadge achievement={achievement} key={achievement.id} unlocked={unlockedAchievements.includes(achievement.id)} />
        ))}
      </div>
    </section>
  );
}
