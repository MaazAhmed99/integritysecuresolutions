import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { buttonClass } from "@/components/ui";
import { Reveal } from "@/components/reveal";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

const trustPoints = [
  { icon: "badge", label: "SIA licensed officers" },
  { icon: "clock", label: "24/7 rapid response" },
  { icon: "shield", label: "Fully insured & vetted" },
] as const;

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src={img.heroGuards.src}
        alt={img.heroGuards.alt}
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-45"
      />
      {/* Two-stop scrim: keeps the left-hand copy legible on every crop. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-950 via-ink-950/85 to-ink-950/40"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-950 via-transparent to-ink-950/60"
      />
      <div aria-hidden className="grid-texture absolute inset-0 opacity-60" />

      <div className="container-page relative py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 rounded-full border border-gold-500/30 bg-gold-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-gold-400">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-gold-400 opacity-70" />
                <span className="relative inline-flex size-2 rounded-full bg-gold-500" />
              </span>
              Operating across London &amp; the UK
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.05] text-white sm:text-5xl lg:text-6xl">
              Professional security services
              <span className="block text-gold-500">you can actually trust.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Trained, licensed officers, specialist dog handling units and 24/7
              monitoring — protecting businesses, construction sites, events and
              residential property with a service you never have to chase.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/quote" className={buttonClass({ size: "lg" })}>
                Get a free security quote
                <Icon name="arrow" className="size-4" />
              </Link>
              <a
                href={site.phoneHref}
                className={buttonClass({ variant: "ghostLight", size: "lg" })}
              >
                <Icon name="phone" className="size-4 text-gold-500" />
                {site.phone}
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-4 border-t border-white/10 pt-8">
              {trustPoints.map((point) => (
                <li key={point.label} className="flex items-center gap-2.5 text-sm text-white/75">
                  <Icon name={point.icon} className="size-4.5 text-gold-500" />
                  {point.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
