"use client";

import { useEffect, useState } from "react";

const events = [
  "Dorayaki appears near the pocket center",
  "Gian starts singing at the empty ground",
  "Suneo polishes a rare gadget display",
  "Nobita runs away from homework",
  "Doraemon searches the pocket for a missing bell",
];

export function WorldEvents() {
  const [eventIndex, setEventIndex] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setEventIndex((index) => (index + 1) % events.length);
    }, 5200);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <aside className="rounded-lg border border-[#FFD93D]/24 bg-[#FFD93D]/10 p-4 text-sm font-semibold text-[#FFEFA3]">
      {events[eventIndex]}
    </aside>
  );
}
