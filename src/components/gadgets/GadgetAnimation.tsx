"use client";

import { useMemo, useState, type CSSProperties } from "react";
import { Button } from "@/components/ui/Button";
import { GadgetIllustration } from "@/components/gadgets/GadgetIllustration";
import { useAppStore } from "@/store/appStore";
import type { Gadget } from "@/types/gadget";

const destinations = ["Tokyo", "Moon", "Future City", "Underwater World"];
const timelines = ["Dinosaur Era", "Present", "2100", "Space Colony"];
const whatIfs = [
  "What if cats ruled the world?",
  "What if humans could fly?",
  "What if gravity disappeared?",
];

export function GadgetAnimation({ gadget }: { gadget: Gadget }) {
  const [input, setInput] = useState("");
  const [destination, setDestination] = useState(destinations[0]);
  const [time, setTime] = useState(timelines[1]);
  const [shots, setShots] = useState(0);
  const [note, setNote] = useState("");
  const [tries, setTries] = useState(0);
  const discoverGadget = useAppStore((state) => state.discoverGadget);
  const activateTimeMachine = useAppStore((state) => state.useTimeMachine);
  const setUiScale = useAppStore((state) => state.setUiScale);

  const translated = useMemo(() => {
    if (!input.trim()) {
      return "Pocket jelly is waiting for words.";
    }
    return `${input.trim()} -> Pika-poka ${input.trim().split("").reverse().join("").toLowerCase()}`;
  }, [input]);

  if (gadget.id === "anywhere-door") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className="anywhere-door" aria-live="polite">
          <span>{destination}</span>
        </div>
        <div className="gadget-choice-grid grid grid-cols-2 gap-2">
          {destinations.map((item) => (
            <Button key={item} onClick={() => { setDestination(item); discoverGadget(gadget.id); }} variant={item === destination ? "primary" : "ghost"}>
              {item}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  if (gadget.id === "time-machine") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className={`timeline-preview ${time.toLowerCase().replaceAll(" ", "-")}`} aria-live="polite">{time}</div>
        <div className="gadget-choice-grid grid grid-cols-2 gap-2">
          {timelines.map((item) => (
            <Button key={item} onClick={() => { setTime(item); discoverGadget(gadget.id); activateTimeMachine(); }} variant={item === time ? "primary" : "ghost"}>
              {item}
            </Button>
          ))}
        </div>
      </div>
    );
  }

  if (gadget.id === "translation-jelly") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <input
          aria-label="Phrase to translate"
          className="w-full rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#FFD93D]"
          onChange={(event) => {
            setInput(event.target.value);
            discoverGadget(gadget.id);
          }}
          placeholder="Type an alien phrase"
          value={input}
        />
        <p className="rounded-lg bg-white/10 p-3 text-sm text-[#FFEFA3]">{translated}</p>
      </div>
    );
  }

  if (gadget.id === "memory-bread") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <textarea
          aria-label="Notes for memory bread"
          className="min-h-28 w-full rounded-lg border border-white/14 bg-white/10 px-4 py-3 text-white outline-none focus:border-[#FFD93D]"
          onChange={(event) => {
            setNote(event.target.value);
            discoverGadget(gadget.id);
          }}
          placeholder="Write a note for the bread"
          value={note}
        />
        <div className={`memory-bread ${note ? "is-full" : ""}`}>{note ? "Absorbed!" : "Toast ready"}</div>
      </div>
    );
  }

  if (gadget.id === "air-cannon") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <button
          aria-label="Fire air cannon"
          className="air-cannon"
          onClick={() => {
            setShots((value) => value + 1);
            discoverGadget(gadget.id);
          }}
          type="button"
        >
          <span>{shots}</span>
        </button>
        <p className="text-center text-sm text-white/70">Tap the cannon target for soft particle bursts.</p>
      </div>
    );
  }

  if (gadget.id === "small-light" || gadget.id === "big-light") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className={`light-beam ${gadget.id === "small-light" ? "small" : "big"}`} />
        <Button onClick={() => { setUiScale(gadget.id === "small-light" ? 0.9 : 1.08); discoverGadget(gadget.id); }}>
          Activate {gadget.name}
        </Button>
      </div>
    );
  }

  if (gadget.id === "what-if-phone") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className="phone-booth">Alternate world line is open</div>
        {whatIfs.map((item) => (
          <Button
            key={item}
            onClick={() => {
              setTries((value) => value + 1);
              discoverGadget(gadget.id);
            }}
            variant="ghost"
          >
            {item}
          </Button>
        ))}
      </div>
    );
  }

  const genericTry = () => {
    setTries((value) => value + 1);
    discoverGadget(gadget.id);
  };

  const tryLabel = tries > 0 ? `Try ${gadget.name} again` : `Try ${gadget.name}`;

  if (gadget.id === "bamboo-copter") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className={`gadget-stage bamboo-copter-stage ${tries > 0 ? "is-active" : ""}`} aria-live="polite">
          <span className="copter-flight-path" />
          <span className="copter-rider">D</span>
          <strong>{tries > 0 ? "Sky glide active" : "Rotor on standby"}</strong>
        </div>
        <Button onClick={genericTry}>{tryLabel}</Button>
      </div>
    );
  }

  if (gadget.id === "time-cloth") {
    const restored = tries > 0 && tries % 2 === 0;

    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className={`gadget-stage time-cloth-stage ${tries > 0 ? "is-active" : ""}`} aria-live="polite">
          <span className={`cloth-target ${restored ? "is-restored" : ""}`} />
          <strong>{tries === 0 ? "Object waiting" : restored ? "Restored to shiny new" : "Aged into antique mode"}</strong>
        </div>
        <Button onClick={genericTry}>{tryLabel}</Button>
      </div>
    );
  }

  if (gadget.id === "copying-mirror") {
    const copies = Math.min(4, tries + 1);

    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className={`gadget-stage copying-mirror-stage ${tries > 0 ? "is-active" : ""}`} aria-live="polite">
          <div className="mirror-copies" style={{ "--copy-count": copies } as CSSProperties & Record<"--copy-count", number>}>
            {Array.from({ length: copies }).map((_, index) => (
              <span key={index} />
            ))}
          </div>
          <strong>{tries > 0 ? `${copies} copies in the mirror` : "One original ready"}</strong>
        </div>
        <Button onClick={genericTry}>{tryLabel}</Button>
      </div>
    );
  }

  if (gadget.id === "pass-loop") {
    return (
      <div className="gadget-lab">
        <GadgetIllustration gadget={gadget} large />
        <div className={`gadget-stage pass-loop-stage ${tries > 0 ? "is-active" : ""}`} aria-live="polite">
          <span className="loop-wall" />
          <span className="loop-ring" />
          <span className="loop-traveler" />
          <strong>{tries > 0 ? "Secret wall path open" : "Wall is solid"}</strong>
        </div>
        <Button onClick={genericTry}>{tryLabel}</Button>
      </div>
    );
  }

  return (
    <div className="gadget-lab">
      <GadgetIllustration gadget={gadget} large />
      <div className={`gadget-stage generic-gadget ${tries > 0 ? "is-active" : ""}`} aria-live="polite">
        {tries > 0 ? "Pocket test complete" : "Ready for a pocket test"}
      </div>
      <Button onClick={genericTry}>{tryLabel}</Button>
    </div>
  );
}
