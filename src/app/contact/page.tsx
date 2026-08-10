import type { Metadata } from "next";
import type { ReactNode } from "react";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon, type IconName } from "@/components/icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { Field, TextArea } from "@/components/form-fields";
import { SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/sections/cta-band";
import { img } from "@/lib/images";
import { addressLines, formattedAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${site.legalName} on ${site.phone} or email ${site.email}. Offices in ${site.address.city}, ${site.address.region}, covering the UK.`,
  alternates: { canonical: "/contact" },
};

const mapQuery = encodeURIComponent(formattedAddress);

/** One tile in the four-up details row above the form. */
function InfoCard({
  icon,
  title,
  delay,
  children,
}: {
  icon: IconName;
  title: string;
  delay: number;
  children: ReactNode;
}) {
  return (
    <Reveal delay={delay}>
      <div className="h-full rounded-card border border-ink-900/10 bg-white p-6 text-center shadow-lift transition-all hover:-translate-y-1 hover:border-brand-500/40">
        <span className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-ink-900 text-brand-500">
          <Icon name={icon} className="size-6" />
        </span>
        <h3 className="mt-5 text-lg font-bold text-ink-900">{title}</h3>
        <div className="mt-2.5 text-sm leading-relaxed text-ink-900/65">{children}</div>
      </div>
    </Reveal>
  );
}

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Need professional security?"
        title={`Contact ${site.legalName}`}
        description={`Get reliable security services today. Our experienced officers protect businesses, construction sites, events and private properties across ${site.serviceArea.city} and ${site.serviceArea.region} — tell us what you need and we will come back with a free, no-obligation quote.`}
        image={img.cityNight}
      />

      {/* Office strip — names the city before the detail tiles, so visitors
          outside our patch can rule us in or out immediately. */}
      <section className="relative isolate overflow-hidden bg-ink-900">
        <div aria-hidden className="grid-texture absolute inset-0 opacity-40" />
        <div className="container-page relative py-8">
          <Reveal>
            <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-center sm:gap-4 sm:text-left">
              <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-white/8 text-brand-400">
                <Icon name="pin" className="size-5" />
              </span>
              <p className="text-white/70">
                <strong className="block font-display text-lg font-bold text-white sm:inline sm:pr-3">
                  {site.address.city}
                </strong>
                {formattedAddress}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Four ways to reach us, before the form — most enquiries are quicker
          by phone, and the tiles make that obvious. */}
      <section className="section bg-sand-100">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <InfoCard icon="pin" title="Physical Address" delay={0}>
            <address className="not-italic">
              {addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </InfoCard>

          <InfoCard icon="clock" title="Work Hours" delay={80}>
            <dl className="space-y-1">
              {site.hours.map((entry) => (
                <div key={entry.days}>
                  <dt className="inline text-ink-900/60">{entry.days}: </dt>
                  <dd className="inline font-medium text-ink-900">{entry.time}</dd>
                </div>
              ))}
            </dl>
          </InfoCard>

          <InfoCard icon="mail" title="Email Address" delay={140}>
            <a
              href={`mailto:${site.email}`}
              className="break-all font-medium text-ink-900 transition-colors hover:text-brand-600"
            >
              {site.email}
            </a>
          </InfoCard>

          <InfoCard icon="phone" title="Phone Numbers" delay={200}>
            <a
              href={site.phoneHref}
              className="font-medium text-ink-900 transition-colors hover:text-brand-600"
            >
              {site.phone}
            </a>
            <span className="mt-1 block text-xs text-ink-900/50">24/7 emergency response</span>
          </InfoCard>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              align="center"
              eyebrow="Contact Us"
              title="Reach out to Us"
              description="Send us a message and we will reply within one working day. For live incidents, call the emergency line instead — it is answered around the clock."
            />
          </Reveal>

          {/* Map left, form right — mirrors the order people work in: check
              where we are, then get in touch. */}
          <div className="mt-14 grid items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal>
              <div className="h-full overflow-hidden rounded-card border border-ink-900/10 shadow-lift">
                <iframe
                  title={`Map showing the ${site.legalName} office in ${site.address.city}`}
                  src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[26rem] w-full border-0"
                />
              </div>
            </Reveal>

            <Reveal delay={100}>
              <EnquiryForm
                kind="contact"
                submitLabel="Send Message"
                successTitle="Message sent"
                successBody="Thanks for getting in touch. We aim to reply within one working day — if it is urgent, please call us on the number below."
              >
                {/* Full-width fields throughout: the form sits in a half-width
                    column, so paired inputs would be too cramped to read. */}
                <Field
                  id="name"
                  label="Full Name"
                  required
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className="sm:col-span-2"
                />
                <Field
                  id="email"
                  label="Email Address"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.co.uk"
                  className="sm:col-span-2"
                />
                <Field
                  id="subject"
                  label="Subject"
                  placeholder="What is your enquiry about?"
                  className="sm:col-span-2"
                />
                <TextArea
                  id="message"
                  label="Comment or Message"
                  required
                  className="sm:col-span-2"
                  placeholder="Tell us what you need and where the site is…"
                />
              </EnquiryForm>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
