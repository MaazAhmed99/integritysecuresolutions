import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import { Icon, type IconName } from "@/components/icons";

/* -------------------------------------------------------------------------- */
/* Buttons                                                                     */
/* -------------------------------------------------------------------------- */

const buttonBase =
  "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98] disabled:pointer-events-none disabled:opacity-60";

const buttonVariants = {
  /* Red needs white text — the previous gold accent took dark text. */
  primary:
    "bg-brand-500 text-white hover:bg-brand-600 shadow-[0_8px_24px_-10px_rgba(228,0,43,0.85)] hover:shadow-[0_12px_30px_-8px_rgba(228,0,43,0.7)]",
  dark: "bg-ink-900 text-white hover:bg-ink-700",
  outline:
    "border border-ink-900/20 bg-transparent text-ink-900 hover:border-ink-900/50 hover:bg-ink-900/5",
  ghostLight:
    "border border-white/25 bg-white/5 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/10",
  /* For use on the red CTA band, where a filled button would disappear. */
  onAccent: "border border-white/45 text-white hover:bg-white/15",
} as const;

const buttonSizes = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-sm",
  lg: "px-7 py-3.5 text-base",
} as const;

type ButtonStyleProps = {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  className?: string;
};

export function buttonClass({
  variant = "primary",
  size = "md",
  className = "",
}: ButtonStyleProps = {}) {
  return `${buttonBase} ${buttonVariants[variant]} ${buttonSizes[size]} ${className}`;
}

export function ButtonLink({
  variant,
  size,
  className,
  children,
  ...rest
}: ButtonStyleProps & ComponentProps<typeof Link>) {
  return (
    <Link className={buttonClass({ variant, size, className })} {...rest}>
      {children}
    </Link>
  );
}

/* -------------------------------------------------------------------------- */
/* Section heading                                                             */
/* -------------------------------------------------------------------------- */

export function Eyebrow({
  children,
  tone = "dark",
}: {
  children: ReactNode;
  tone?: "dark" | "light";
}) {
  return (
    <span
      className={`inline-flex items-center gap-2.5 text-xs font-semibold uppercase tracking-[0.18em] ${
        tone === "light" ? "text-brand-400" : "text-brand-600"
      }`}
    >
      <span aria-hidden className="h-px w-7 bg-current opacity-70" />
      {children}
    </span>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  tone = "dark",
  align = "left",
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  description?: ReactNode;
  tone?: "dark" | "light";
  align?: "left" | "center";
  className?: string;
}) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === "center" ? "mx-auto max-w-2xl items-center text-center" : "max-w-2xl"
      } ${className}`}
    >
      {eyebrow ? <Eyebrow tone={tone}>{eyebrow}</Eyebrow> : null}
      <h2
        className={`text-3xl leading-[1.12] font-bold sm:text-4xl lg:text-[2.75rem] ${
          tone === "light" ? "text-white" : "text-ink-900"
        }`}
      >
        {title}
      </h2>
      {description ? (
        <p className={`text-base leading-relaxed ${tone === "light" ? "text-white/70" : "text-ink-900/65"}`}>
          {description}
        </p>
      ) : null}
    </div>
  );
}

/* -------------------------------------------------------------------------- */
/* Misc                                                                        */
/* -------------------------------------------------------------------------- */

export function Pill({ children, icon }: { children: ReactNode; icon?: IconName }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-ink-900/10 bg-white px-3 py-1.5 text-xs font-medium text-ink-900/75">
      {icon ? <Icon name={icon} className="size-3.5 text-brand-600" /> : null}
      {children}
    </span>
  );
}

export function CheckItem({ children }: { children: ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full bg-brand-500/15 text-brand-600">
        <Icon name="check" className="size-3" strokeWidth={2.6} />
      </span>
      <span className="text-sm leading-relaxed text-ink-900/75">{children}</span>
    </li>
  );
}
