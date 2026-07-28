import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { Field, Select, TextArea } from "@/components/form-fields";
import { CtaBand } from "@/components/sections/cta-band";
import { services } from "@/lib/services";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Security Quote",
  description:
    `Request a free, no-obligation security quote from ${site.legalName}. Free site survey, itemised pricing and no minimum contract length.`,
  alternates: { canonical: "/quote" },
};

const serviceOptions = [...services.map((service) => service.title), "Not sure — please advise"];

const siteTypes = [
  "Construction site",
  "Office / corporate",
  "Retail unit",
  "Warehouse / logistics",
  "Event or venue",
  "Residential / estate",
  "Vacant property",
  "Other",
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
        title="Request a security quote"
        description="Tell us about the site, the hours you need covered and what concerns you. We will survey it free of charge and come back with a written, itemised proposal."
        image={img.meeting}
      />

      <section className="section bg-sand-50">
        <div className="container-page grid gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7 xl:col-span-8">
            <Reveal>
              <EnquiryForm
                kind="quote"
                submitLabel="Send my request"
                successTitle="Request received"
                successBody="Thank you — a member of our team will review your requirements and come back to you within one working day. For anything urgent, please call us directly."
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
                <Field
                  id="phone"
                  label="Phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="07700 900000"
                />
                <Select id="service" label="Service required" required options={serviceOptions} />
                <Select id="siteType" label="Type of site" options={siteTypes} />
                <Field
                  id="location"
                  label="Site location"
                  placeholder="Town or postcode"
                  hint="Helps us confirm coverage and travel time."
                />
                <Field id="startDate" label="Required from" type="date" />
                <TextArea
                  id="message"
                  label="Tell us about the site"
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
                      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-white/8 text-gold-500">
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
                    className="mt-2 flex items-center gap-2.5 font-display text-xl font-bold text-gold-500 transition-colors hover:text-gold-400"
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
