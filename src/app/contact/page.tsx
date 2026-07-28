import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { Field, TextArea } from "@/components/form-fields";
import { SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/sections/cta-band";
import { img } from "@/lib/images";
import { formattedAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.legalName} on ${site.phone} or email ${site.email}. Offices in ${site.address.city}, ${site.address.region}, covering the UK.`,
  alternates: { canonical: "/contact" },
};

const mapQuery = encodeURIComponent(formattedAddress);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Talk to our security team"
        description="Call, email or send us a message. Whatever the enquiry, you will speak to somebody who can actually make a decision."
        image={img.cityNight}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Get in touch"
                title="Details you can use right now"
                description="Our lines are staffed through the working week, with a 24/7 response line for live incidents."
              />
            </Reveal>

            <div className="mt-10 space-y-4">
              <Reveal delay={80}>
                <a
                  href={site.phoneHref}
                  className="group flex items-start gap-4 rounded-card border border-ink-900/10 bg-sand-50 p-5 transition-all hover:border-gold-500/50 hover:shadow-lift"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                    <Icon name="phone" className="size-5" />
                  </span>
                  <span>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/45">
                      Phone
                    </span>
                    <span className="mt-1 block font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-gold-600">
                      {site.phone}
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={140}>
                <a
                  href={`mailto:${site.email}`}
                  className="group flex items-start gap-4 rounded-card border border-ink-900/10 bg-sand-50 p-5 transition-all hover:border-gold-500/50 hover:shadow-lift"
                >
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                    <Icon name="mail" className="size-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/45">
                      Email
                    </span>
                    <span className="mt-1 block break-all font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-gold-600">
                      {site.email}
                    </span>
                  </span>
                </a>
              </Reveal>

              <Reveal delay={200}>
                <div className="flex items-start gap-4 rounded-card border border-ink-900/10 bg-sand-50 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                    <Icon name="pin" className="size-5" />
                  </span>
                  <div>
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/45">
                      Office
                    </span>
                    <address className="mt-1 not-italic text-sm leading-relaxed text-ink-900/75">
                      {site.address.line1}
                      <br />
                      {site.address.line2}
                      <br />
                      {site.address.city}, {site.address.region} {site.address.postcode}
                    </address>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={260}>
                <div className="flex items-start gap-4 rounded-card border border-ink-900/10 bg-sand-50 p-5">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                    <Icon name="clock" className="size-5" />
                  </span>
                  <div className="flex-1">
                    <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/45">
                      Opening hours
                    </span>
                    <dl className="mt-2 space-y-1.5 text-sm">
                      {site.hours.map((entry) => (
                        <div key={entry.days} className="flex justify-between gap-4">
                          <dt className="text-ink-900/60">{entry.days}</dt>
                          <dd className="font-medium text-ink-900">{entry.time}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <EnquiryForm
                kind="contact"
                submitLabel="Send message"
                successTitle="Message sent"
                successBody="Thanks for getting in touch. We aim to reply within one working day — if it is urgent, please call us on the number below."
              >
                <Field id="name" label="Your name" required autoComplete="name" placeholder="Jane Smith" />
                <Field id="company" label="Company" autoComplete="organization" placeholder="Optional" />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.co.uk"
                />
                <Field id="phone" label="Phone" type="tel" autoComplete="tel" placeholder="Optional" />
                <TextArea
                  id="message"
                  label="How can we help?"
                  required
                  className="sm:col-span-2"
                  placeholder="Tell us what you need and where the site is…"
                />
              </EnquiryForm>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-sand-100 py-16">
        <div className="container-page">
          <Reveal>
            <div className="overflow-hidden rounded-card border border-ink-900/10 shadow-lift">
              <iframe
                title={`Map showing the ${site.legalName} office in ${site.address.city}`}
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-96 w-full border-0"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
