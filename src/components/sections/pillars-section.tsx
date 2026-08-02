import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { pillars } from "@/lib/pillars";
import { getService } from "@/lib/services";

export function PillarsSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="What we do"
            title="Our services"
            description="Three service lines, delivered by one accountable team. Most clients start with security and add the others as their site grows."
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {pillars.map((pillar, index) => {
            const children = (pillar.childServices ?? [])
              .map((slug) => getService(slug))
              .filter((service) => service !== undefined);

            return (
              <Reveal key={pillar.slug} delay={index * 90} className="h-full">
                <article className="group flex h-full flex-col overflow-hidden rounded-card border border-ink-900/10 bg-white shadow-lift transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift-lg">
                  <div className="relative aspect-16/10 overflow-hidden">
                    <Image
                      src={pillar.image.src}
                      alt={pillar.image.alt}
                      fill
                      sizes="(min-width: 1024px) 33vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div
                      aria-hidden
                      className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-ink-950/20 to-transparent"
                    />
                    <span
                      aria-hidden
                      className="absolute bottom-0 left-0 h-1 w-16 bg-brand-500 transition-all duration-500 group-hover:w-full"
                    />
                    <span className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-xl bg-brand-500 text-white shadow-lift">
                      <Icon name={pillar.icon} className="size-6" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="text-xl font-bold text-ink-900">
                      <Link
                        href={`/services/${pillar.slug}`}
                        className="transition-colors hover:text-brand-600"
                      >
                        {pillar.title}
                      </Link>
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-ink-900/65">
                      {pillar.summary}
                    </p>

                    {/* The services this line actually contains — each one links
                        through to its own page. */}
                    <ul className="mt-5 flex-1 space-y-1 border-t border-ink-900/8 pt-5">
                      {children.map((service) => (
                        <li key={service.slug}>
                          <Link
                            href={`/services/${service.slug}`}
                            className="flex items-start gap-2.5 rounded-md py-1.5 text-sm text-ink-900/70 transition-colors hover:text-brand-600"
                          >
                            <Icon
                              name="check"
                              className="mt-0.5 size-3.5 shrink-0 text-brand-500"
                              strokeWidth={3}
                            />
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href={`/services/${pillar.slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand-600 transition-colors hover:text-brand-500"
                    >
                      Find out more
                      <Icon
                        name="arrow"
                        className="size-4 transition-transform duration-300 group-hover:translate-x-1"
                      />
                    </Link>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
