import Link from "next/link";
import { site } from "@/lib/site";

/**
 * ISS monogram. The outer I and S carry the neutral colour; the middle S is
 * knocked out of a red angular block so the centre letter reads as a distinct
 * mark rather than three identical letterforms.
 */
export function LogoMark({
  tone = "dark",
  className = "",
}: {
  tone?: "light" | "dark";
  className?: string;
}) {
  const letter = tone === "light" ? "text-white" : "text-ink-900";

  return (
    <span
      aria-hidden
      className={`flex items-center font-display text-[1.75rem] font-extrabold leading-none tracking-[-0.04em] ${className}`}
    >
      <span className={letter}>I</span>
      <span className="relative mx-[3px] inline-flex -skew-x-12 items-center justify-center bg-brand-500 px-[5px] py-[3px] transition-colors duration-300 group-hover:bg-brand-600">
        <span className="inline-block skew-x-12 text-white">S</span>
      </span>
      <span className={letter}>S</span>
    </span>
  );
}

export function Logo({ tone = "light" }: { tone?: "light" | "dark" }) {
  const secondary = tone === "light" ? "text-white/60" : "text-ink-900/55";

  return (
    <Link
      href="/"
      className="group flex flex-col gap-1"
      aria-label={`${site.legalName} — home`}
    >
      <LogoMark tone={tone} />
      <span
        className={`text-[0.5rem] font-semibold uppercase tracking-[0.18em] whitespace-nowrap ${secondary}`}
      >
        Integrity Secure Solutions
      </span>
    </Link>
  );
}
