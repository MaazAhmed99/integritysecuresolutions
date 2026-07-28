import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CheckItem, SectionHeading, buttonClass } from "@/components/ui";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

const pillars = [
  {
    icon: "badge",
    title: "Trained security officers",
    body: "Vetted, licensed and briefed on your site before their first shift — not sent to fill a slot on a rota.",
  },
  {
    icon: "camera",
    title: "Advanced security solutions",
    body: "CCTV monitoring, redeployable towers, mobile patrol units and verified alarm response working together.",
  },
  {
    icon: "clock",
    title: "Reliable 24/7 protection",
    body: "A control room that is staffed around the clock, with supervisors who spot-check sites through the night.",
  },
] as const;

export function AboutSection() {
  return (
    <section className="section bg-white">
      <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        <Reveal className="relative">
          <div className="relative aspect-4/5 overflow-hidden rounded-card sm:aspect-3/4 lg:aspect-4/5">
            <Image
              src={img.aboutOfficer.src}
              alt={img.aboutOfficer.alt}
              fill
              sizes="(min-width: 1024px) 46vw, 100vw"
              className="object-cover"
            />
          </div>

          {/* Floating stat card — deliberately overlaps the image edge to break
              the rigid two-column grid without misaligning the text column. */}
          <div className="absolute -bottom-6 left-4 right-4 rounded-card border border-ink-900/8 bg-white p-5 shadow-lift-lg sm:-right-6 sm:left-auto sm:bottom-8 sm:w-64">
            <div className="flex items-center gap-3">
              <span className="flex size-11 items-center justify-center rounded-xl bg-gold-500/15 text-gold-600">
                <Icon name="shield" className="size-5.5" />
              </span>
              <div>
                <p className="font-display text-2xl font-bold text-ink-900">24/7</p>
                <p className="text-xs text-ink-900/60">Control room cover</p>
              </div>
            </div>
            <p className="mt-4 border-t border-ink-900/8 pt-4 text-xs leading-relaxed text-ink-900/60">
              Every patrol, alarm response and incident is logged and available to
              you the next morning.
            </p>
          </div>
        </Reveal>

        <div className="lg:pt-4">
          <Reveal>
            <SectionHeading
              eyebrow={`About ${site.shortName}`}
              title="Professional security solutions you can trust"
              description={`${site.legalName} provides reliable security services for businesses, construction sites, events and residential properties across the UK. Our trained officers, dog handling units and surveillance solutions keep clients protected at all times.`}
            />
          </Reveal>

          <div className="mt-10 space-y-7">
            {pillars.map((pillar, index) => (
              <Reveal key={pillar.title} delay={index * 90}>
                <div className="flex gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                    <Icon name={pillar.icon} className="size-5" />
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-ink-900">{pillar.title}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-ink-900/65">{pillar.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={280}>
            <ul className="mt-10 grid gap-3 border-t border-ink-900/8 pt-8 sm:grid-cols-2">
              <CheckItem>Fully insured and vetted teams</CheckItem>
              <CheckItem>Named account manager</CheckItem>
              <CheckItem>Free, no-obligation site survey</CheckItem>
              <CheckItem>No minimum contract length</CheckItem>
            </ul>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/about" className={buttonClass({ variant: "dark" })}>
                More about us
                <Icon name="arrow" className="size-4" />
              </Link>
              <a href={site.phoneHref} className={buttonClass({ variant: "outline" })}>
                <Icon name="phone" className="size-4 text-gold-600" />
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
