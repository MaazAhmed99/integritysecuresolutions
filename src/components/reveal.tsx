"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";

type RevealProps = {
  children: ReactNode;
  /** Stagger in milliseconds, applied via a CSS custom property. */
  delay?: number;
  className?: string;
  as?: ElementType;
};

/**
 * Fades content in the first time it scrolls into view.
 * Respects prefers-reduced-motion via the stylesheet, so no JS branch is needed.
 */
export function Reveal({ children, delay = 0, className = "", as: Tag = "div" }: RevealProps) {
  const ref = useRef<HTMLElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node || shown) return;

    // No observer support — show immediately rather than hide content forever.
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShown(true);
          observer.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" },
    );

    observer.observe(node);

    // Failsafe: an observer that never reports (background tab, prerender,
    // odd embedded viewport) must not leave the page blank.
    const failsafe = window.setTimeout(() => {
      setShown(true);
      observer.disconnect();
    }, 3000);

    return () => {
      window.clearTimeout(failsafe);
      observer.disconnect();
    };
  }, [shown]);

  return (
    <Tag
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as React.CSSProperties}
      className={`reveal ${shown ? "reveal-in" : ""} ${className}`}
    >
      {children}
    </Tag>
  );
}
