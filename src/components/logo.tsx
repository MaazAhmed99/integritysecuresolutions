import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Chevron tile. The three rising chevrons read as escalating cover — white,
 * brand red, then a muted grey. Colours come from the theme variables in
 * globals.css so a re-skin still flows through here.
 */
export function LogoMark({ className = "size-11" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 96" aria-hidden className={className}>
      <rect width="96" height="96" rx="24" fill="var(--color-ink-900)" />
      <g fill="none" strokeWidth={11} strokeLinecap="round" strokeLinejoin="round">
        <path d="M25 39 48 22 71 39" stroke="#ffffff" />
        <path
          d="M25 59 48 42 71 59"
          stroke="var(--color-brand-500)"
          className="transition-[stroke] duration-300 group-hover:stroke-[var(--color-brand-400)]"
        />
        <path d="M25 79 48 62 71 79" stroke="#8a94a6" />
      </g>
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const primary = tone === "light" ? "text-white" : "text-ink-900";
  const secondary = tone === "light" ? "text-white/55" : "text-ink-900/50";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${site.legalName} — home`}
    >
      <LogoMark className="size-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-xl font-extrabold uppercase tracking-[-0.01em] ${primary}`}
        >
          Integrity
        </span>
        <span
          className={`mt-1.5 text-[0.5rem] font-semibold uppercase tracking-[0.22em] whitespace-nowrap ${secondary}`}
        >
          Secure Solutions
        </span>
      </span>
    </Link>
  );
}
