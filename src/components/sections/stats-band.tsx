import { Counter } from "@/components/counter";
import { Reveal } from "@/components/reveal";
import { site } from "@/lib/site";

export function StatsBand() {
  return (
    <section className="relative overflow-hidden bg-ink-900">
      <div aria-hidden className="grid-texture absolute inset-0" />
      <div
        aria-hidden
        className="absolute -right-24 -top-24 size-72 rounded-full bg-gold-500/10 blur-3xl"
      />

      <div className="container-page relative py-16 lg:py-20">
        <dl className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4">
          {site.stats.map((stat, index) => (
            <Reveal
              key={stat.label}
              delay={index * 90}
              className="border-l-2 border-gold-500/40 pl-5"
            >
              <dt className="text-sm font-medium text-white/55">{stat.label}</dt>
              <dd className="mt-2 font-display text-4xl font-extrabold text-white lg:text-5xl">
                <Counter value={stat.value} suffix={stat.suffix} />
              </dd>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  );
}
