"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icons";
import { heroSlides } from "@/lib/slides";
import { site } from "@/lib/site";

const AUTOPLAY_MS = 6500;

export function HeroSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const regionRef = useRef<HTMLElement>(null);
  const count = heroSlides.length;

  const go = useCallback((next: number) => setIndex(((next % count) + count) % count), [count]);
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused || count < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const timer = window.setInterval(() => {
      if (!document.hidden) setIndex((i) => (i + 1) % count);
    }, AUTOPLAY_MS);

    return () => window.clearInterval(timer);
  }, [paused, count]);

  useEffect(() => {
    const node = regionRef.current;
    if (!node) return;

    const onKey = (event: KeyboardEvent) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        next();
      } else if (event.key === "ArrowLeft") {
        event.preventDefault();
        prev();
      }
    };

    node.addEventListener("keydown", onKey);
    return () => node.removeEventListener("keydown", onKey);
  }, [next, prev]);

  return (
    <section
      ref={regionRef}
      aria-roledescription="carousel"
      aria-label="Our services"
      tabIndex={-1}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
      /* svh rather than vh so mobile browser chrome does not clip the panel. */
      className="relative isolate flex min-h-svh flex-col overflow-hidden bg-ink-950"
    >
      {heroSlides.map((slide, i) => (
        <Image
          key={slide.eyebrow}
          src={slide.image.src}
          alt={i === index ? slide.image.alt : ""}
          aria-hidden={i !== index}
          fill
          priority={i === 0}
          sizes="100vw"
          className={`object-cover object-center transition-all duration-[1200ms] ease-out ${
            i === index ? "scale-105 opacity-100" : "scale-100 opacity-0"
          }`}
        />
      ))}

      {/* Legibility wash weighted to the left, where the panel sits. The right
          two-thirds of the photograph stay bright. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-950/70 via-ink-950/25 to-transparent"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-ink-950/25"
      />

      <div className="container-page relative flex flex-1 items-center py-24">
        <div className="w-full max-w-2xl">
          {heroSlides.map((slide, i) => (
            <div
              key={slide.eyebrow}
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${count}: ${slide.eyebrow}`}
              hidden={i !== index}
              className="border-l-4 border-brand-500 bg-ink-950/80 p-9 backdrop-blur-sm motion-safe:animate-[fadeUp_0.7s_ease-out] sm:p-12 lg:p-14"
            >
              <p className="font-display text-lg font-semibold uppercase tracking-[0.14em] text-brand-500 sm:text-xl">
                {site.legalName}
              </p>

              <h1 className="mt-4 font-display text-5xl font-bold leading-[1.02] text-white sm:text-6xl lg:text-7xl">
                {slide.eyebrow}
              </h1>

              <Link
                href={slide.cta.href}
                className="group mt-10 inline-flex items-center gap-3 border-b-2 border-brand-500 pb-1.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors hover:border-white"
              >
                Find out more
                <Icon
                  name="arrow"
                  className="size-4 text-brand-500 transition-transform duration-300 group-hover:translate-x-1.5"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Controls pinned to the bottom of the viewport-height section. */}
      <div className="relative border-t border-white/15 bg-ink-950/55 backdrop-blur-sm">
        <div className="container-page flex items-center gap-6 py-5">
          <span className="font-display text-sm font-bold tabular-nums text-white">
            {String(index + 1).padStart(2, "0")}
            <span className="text-white/40"> / {String(count).padStart(2, "0")}</span>
          </span>

          <ul className="flex flex-1 items-center gap-2">
            {heroSlides.map((slide, i) => (
              <li key={slide.eyebrow} className="flex-1 sm:max-w-24">
                <button
                  type="button"
                  onClick={() => go(i)}
                  aria-label={`Go to slide ${i + 1}: ${slide.eyebrow}`}
                  aria-current={i === index}
                  className="group block w-full py-2"
                >
                  <span
                    className={`block h-0.5 w-full transition-colors duration-300 ${
                      i === index ? "bg-brand-500" : "bg-white/25 group-hover:bg-white/60"
                    }`}
                  />
                </button>
              </li>
            ))}
          </ul>

          <span className="hidden text-xs font-medium uppercase tracking-[0.14em] text-white/60 lg:block">
            {heroSlides[index].eyebrow}
          </span>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous slide"
              className="flex size-10 rotate-180 items-center justify-center border border-white/25 text-white transition-colors hover:border-brand-500 hover:bg-brand-500"
            >
              <Icon name="arrow" className="size-4" />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next slide"
              className="flex size-10 items-center justify-center border border-white/25 text-white transition-colors hover:border-brand-500 hover:bg-brand-500"
            >
              <Icon name="arrow" className="size-4" />
            </button>
          </div>
        </div>
      </div>

      <p aria-live="polite" className="sr-only">
        Slide {index + 1} of {count}: {heroSlides[index].eyebrow}
      </p>
    </section>
  );
}
