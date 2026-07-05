"use client";
import { useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import styles from "./ServicesBook.module.css";
import { SERVICES } from "../../lib/data/services";

/*
 * An open book whose right page flips through the 6 services.
 *
 * The flip itself is pure CSS keyframes (see ServicesBook.module.css) — not
 * framer-motion — because post-mount JS-driven framer animations stall in
 * this environment (see the comment in motion/Reveal.jsx). React state only
 * swaps page content between flips:
 *
 *   - static right page (bottom layer) always shows the NEXT service
 *   - the flipper (top layer) shows the CURRENT service on its front face
 *   - every FLIP_INTERVAL the flipper rotates away, revealing the next
 *     service beneath; onAnimationEnd advances the index and resets the
 *     flipper, whose front face now matches what the page already shows,
 *     so the reset is invisible
 */
const FLIP_INTERVAL = 3000;

function PageContent({ service }) {
  const Icon = service.icon;
  const num = String(SERVICES.indexOf(service) + 1).padStart(2, "0");
  return (
    <div className="flex h-full flex-col items-center px-4 sm:px-6 py-4 sm:py-5 text-center">
      <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] text-accent-blue-400">
        Service {num} / 06
      </p>
      <div className="flex flex-1 flex-col items-center justify-center gap-3 sm:gap-4">
        <div className="flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full bg-accent-blue-500/10 ring-1 ring-accent-blue-500/40 shadow-[0_0_24px_rgba(27,160,213,0.25)]">
          <Icon className="h-6 w-6 sm:h-7 sm:w-7 text-accent-blue-400" />
        </div>
        <p className="font-display text-base sm:text-xl font-bold text-text-primary leading-snug">
          {service.title}
        </p>
        <p className="text-xs sm:text-sm text-text-secondary">{service.tagline}</p>
      </div>
      <div className="w-full">
        <div className="mx-auto h-px w-16 bg-border-strong" />
        <p className="mt-2 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-text-muted">
          Digital IT Solution
        </p>
      </div>
    </div>
  );
}

function DecorPage() {
  return (
    <div className="flex h-full flex-col items-center px-6 py-4 sm:py-5 text-center">
      <p className="text-[9px] sm:text-[10px] font-semibold uppercase tracking-[0.3em] text-text-muted">
        Digital IT Solution
      </p>
      <div className="flex flex-1 flex-col items-center justify-center gap-3">
        <p className="font-display text-xl sm:text-2xl font-bold text-accent-blue-400">
          Our Services
        </p>
        <div className="h-px w-12 bg-accent-blue-500/60" />
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-text-secondary">
          Design · Marketing · Growth
        </p>
        <div className={styles.decorLines} />
      </div>
      <div className="w-full">
        <div className="mx-auto h-px w-16 bg-border-strong" />
        <p className="mt-2 text-[8px] sm:text-[9px] uppercase tracking-[0.25em] text-text-muted">
          DIS Private LTD
        </p>
      </div>
    </div>
  );
}

export default function ServicesBook() {
  const prefersReducedMotion = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [flipping, setFlipping] = useState(false);

  const current = SERVICES[index];
  const next = SERVICES[(index + 1) % SERVICES.length];

  useEffect(() => {
    if (prefersReducedMotion) return;
    const id = setInterval(() => setFlipping(true), FLIP_INTERVAL);
    return () => clearInterval(id);
  }, [prefersReducedMotion]);

  const handleFlipEnd = (e) => {
    if (e.target !== e.currentTarget) return;
    setIndex((i) => (i + 1) % SERVICES.length);
    setFlipping(false);
  };

  return (
    <div className="flex h-full w-full items-center justify-center select-none">
      <div className={styles.scene}>
        <div className={styles.book}>
          <div className={styles.pageLeft}>
            <DecorPage />
          </div>
          <div className={styles.pageRight}>
            <PageContent service={next} />
          </div>
          <div
            className={`${styles.flipper} ${flipping ? styles.flipping : ""}`}
            onAnimationEnd={handleFlipEnd}
          >
            <div className={styles.faceFront}>
              <PageContent service={current} />
            </div>
            <div className={styles.faceBack}>
              <DecorPage />
            </div>
          </div>
          <div className={styles.spine} />

          {/* progress dots */}
          <div className="absolute -bottom-10 left-1/2 flex -translate-x-1/2 gap-2">
            {SERVICES.map((s, i) => (
              <span
                key={s.title}
                className={`h-1.5 w-1.5 rounded-full transition-colors duration-300 ${
                  i === index ? "bg-accent-blue-400" : "bg-text-muted/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
