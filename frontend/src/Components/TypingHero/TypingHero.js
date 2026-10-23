import React, { useEffect, useState } from "react";

// The lines typed out one after another on the home page.
// Edit these to change the hero text.
const PHRASES = [
  "Think like an attacker,",
  "Build like a defender,",
  "Create what’s next.",
];

const TYPE_SPEED_MS = 55; // time per character
const LINE_PAUSE_MS = 450; // pause before starting the next line

const prefersReducedMotion = () =>
  typeof window !== "undefined" &&
  window.matchMedia &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const TypingHero = () => {
  // line = which phrase is being typed; chars = how many letters are shown.
  // If someone has animations turned off, show everything right away.
  const [line, setLine] = useState(() =>
    prefersReducedMotion() ? PHRASES.length : 0
  );
  const [chars, setChars] = useState(0);

  useEffect(() => {
    if (line >= PHRASES.length) return; // finished

    let timer;
    if (chars < PHRASES[line].length) {
      timer = setTimeout(() => setChars((c) => c + 1), TYPE_SPEED_MS);
    } else if (line < PHRASES.length - 1) {
      timer = setTimeout(() => {
        setLine((l) => l + 1);
        setChars(0);
      }, LINE_PAUSE_MS);
    } else {
      setLine(PHRASES.length);
    }
    return () => clearTimeout(timer);
  }, [line, chars]);

  const done = line >= PHRASES.length;
  const activeLine = done ? PHRASES.length - 1 : line;

  return (
    <section className="bg-black text-white">
      <div className="max-w-[1240px] mx-auto px-6 pt-28 pb-24 md:pt-40 md:pb-32">
        {/* Screen readers get the full sentence; the typed spans are visual only */}
        <h1
          aria-label={PHRASES.join(" ")}
          className="font-display font-bold text-[clamp(44px,7vw,104px)] leading-[1.04] tracking-[-0.035em] min-h-[3.2em]"
        >
          {PHRASES.map((phrase, i) => {
            let text = "";
            if (done || i < line) text = phrase;
            else if (i === line) text = phrase.slice(0, chars);

            const isLast = i === PHRASES.length - 1;
            return (
              <span
                key={phrase}
                aria-hidden="true"
                className={`block ${isLast ? "text-accent-light" : ""} ${
                  i > activeLine ? "opacity-0" : ""
                }`}
              >
                {text}
                {i === activeLine && <span className="typing-cursor" />}
              </span>
            );
          })}
        </h1>

        <div className="mt-14 flex flex-wrap gap-x-7 gap-y-3 font-body text-base text-neutral-400">
          <span>Aminat Usman</span>
          <span aria-hidden="true">·</span>
          <span>Security Engineer</span>
          <span aria-hidden="true">·</span>
          <span>Innovator + Creator</span>
        </div>
      </div>
    </section>
  );
};

export default TypingHero;
