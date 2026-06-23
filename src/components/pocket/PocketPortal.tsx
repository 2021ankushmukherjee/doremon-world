export function PocketPortal() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-30 grid place-items-center overflow-hidden">
      <div className="portal-ring opacity-0" />
      <div className="portal-flash opacity-0" />
    </div>
  );
}
