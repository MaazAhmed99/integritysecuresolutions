import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading, buttonClass } from "@/components/ui";
import { sectors } from "@/lib/content";

export function SectorsSection({ limit }: { limit?: number }) {
  const list = limit ? sectors.slice(0, limit) : sectors;

  return (
    <section className="section bg-sand-50">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="flex-1">
            <SectionHeading
              eyebrow="Sectors"
              title="Different sites, different risks"
              description="A distribution yard and a corporate reception need very different security. We plan around what each site is actually exposed to."
            />
          </Reveal>
          {limit ? (
            <Reveal delay={120}>
              <Link href="/sectors" className={buttonClass({ variant: "outline" })}>
                All sectors
                <Icon name="arrow" className="size-4" />
              </Link>
            </Reveal>
          ) : null}
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((sector, index) => (
            <Reveal key={sector.slug} delay={index * 70} className="h-full">
              <article className="group relative flex h-full flex-col overflow-hidden rounded-card bg-ink-900">
                <Image
                  src={sector.image.src}
                  alt={sector.image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover opacity-45 transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/70 to-ink-950/20"
                />

                <div className="relative flex min-h-72 flex-col justify-end p-6">
                  <h3 className="text-lg font-bold text-white">{sector.title}</h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/65">
                    {sector.description}
                  </p>
                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {sector.risks.map((risk) => (
                      <li
                        key={risk}
                        className="rounded-full border border-white/15 px-2.5 py-1 text-[0.68rem] font-medium text-white/70"
                      >
                        {risk}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
