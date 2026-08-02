import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { CheckItem, Pill, SectionHeading, buttonClass } from "@/components/ui";
import { CtaBand } from "@/components/sections/cta-band";
import { getService, services } from "@/lib/services";
import { getPillar, pillars } from "@/lib/pillars";
import { PillarDetail } from "@/components/pillar-detail";
import { site } from "@/lib/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...pillars.map((pillar) => ({ slug: pillar.slug })),
    ...services.map((service) => ({ slug: service.slug })),
  ];
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;

  const pillar = getPillar(slug);
  if (pillar) {
    return {
      title: pillar.title,
      description: pillar.summary,
      alternates: { canonical: `/services/${pillar.slug}` },
      openGraph: {
        title: `${pillar.title} | ${site.name}`,
        description: pillar.summary,
        images: [{ url: pillar.image.src }],
      },
    };
  }

  const service = getService(slug);
  if (!service) return {};

  return {
    title: service.title,
    description: service.summary,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | ${site.name}`,
      description: service.summary,
      images: [{ url: service.image.src }],
    },
  };
}

export default async function ServiceDetailPage({ params }: Params) {
  const { slug } = await params;

  // Pillars and individual services share this route so every /services/*
  // URL stays flat and stable.
  const pillar = getPillar(slug);
  if (pillar) {
    return (
      <>
        <PageHeader
          eyebrow="Our services"
          title={pillar.title}
          description={pillar.summary}
          image={pillar.image}
          breadcrumbs={[{ href: "/services", label: "Services" }]}
        />
        <PillarDetail pillar={pillar} />
        <CtaBand
          title={`Talk to us about ${pillar.title.toLowerCase()}`}
          body="Free site survey, itemised quote and no minimum contract length. Call us or send the details and we will come straight back to you."
        />
      </>
    );
  }

  const service = getService(slug);
  if (!service) notFound();

  const others = services.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader
        eyebrow="Service"
        title={service.title}
        description={service.summary}
        image={service.image}
        breadcrumbs={[{ href: "/services", label: "Services" }]}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <Reveal>
              <div className="relative aspect-16/10 overflow-hidden rounded-card">
                <Image
                  src={service.image.src}
                  alt={service.image.alt}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
              </div>
            </Reveal>

            <Reveal delay={90}>
              <div className="mt-10 flex flex-wrap gap-2">
                {service.bestFor.map((item) => (
                  <Pill key={item} icon="check">
                    {item}
                  </Pill>
                ))}
              </div>

              <p className="mt-7 text-lg leading-relaxed text-ink-900/75">{service.intro}</p>
            </Reveal>

            <Reveal delay={140}>
              <h2 className="mt-12 text-2xl font-bold text-ink-900">What&rsquo;s included</h2>
              <ul className="mt-6 grid gap-4 sm:grid-cols-2">
                {service.includes.map((item) => (
                  <CheckItem key={item}>{item}</CheckItem>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Sticky enquiry rail — the conversion path stays on screen while
              the visitor reads the detail. */}
          <aside className="lg:col-span-5">
            <Reveal delay={120} className="lg:sticky lg:top-28">
              <div className="rounded-card border border-ink-900/10 bg-sand-50 p-7 shadow-lift">
                <span className="flex size-12 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                  <Icon name={service.icon} className="size-6" />
                </span>
                <h2 className="mt-5 text-xl font-bold text-ink-900">
                  Need {service.title.toLowerCase()}?
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-ink-900/65">
                  Tell us about the site and we will survey it free of charge, then
                  come back with officer numbers, shift patterns and an itemised price.
                </p>

                <div className="mt-6 grid gap-2.5">
                  <Link href="/quote" className={buttonClass({ size: "lg" })}>
                    Get a free quote
                    <Icon name="arrow" className="size-4" />
                  </Link>
                  <a href={site.phoneHref} className={buttonClass({ variant: "outline", size: "lg" })}>
                    <Icon name="phone" className="size-4 text-gold-600" />
                    {site.phone}
                  </a>
                </div>

                <dl className="mt-7 space-y-3 border-t border-ink-900/10 pt-6 text-sm">
                  <div className="flex items-start gap-3">
                    <Icon name="clock" className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    <div>
                      <dt className="font-semibold text-ink-900">Response time</dt>
                      <dd className="text-ink-900/60">Most sites covered within 24 hours</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="badge" className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    <div>
                      <dt className="font-semibold text-ink-900">Officers</dt>
                      <dd className="text-ink-900/60">SIA licensed, vetted and insured</dd>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-gold-600" />
                    <div>
                      <dt className="font-semibold text-ink-900">Coverage</dt>
                      <dd className="text-ink-900/60">
                        {site.serviceArea.short} & nationwide
                      </dd>
                    </div>
                  </div>
                </dl>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <section className="section bg-sand-100">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Related"
              title="Other services that pair well with this"
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((item, index) => (
              <Reveal key={item.slug} delay={index * 80}>
                <Link
                  href={`/services/${item.slug}`}
                  className="group flex h-full flex-col rounded-card border border-ink-900/10 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift"
                >
                  <span className="flex size-11 items-center justify-center rounded-xl bg-gold-500/12 text-gold-600">
                    <Icon name={item.icon} className="size-5" />
                  </span>
                  <h3 className="mt-5 text-base font-bold text-ink-900">{item.title}</h3>
                  <p className="mt-2.5 flex-1 text-sm leading-relaxed text-ink-900/65">
                    {item.summary}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-gold-600">
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

      <CtaBand
        title={`Book ${service.title.toLowerCase()} for your site`}
        body="Free site survey, itemised quote and no minimum contract length. Call us or send the details and we will come straight back to you."
      />
    </>
  );
}
