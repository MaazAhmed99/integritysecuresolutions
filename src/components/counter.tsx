"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Counts up once the element scrolls into view.
 * The live WordPress site ships this pattern but the counter never fires,
 * so every stat renders as "0+" — this version degrades to the final value
 * if IntersectionObserver or animation is unavailable.
 */
export function Counter({
  value,
  suffix = "",
  duration = 1600,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const [armed, setArmed] = useState(false);

  // Only drop to zero on the client, and only when we can actually animate.
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    if (typeof IntersectionObserver === "undefined") return;
    setDisplay(0);
    setArmed(true);
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node || !armed) return;

    let frame = 0;
    let failsafe = 0;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        window.clearTimeout(failsafe);

        const start = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - start) / duration, 1);
          // easeOutExpo — fast start, gentle settle.
          const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          setDisplay(Math.round(value * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
      },
      { threshold: 0.4 },
    );

    observer.observe(node);

    // If the observer never reports, snap to the real figure rather than
    // leaving "0+" on screen — the exact bug the WordPress site ships with.
    failsafe = window.setTimeout(() => {
      observer.disconnect();
      setDisplay(value);
    }, 4000);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [armed, duration, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {display.toLocaleString("en-GB")}
      <span className="text-gold-500">{suffix}</span>
    </span>
  );
}
