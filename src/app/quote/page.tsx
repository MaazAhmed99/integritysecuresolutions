import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { Field, NameField, Select, TextArea } from "@/components/form-fields";
import { CtaBand } from "@/components/sections/cta-band";
import { services } from "@/lib/services";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request Security Quote",
  description:
    `Request a free, no-obligation security quote from ${site.legalName}. Free site survey, itemised pricing and no minimum contract length.`,
  alternates: { canonical: "/quote" },
};

const serviceOptions = [
  ...services.map((service) => service.title),
  "Other (explain in message)",
];

const promises = [
  { icon: "clock", title: "Reply within one working day", body: "Usually much sooner during office hours." },
  { icon: "eye", title: "Free site survey", body: "We visit, assess the risk and confirm what cover you need." },
  { icon: "clipboard", title: "Itemised quote", body: "Officer numbers, hours and rates — no hidden call-out fees." },
  { icon: "shield", title: "No obligation", body: "A quote is a quote. There is no minimum contract length." },
] as const;

export default function QuotePage() {
  return (
    <>
      <PageHeader
        eyebrow="Free quote"
        title="Request Security Quote"
        description="Tell us about the site, the hours you need covered and what concerns you. We will survey it free of charge and come back with a written, itemised proposal."
        image={img.meeting}
      />

      <section className="section bg-sand-50">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal>
              <EnquiryForm
                kind="quote"
                submitLabel="Submit"
                successTitle="Request received"
                successBody="Thank you — a member of our team will review your requirements and come back to you within one working day. For anything urgent, please call us directly."
              >
                {/* One field per row, in the order most people can answer it:
                    who you are, how to reach you, then the site itself. */}
                <NameField required className="sm:col-span-2" />
                <Field
                  id="company"
                  label="Company Name"
                  autoComplete="organization"
                  className="sm:col-span-2"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  placeholder="you@company.co.uk"
                  className="sm:col-span-2"
                />
                <Field
                  id="phone"
                  label="Phone Number"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="07700 900000"
                  className="sm:col-span-2"
                />
                <Field
                  id="location"
                  label="Location of Site"
                  required
                  placeholder="Town or postcode"
                  hint="Helps us confirm coverage and travel time."
                  className="sm:col-span-2"
                />
                <Select
                  id="service"
                  label="Type of Security Service"
                  required
                  options={serviceOptions}
                  className="sm:col-span-2"
                />
                <TextArea
                  id="message"
                  label="Comment or Message"
                  className="sm:col-span-2"
                  placeholder="Hours to cover, number of entrances, any incidents so far, anything we should know…"
                />
              </EnquiryForm>
            </Reveal>
          </div>

          <aside className="lg:col-span-5 xl:col-span-4">
            <Reveal delay={120} className="lg:sticky lg:top-28">
              <div className="rounded-card border border-ink-900/10 bg-ink-950 p-7 text-white">
                <h2 className="font-display text-lg font-bold">What happens next</h2>
                <ul className="mt-6 space-y-5">
                  {promises.map((promise) => (
                    <li key={promise.title} className="flex gap-3.5">
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/8 text-brand-400">
                        <Icon name={promise.icon} className="size-4.5" />
                      </span>
                      <div>
                        <p className="text-sm font-semibold">{promise.title}</p>
                        <p className="mt-1 text-xs leading-relaxed text-white/55">{promise.body}</p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-7 border-t border-white/10 pt-6">
                  <p className="text-xs text-white/50">Prefer to talk it through?</p>
                  <a
                    href={site.phoneHref}
                    className="mt-2 flex items-center gap-2.5 font-display text-xl font-bold text-brand-400 transition-colors hover:text-brand-400"
                  >
                    <Icon name="phone" className="size-5" />
                    {site.phone}
                  </a>
                  <p className="mt-3 text-xs leading-relaxed text-white/50">
                    Mon–Fri 7am–7pm · Sat–Sun 10am–5pm
                    <br />
                    24/7 emergency response line
                  </p>
                </div>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      <CtaBand
        title="Need cover tonight?"
        body="Break-in, sudden vacancy or a site left exposed? Call us directly — we can often deploy an officer the same day."
      />
    </>
  );
}
