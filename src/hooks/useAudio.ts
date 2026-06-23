"use client";

import { useCallback } from "react";
import { useAppStore } from "@/store/appStore";

type AudioWindow = Window &
  typeof globalThis & {
    webkitAudioContext?: typeof AudioContext;
  };

export function useAudio() {
  const soundEnabled = useAppStore((state) => state.soundEnabled);

  const playTone = useCallback(
    (frequency = 520, duration = 0.12) => {
      if (!soundEnabled || typeof window === "undefined") {
        return;
      }

      const audioWindow = window as AudioWindow;
      const AudioContextCtor = audioWindow.AudioContext || audioWindow.webkitAudioContext;
      if (!AudioContextCtor) {
        return;
      }

      const context = new AudioContextCtor();
      const oscillator = context.createOscillator();
      const gain = context.createGain();
      oscillator.frequency.value = frequency;
      oscillator.type = "sine";
      gain.gain.setValueAtTime(0.04, context.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, context.currentTime + duration);
      oscillator.connect(gain);
      gain.connect(context.destination);
      oscillator.start();
      oscillator.stop(context.currentTime + duration);
    },
    [soundEnabled],
  );

  return { playTone };
}
