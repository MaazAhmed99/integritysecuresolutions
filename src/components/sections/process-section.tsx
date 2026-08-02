import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/ui";
import { processSteps } from "@/lib/content";

export function ProcessSection() {
  return (
    <section className="section bg-sand-100">
      <div className="container-page">
        <Reveal>
          <SectionHeading
            align="center"
            eyebrow="How it works"
            title="From first call to officers on site"
            description="Four steps, no drawn-out procurement. Most clients go from enquiry to a fully briefed officer on site inside a week."
          />
        </Reveal>

        <ol className="relative mt-16 grid gap-8 lg:grid-cols-4 lg:gap-6">
          {/* Connector rail, desktop only — keeps the four cards visually tied
              together instead of floating as four unrelated boxes. */}
          <span
            aria-hidden
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-transparent via-ink-900/15 to-transparent lg:block"
          />

          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={index * 100} as="li" className="relative">
              <div className="flex flex-col items-start">
                <span className="relative z-10 flex size-12 items-center justify-center rounded-full border border-ink-900/10 bg-white text-brand-600 shadow-lift">
                  <Icon name={step.icon} className="size-5" />
                </span>
                <span className="mt-6 font-display text-xs font-bold uppercase tracking-[0.2em] text-brand-600">
                  Step {step.number}
                </span>
                <h3 className="mt-2 text-lg font-bold text-ink-900">{step.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-ink-900/65">{step.description}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
