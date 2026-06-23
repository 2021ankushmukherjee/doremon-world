export function FloatingClouds() {
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {[0, 1, 2, 3].map((cloud) => (
        <span className={`cloud cloud-${cloud}`} key={cloud} />
      ))}
    </div>
  );
}
