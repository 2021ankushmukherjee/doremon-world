const objects = ["dorayaki", "star", "door", "bell", "copter", "clock"];

export function FloatingObjects() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {objects.map((object, index) => (
        <span className={`float-object float-object-${index}`} key={object}>
          {object === "dorayaki" ? "◎" : object === "star" ? "✦" : object === "door" ? "▯" : object === "bell" ? "●" : object === "copter" ? "✣" : "◴"}
        </span>
      ))}
    </div>
  );
}
