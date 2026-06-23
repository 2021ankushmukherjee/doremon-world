"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import type { CSSProperties } from "react";
import { useAppStore } from "@/store/appStore";

export function LocationCard({ location, index }: { location: string; index: number }) {
  const selectedLocation = useAppStore((state) => state.selectedLocation);
  const visitLocation = useAppStore((state) => state.visitLocation);
  const active = selectedLocation === location;

  return (
    <motion.button
      aria-pressed={active}
      className={`location-card ${active ? "is-active" : ""}`}
      initial={{ opacity: 0, y: 16 }}
      onClick={() => visitLocation(location)}
      style={{ "--delay": `${index * 60}ms` } as CSSProperties}
      type="button"
      whileHover={{ rotateX: 4, rotateY: -6, y: -5 }}
      whileTap={{ scale: 0.96 }}
    >
      <MapPin size={18} />
      <span>{location}</span>
    </motion.button>
  );
}
