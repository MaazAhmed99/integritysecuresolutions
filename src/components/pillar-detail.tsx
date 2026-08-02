import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { CheckItem, SectionHeading, buttonClass } from "@/components/ui";
import { getService } from "@/lib/services";
import type { Pillar } from "@/lib/pillars";
import { site } from "@/lib/site";

export function PillarDetail({ pillar }: { pillar: Pillar }) {
  const children = (pillar.childServices ?? [])
    .map((slug) => getService(slug))
    .filter((service) => service !== undefined);

  return (
    <>
      <section className="section bg-white">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-16/10 overflow-hidden rounded-card">
                <Image
                  src={pillar.image.src}
                  alt={pillar.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={90}>
              <p className="mt-9 text-lg leading-relaxed text-ink-900/75">{pillar.intro}</p>
            </Reveal>

            <Reveal delay={140}>
              <h2 className="mt-12 text-2xl font-bold text-ink-900">What this covers</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {pillar.includes.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </Reveal>
          </div>

          <aside className="lg:col-span-5">
            <Reveal delay={120} className="lg:sticky lg:top-28">
              <div className="rounded-card border border-ink-900/10 bg-sand-50 p-7 shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon name={pillar.icon} className="size-6" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-ink-900">
                  Talk to us about {pillar.title.toLowerCase()}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-900/65">
                  We will survey the site free of charge and come back with a
                  written, itemised proposal — no obligation and no minimum
                  contract length.
                </p>

                <div className="mt-6 grid gap-2.5">
                  <Link href="/quote" className={buttonClass({ size: "lg" })}>
                    Get a free quote
                    <Icon name="arrow" className="size-4" />
                  </Link>
                  <a
                    href={site.phoneHref}
                    className={buttonClass({ variant: "outline", size: "lg" })}
                  >
                    <Icon name="phone" className="size-4 text-brand-600" />
                    {site.phone}
                  </a>
                </div>

                <dl className="mt-7 space-y-3 border-t border-ink-900/10 pt-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    <div>
                      <dt className="font-semibold text-ink-900">Response time</dt>
                      <dd className="text-ink-900/60">Most sites covered within 24 hours</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brand-600" />
                    <div>
                      <dt className="font-semibold text-ink-900">Coverage</dt>
                      <dd className="text-ink-900/60">
                        {site.serviceArea.short} &amp; nationwide
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {children.length ? (
        <section className="section bg-sand-100">
          <div className="container-page">
            <Reveal>
              <SectionHeading
                eyebrow="In this service line"
                title={`${pillar.title} in detail`}
                description="Each of these can be taken on its own or combined into a single contract."
              />
            </Reveal>

            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {children.map((service, index) => (
                <Reveal key={service.slug} delay={index * 70}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="group flex h-full flex-col rounded-card border border-ink-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lift"
                  >
                    <span className="flex size-11 items-center justify-center rounded-xl bg-brand-500/10 text-brand-600">
                      <Icon name={service.icon} className="size-5" />
                    </span>
                    <h3 className="mt-5 text-base font-bold text-ink-900">{service.title}</h3>
                    <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-900/65">
                      {service.summary}
                    </p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-brand-600">
                      Read more
                      <Icon
                        name="arrow"
                        className="size-4 transition-transform group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}
