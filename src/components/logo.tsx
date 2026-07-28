import Link from "next/link";
import { site } from "@/lib/site";

/**
 * Brand mark: a shield (security) enclosing an upright I-beam monogram —
 * the "I" of Integrity, drawn as a column to read as something structural
 * and unbroken. Legible down to 24px, which a detailed crest would not be.
 */
export function LogoMark({ className = "size-10" }: { className?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden>
      <path
        d="M20 2.5 5.5 8v13.3C5.5 29.6 11.6 36.4 20 38.5c8.4-2.1 14.5-8.9 14.5-17.2V8L20 2.5Z"
        className="fill-gold-500 transition-colors duration-300 group-hover:fill-gold-400"
      />
      <path
        d="M20 8.4 11 11.8v9.1c0 5.2 3.7 9.8 9 11.2 5.3-1.4 9-6 9-11.2v-9.1L20 8.4Z"
        className="fill-ink-900"
      />
      <g className="fill-gold-500">
        <rect x="15.3" y="13.9" width="9.4" height="2.7" rx="0.6" />
        <rect x="18.4" y="16.6" width="3.2" height="7.9" />
        <rect x="15.3" y="24.5" width="9.4" height="2.7" rx="0.6" />
      </g>
    </svg>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const primary = tone === "light" ? "text-white" : "text-ink-900";
  const secondary = tone === "light" ? "text-white/55" : "text-ink-900/55";

  return (
    <Link
      href="/"
      className="group flex items-center gap-3"
      aria-label={`${site.legalName} — home`}
    >
      <span className="relative flex size-10 shrink-0 items-center justify-center">
        <LogoMark />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-display text-lg font-bold tracking-tight whitespace-nowrap ${primary}`}
        >
          Integrity<span className="text-gold-500">.</span>
        </span>
        <span
          className={`mt-1 text-[0.55rem] font-semibold uppercase tracking-[0.14em] whitespace-nowrap ${secondary}`}
        >
          Secure Solutions
        </span>
      </span>
    </Link>
  );
}
