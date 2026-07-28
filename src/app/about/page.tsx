import type { Metadata } from "next";
import Image from "next/image";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { CheckItem, SectionHeading } from "@/components/ui";
import { StatsBand } from "@/components/sections/stats-band";
import { ProcessSection } from "@/components/sections/process-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaBand } from "@/components/sections/cta-band";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description:
    `${site.legalName} is a ${site.address.city}-based security company providing SIA licensed guarding, dog handling, mobile patrols and CCTV monitoring across London and the UK.`,
  alternates: { canonical: "/about" },
};

const values = [
  {
    icon: "badge",
    title: "People before headcount",
    body: "We keep the same officers on your site wherever we can. Familiarity is what turns a guard into somebody who notices when something is wrong.",
  },
  {
    icon: "clipboard",
    title: "Everything on the record",
    body: "Patrol logs, incident reports and attendance times are all time-stamped and shared with you. If we say we were there, we can show you.",
  },
  {
    icon: "eye",
    title: "Honest about the risk",
    body: "If a site does not need four officers, we will tell you. Overselling cover is the fastest way to lose a client's trust.",
  },
] as const;

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About us"
        title="Professional security solutions you can trust"
        description={`${site.legalName} provides reliable security services for businesses, construction sites, events and residential properties across the UK.`}
        image={img.corporate}
      />

      <section className="section bg-white">
        <div className="container-page grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <div className="relative aspect-4/3 overflow-hidden rounded-card">
              <Image
                src={img.aboutOfficer.src}
                alt={img.aboutOfficer.alt}
                fill
                sizes="(min-width: 1024px) 46vw, 100vw"
                className="object-cover"
              />
            </div>
          </Reveal>

          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Who we are"
                title="A security company built on turning up"
                description={`${site.legalName} was formed to do the unglamorous parts of security properly — accurate rotas, briefed officers, patrol logs that exist, and a phone that gets answered.`}
              />
            </Reveal>

            <Reveal delay={120}>
              <div className="mt-7 space-y-4 text-base leading-relaxed text-ink-900/70">
                <p>
                  We operate from {site.address.city} and cover Greater London and
                  the Home Counties as standard, with national coverage for
                  multi-site contracts and events. Our officers work across
                  construction sites, warehouses, retail units, offices, venues and
                  managed residential estates.
                </p>
                <p>
                  Alongside manned guarding we run specialist dog handling units,
                  randomised mobile patrols, remote CCTV monitoring and a key
                  holding and alarm response service — so as your site changes,
                  your security can change with it without bringing in a second
                  supplier.
                </p>
              </div>
            </Reveal>

            <Reveal delay={180}>
              <ul className="mt-9 grid gap-3 border-t border-ink-900/8 pt-8 sm:grid-cols-2">
                <CheckItem>SIA licensed front line officers</CheckItem>
                <CheckItem>Employment screening to BS 7858</CheckItem>
                <CheckItem>Public and employers&rsquo; liability cover</CheckItem>
                <CheckItem>Named account manager on every contract</CheckItem>
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <StatsBand />

      <section className="section bg-sand-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="How we work"
              title="Three things we refuse to compromise on"
            />
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {values.map((value, index) => (
              <Reveal key={value.title} delay={index * 90} className="h-full">
                <div className="flex h-full flex-col rounded-card border border-ink-900/8 bg-white p-7 shadow-lift">
                  <span className="flex size-12 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                    <Icon name={value.icon} className="size-5.5" />
                  </span>
                  <h3 className="mt-6 text-lg font-bold text-ink-900">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink-900/65">{value.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
