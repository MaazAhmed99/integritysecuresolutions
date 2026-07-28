import { FaqAccordion } from "@/components/faq-accordion";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading, buttonClass } from "@/components/ui";
import { faqs } from "@/lib/content";
import { site } from "@/lib/site";

export function FaqSection() {
  return (
    <section className="section bg-sand-100">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <Reveal>
            <SectionHeading
              eyebrow="Questions"
              title="Straight answers, before you commit"
              description="If your question is not here, call us — you will speak to somebody who actually runs the operation."
            />
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-9 rounded-card border border-ink-900/10 bg-white p-6">
              <p className="text-sm font-semibold text-ink-900">Still need to ask something?</p>
              <p className="mt-1.5 text-sm text-ink-900/60">
                Lines open Mon–Fri 7am–7pm, with 24/7 emergency response.
              </p>
              <a href={site.phoneHref} className={buttonClass({ className: "mt-5 w-full" })}>
                <Icon name="phone" className="size-4" />
                {site.phone}
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100} className="lg:col-span-7">
          <FaqAccordion items={faqs} />
        </Reveal>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((faq) => ({
              "@type": "Question",
              name: faq.question,
              acceptedAnswer: { "@type": "Answer", text: faq.answer },
            })),
          }),
        }}
      />
    </section>
  );
}
