"use client";

import { useRef, useState } from "react";
import type { PanInfo } from "framer-motion";
import { motion } from "framer-motion";
import Image from "next/image";
import { CharacterPortrait } from "@/components/characters/CharacterPortrait";
import { AnimatedStars } from "@/components/landing/AnimatedStars";
import { FloatingClouds } from "@/components/landing/FloatingClouds";
import { characters } from "@/data/characters";
import { gadgets } from "@/data/gadgets";
import { useAudio } from "@/hooks/useAudio";
import { useAppStore } from "@/store/appStore";

const DORAEMON_IMAGE_URL = "/doraemon-flying.png";

export function HeroScene() {
  const [isHappy, setIsHappy] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const doraemonRef = useRef<HTMLDivElement>(null);
  const { playTone } = useAudio();
  const setScene = useAppStore((state) => state.setScene);
  const discoverGadget = useAppStore((state) => state.discoverGadget);

  function giveDoracake(_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) {
    const box = doraemonRef.current?.getBoundingClientRect();

    if (!box || isHappy) {
      return;
    }

    const mouthZone = {
      left: box.left + box.width * 0.27,
      right: box.left + box.width * 0.68,
      top: box.top + box.height * 0.38,
      bottom: box.top + box.height * 0.58,
    };
    const droppedOnDoraemon =
      info.point.x >= mouthZone.left &&
      info.point.x <= mouthZone.right &&
      info.point.y >= mouthZone.top &&
      info.point.y <= mouthZone.bottom;

    if (!droppedOnDoraemon) {
      playTone(320, 0.12);
      return;
    }

    setIsHappy(true);
    gadgets.forEach((gadget) => discoverGadget(gadget.id));
    playTone(760, 0.16);
    window.setTimeout(() => setScene("gadget"), 1100);
  }

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden px-3 pb-24 pt-[max(env(safe-area-inset-top),1rem)] sm:px-4 sm:pt-[max(env(safe-area-inset-top),2rem)] md:px-8">
      <AnimatedStars />
      <FloatingClouds />
      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 md:grid-cols-[1fr_1.1fr]">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-30 order-2 text-center md:order-1 md:text-left"
          initial={{ opacity: 0, y: 24 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-3 text-[0.68rem] font-black uppercase tracking-[0.18em] sm:text-xs sm:tracking-[0.34em]">Doraemon says hello</p>
          <h1 className="mx-auto max-w-2xl text-3xl font-black leading-tight sm:text-4xl md:mx-0 md:text-6xl">
            Welcome to my Dora world
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-6 sm:text-base sm:leading-7 md:mx-0 md:text-lg">
            Hi friend, give me a doracake bucket and I will open my secret gadgets for you.
          </p>
          <div className="mt-6 flex flex-col items-center gap-3 md:items-start">
            <div className={`doracake-bucket-card ${isHappy ? "is-given" : ""}`}>
              <motion.button
                aria-label="Drag doracake bucket to Doraemon's mouth"
                className="bucket-drag-button"
                drag={!isHappy}
                dragMomentum={false}
                onDragEnd={giveDoracake}
                type="button"
                whileDrag={{ scale: 1.14, rotate: 8, zIndex: 80 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.96 }}
              >
                <span className="bucket-bowl" aria-hidden>
                  <span className="doracake-mini cake-one" />
                  <span className="doracake-mini cake-two" />
                  <span className="doracake-mini cake-three" />
                </span>
              </motion.button>
              <span>{isHappy ? "Doracakes delivered" : "Drag only the bucket"}</span>
            </div>
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="permission-note"
              initial={{ opacity: 0, y: 12 }}
            >
              {isHappy ? "Doraemon is happy! All gadgets are unlocked." : "Drop the bucket on Doraemon's mouth."}
            </motion.div>
            <div className="flex flex-wrap justify-center gap-3 md:justify-start">
              {isHappy && (
                <button className="hero-action-button" onClick={() => setScene("gadget")} type="button">
                  Open gadgets
                </button>
              )}
              <button
                className="hero-action-button"
                onClick={() => setShowFriends((value) => !value)}
                type="button"
              >
                Meet Doraemon friends
              </button>
            </div>
          </div>
          {showFriends && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              className="friends-panel"
              initial={{ opacity: 0, y: 16 }}
            >
              {characters.map((character) => (
                <article className="friend-card" key={character.id}>
                  <CharacterPortrait character={character} size="large" />
                  <div>
                    <h2>{character.name}</h2>
                    <p>Doraemon introduces {character.name.split(" ")[0]}: {character.role}.</p>
                  </div>
                </article>
              ))}
            </motion.div>
          )}
        </motion.div>
        <div className="relative z-10 order-1 flex flex-col items-center gap-5 md:order-2">
          <motion.div
            animate={isHappy ? { scale: [1, 1.06, 1], y: [0, -12, 0] } : { y: [0, -8, 0] }}
            className={`home-doraemon-picture ${isHappy ? "is-happy" : ""}`}
            ref={doraemonRef}
            transition={{ duration: isHappy ? 0.65 : 2.8, repeat: isHappy ? 0 : Infinity, repeatType: "mirror" }}
          >
            <Image
              alt="Happy Doraemon cartoon character"
              draggable={false}
              height={859}
              priority
              sizes="(min-width: 768px) 31rem, 86vw"
              src={DORAEMON_IMAGE_URL}
              unoptimized
              width={840}
            />
            {isHappy && <span className="happy-burst" aria-hidden>Yay!</span>}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
