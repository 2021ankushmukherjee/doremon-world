"use client";

import { useCallback, useState } from "react";
import { gsap } from "gsap";
import { useAppStore } from "@/store/appStore";

export function usePortal() {
  const [isOpening, setIsOpening] = useState(false);
  const setScene = useAppStore((state) => state.setScene);

  const openPortal = useCallback(() => {
    if (isOpening) {
      return;
    }

    setIsOpening(true);
    setScene("portal");

    const timeline = gsap.timeline({
      defaults: { ease: "power3.inOut" },
      onComplete: () => {
        setScene("world");
        setIsOpening(false);
      },
    });

    timeline
      .to(".pocket-mouth", { scaleX: 1.35, scaleY: 1.2, duration: 0.45 })
      .to(".portal-ring", { opacity: 1, scale: 1.25, rotate: 240, duration: 0.9 }, "<")
      .to(".portal-flash", { opacity: 0.95, scale: 18, duration: 1.1 }, "-=0.2")
      .to(".portal-flash", { opacity: 0, duration: 0.35 });
  }, [isOpening, setScene]);

  return { isOpening, openPortal };
}
