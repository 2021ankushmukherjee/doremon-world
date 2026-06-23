import type { CSSProperties } from "react";

export function AnimatedStars() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0">
      {Array.from({ length: 24 }, (_, index) => (
        <span className="star-dot" key={index} style={{ "--i": index } as CSSProperties} />
      ))}
    </div>
  );
}
