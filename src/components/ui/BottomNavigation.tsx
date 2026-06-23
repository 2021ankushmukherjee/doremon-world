"use client";

import { Award, Home, Map, Sparkles, Users } from "lucide-react";
import { useAppStore } from "@/store/appStore";

const items = [
  { id: "home", label: "Home", icon: Home, scene: "landing" as const },
  { id: "world", label: "World", icon: Map, scene: "world" as const },
  { id: "gadgets", label: "Gadgets", icon: Sparkles, scene: "gadget" as const },
  { id: "characters", label: "Characters", icon: Users, scene: "world" as const },
  { id: "achievements", label: "Awards", icon: Award, scene: "world" as const },
];

export function BottomNavigation() {
  const scene = useAppStore((state) => state.scene);
  const setScene = useAppStore((state) => state.setScene);

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 border-t border-white/12 bg-[#050816]/86 px-2 pb-[max(env(safe-area-inset-bottom),0.5rem)] pt-2 backdrop-blur-xl md:hidden" aria-label="Pocket navigation">
      <div className="grid grid-cols-5 gap-1">
        {items.map((item) => {
          const Icon = item.icon;
          const active = scene === item.scene || (item.id === "gadgets" && scene === "gadget");
          return (
            <button
              aria-label={item.label}
              className={`bottom-nav-button flex min-h-12 min-w-0 flex-col items-center justify-center gap-1 rounded-lg px-1 text-[0.66rem] font-bold leading-none transition ${active ? "bg-white text-[#050816]" : "text-white/72 hover:bg-white/10 hover:text-white"}`}
              key={item.id}
              onClick={() => setScene(item.scene)}
              type="button"
            >
              <Icon size={17} />
              <span>{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
