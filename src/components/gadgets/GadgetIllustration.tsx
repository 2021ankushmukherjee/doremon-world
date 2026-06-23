import type { Gadget } from "@/types/gadget";

export function GadgetIllustration({ gadget, large = false }: { gadget: Gadget; large?: boolean }) {
  return (
    <div className={`gadget-illustration ${large ? "is-large" : ""}`} aria-hidden>
      {gadget.id === "anywhere-door" && (
        <div className="ill-door">
          <span className="ill-door-window" />
          <span className="ill-door-knob" />
        </div>
      )}
      {gadget.id === "bamboo-copter" && (
        <div className="ill-copter">
          <span className="ill-copter-blade" />
          <span className="ill-copter-stem" />
          <span className="ill-copter-cap" />
        </div>
      )}
      {gadget.id === "time-machine" && (
        <div className="ill-machine">
          <span className="ill-machine-seat" />
          <span className="ill-machine-clock" />
          <span className="ill-machine-light" />
        </div>
      )}
      {gadget.id === "small-light" && (
        <div className="ill-light ill-small-light">
          <span />
        </div>
      )}
      {gadget.id === "big-light" && (
        <div className="ill-light ill-big-light">
          <span />
        </div>
      )}
      {gadget.id === "translation-jelly" && <div className="ill-jelly" />}
      {gadget.id === "memory-bread" && (
        <div className="ill-bread">
          <span>ABC</span>
        </div>
      )}
      {gadget.id === "air-cannon" && (
        <div className="ill-cannon">
          <span />
        </div>
      )}
      {gadget.id === "time-cloth" && (
        <div className="ill-cloth">
          <span />
        </div>
      )}
      {gadget.id === "copying-mirror" && (
        <div className="ill-mirror">
          <span />
        </div>
      )}
      {gadget.id === "what-if-phone" && (
        <div className="ill-phone">
          <span>?</span>
        </div>
      )}
      {gadget.id === "pass-loop" && <div className="ill-loop" />}
    </div>
  );
}
