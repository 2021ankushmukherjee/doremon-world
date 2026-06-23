export function MagicGlow({ className = "" }: { className?: string }) {
  return <div aria-hidden className={`magic-glow pointer-events-none absolute rounded-full ${className}`} />;
}
