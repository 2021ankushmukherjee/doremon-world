"use client";

import { useMemo } from "react";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import type { ParticlesPluginRegistrar } from "@tsparticles/react";

const initParticles: ParticlesPluginRegistrar = async (engine) => {
  await loadSlim(engine);
};

export function ParticleBackground() {
  const options = useMemo(
    () => ({
      background: { color: { value: "transparent" } },
      fpsLimit: 60,
      particles: {
        color: { value: ["#FFD93D", "#7B61FF", "#ffffff"] },
        links: { enable: false },
        move: { direction: "none" as const, enable: true, outModes: { default: "out" as const }, random: true, speed: 0.35 },
        number: { density: { enable: true }, value: 46 },
        opacity: { value: { min: 0.2, max: 0.75 } },
        shape: { type: "circle" },
        size: { value: { min: 1, max: 3 } },
      },
      detectRetina: true,
    }),
    [],
  );

  return (
    <ParticlesProvider init={initParticles}>
      <Particles className="absolute inset-0" id="pocket-particles" options={options} />
    </ParticlesProvider>
  );
}
