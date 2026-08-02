import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { EnquiryForm } from "@/components/enquiry-form";
import { CheckboxGroup, Field, Select } from "@/components/form-fields";
import { SectionHeading } from "@/components/ui";
import { addressLines, site } from "@/lib/site";

const titles = ["Mr", "Mrs", "Miss", "Ms", "Mx", "Dr"];

/**
 * TODO(client): confirm this list. It was supplied as-is and includes lines
 * (Cash Solutions, Risk Consulting) that are not currently offered elsewhere
 * on the site — see CONTENT-REVIEW.md.
 */
const serviceInterests = [
  "Cash Solutions",
  "Facilities Management",
  "Integrated Security",
  "Security Officers",
  "Remote Monitoring",
  "Risk Consulting",
  "Security Systems",
];

export function ContactSection() {
  return (
    <section id="contact" className="section bg-sand-50">
      <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
        <div className="lg:col-span-4">
          <Reveal>
            <SectionHeading
              eyebrow="Get in touch"
              title="Contact us"
              description="Tell us what you need and where the site is. We will come back to you within one working day."
            />
          </Reveal>

          <div className="mt-9 space-y-4">
            <Reveal delay={80}>
              <a
                href={site.phoneHref}
                className="group flex items-start gap-4 rounded-card border border-ink-900/10 bg-white p-5 transition-all hover:border-brand-500/50 hover:shadow-lift"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon name="phone" className="size-5" />
                </span>
                <span>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/45">
                    Phone
                  </span>
                  <span className="mt-1 block font-display text-lg font-bold text-ink-900 transition-colors group-hover:text-brand-600">
                    {site.phone}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={140}>
              <a
                href={`mailto:${site.email}`}
                className="group flex items-start gap-4 rounded-card border border-ink-900/10 bg-white p-5 transition-all hover:border-brand-500/50 hover:shadow-lift"
              >
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon name="mail" className="size-5" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/45">
                    Email
                  </span>
                  <span className="mt-1 block break-all text-sm font-semibold text-ink-900 transition-colors group-hover:text-brand-600">
                    {site.email}
                  </span>
                </span>
              </a>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex items-start gap-4 rounded-card border border-ink-900/10 bg-white p-5">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-brand-500 text-white">
                  <Icon name="pin" className="size-5" />
                </span>
                <div>
                  <span className="block text-xs font-semibold uppercase tracking-[0.14em] text-ink-900/45">
                    Office
                  </span>
                  <address className="mt-1 not-italic text-sm leading-relaxed text-ink-900/75">
                    {addressLines.map((line) => (
                      <span key={line} className="block">
                        {line}
                      </span>
                    ))}
                  </address>
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="lg:col-span-8">
          <Reveal delay={100}>
            <EnquiryForm
              kind="interest"
              submitLabel="Submit enquiry"
              successTitle="Thank you — enquiry received"
              successBody="A member of our team will review your requirements and be in touch within one working day. For anything urgent, please call us directly."
              consent={`By submitting, you agree to ${site.legalName} collecting your data for marketing purposes. You can unsubscribe at any time using the email stated on the communication sent.`}
            >
              <Select
                id="title"
                label="Title"
                required
                options={titles}
                className="sm:col-span-2 sm:max-w-40"
              />
              <Field id="firstName" label="First name" required autoComplete="given-name" />
              <Field id="lastName" label="Last name" required autoComplete="family-name" />
              <Field
                id="city"
                label="City or region"
                required
                autoComplete="address-level2"
                placeholder="e.g. Birmingham"
              />
              <Field id="company" label="Company" required autoComplete="organization" />
              <Field id="email" label="Email" type="email" required autoComplete="email" />
              <Field id="phone" label="Phone" type="tel" required autoComplete="tel" />
              <CheckboxGroup
                name="services"
                legend="Services interested in"
                required
                options={serviceInterests}
                className="sm:col-span-2"
              />
            </EnquiryForm>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
