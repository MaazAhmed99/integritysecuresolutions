import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { testimonials } from "@/lib/content";
import { site } from "@/lib/site";

export function TestimonialsSection() {
  return (
    <section className="section bg-white">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="Client feedback"
            title="What our clients say"
            description={`${site.legalName} is trusted by businesses, construction companies and event organisers across the UK.`}
          />
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <Reveal key={item.name} delay={index * 100} className="h-full">
              <figure className="flex h-full flex-col rounded-card border border-ink-900/8 bg-sand-50 p-7 transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift">
                <Icon name="quote" className="size-8 text-gold-500/35" />

                <blockquote className="mt-5 flex-1 text-base leading-relaxed text-ink-900/80">
                  {item.quote}
                </blockquote>

                <div
                  className="mt-6 flex gap-0.5 text-gold-500"
                  role="img"
                  aria-label="Rated 5 out of 5"
                >
                  {Array.from({ length: 5 }, (_, i) => (
                    <Icon key={i} name="star" className="size-4" />
                  ))}
                </div>

                <figcaption className="mt-5 flex items-center gap-3.5 border-t border-ink-900/8 pt-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-full bg-ink-900 font-display text-sm font-bold text-gold-500">
                    {item.name
                      .split(" ")
                      .map((part) => part[0])
                      .join("")}
                  </span>
                  <span>
                    <span className="block text-sm font-bold text-ink-900">{item.name}</span>
                    <span className="block text-xs text-ink-900/55">{item.role}</span>
                  </span>
                  <span className="ml-auto rounded-full bg-ink-900/5 px-2.5 py-1 text-[0.65rem] font-semibold uppercase tracking-wider text-ink-900/50">
                    {item.sector}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
