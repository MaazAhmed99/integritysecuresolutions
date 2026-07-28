import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { Icon } from "@/components/icons";
import { EnquiryForm } from "@/components/enquiry-form";
import { Field, Select, TextArea } from "@/components/form-fields";
import { CheckItem, SectionHeading } from "@/components/ui";
import { CtaBand } from "@/components/sections/cta-band";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Apply for a Job",
  description:
    `Apply to join ${site.legalName}. We recruit SIA licensed security officers, dog handlers, mobile patrol drivers and CCTV operators across London and the UK.`,
  alternates: { canonical: "/careers" },
};

const roles = [
  "Static security officer",
  "Door supervisor",
  "Dog handler",
  "Mobile patrol driver",
  "CCTV operator",
  "Supervisor / account manager",
];

const licenceOptions = [
  "Yes — front line SIA licence held",
  "Applied for, awaiting issue",
  "No licence yet",
];

const benefits = [
  { icon: "badge", title: "Consistent sites", body: "We keep officers on the same sites so you build a real routine." },
  { icon: "clock", title: "Paid on time", body: "Weekly rotas issued in advance and pay that lands when it should." },
  { icon: "shield", title: "Full kit provided", body: "Uniform, PPE and site-specific equipment supplied at no cost." },
  { icon: "users", title: "Real progression", body: "Supervisor and account manager routes for officers who want them." },
] as const;

export default function CareersPage() {
  return (
    <>
      <PageHeader
        eyebrow="Careers"
        title={`Work with ${site.legalName}`}
        description="We are always looking for reliable, licensed officers who turn up on time and take the job seriously. If that is you, we would like to hear from you."
        image={img.staticGuarding}
      />

      <section className="section bg-white">
        <div className="container-page grid gap-14 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-5">
            <Reveal>
              <SectionHeading
                eyebrow="Why join us"
                title="A security job that treats you like a professional"
                description="Security work has a reputation for last-minute rotas and unpaid hours. We run ours differently."
              />
            </Reveal>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {benefits.map((benefit, index) => (
                <Reveal key={benefit.title} delay={index * 80}>
                  <div className="rounded-card border border-ink-900/8 bg-sand-50 p-5">
                    <span className="flex size-10 items-center justify-center rounded-xl bg-ink-900 text-gold-500">
                      <Icon name={benefit.icon} className="size-5" />
                    </span>
                    <h3 className="mt-4 text-sm font-bold text-ink-900">{benefit.title}</h3>
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-900/60">{benefit.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={280}>
              <h3 className="mt-10 text-base font-bold text-ink-900">What we ask for</h3>
              <ul className="mt-5 grid gap-3">
                <CheckItem>A valid front line SIA licence, or one in progress</CheckItem>
                <CheckItem>Five-year checkable employment or education history</CheckItem>
                <CheckItem>Right to work in the UK</CheckItem>
                <CheckItem>Reliability — the single thing our clients notice most</CheckItem>
              </ul>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={100}>
              <EnquiryForm
                kind="careers"
                submitLabel="Submit application"
                successTitle="Application received"
                successBody="Thank you for applying. Our recruitment team reviews every application and will be in touch if there is a suitable role. Please have your SIA licence and references ready."
              >
                <Field id="name" label="Full name" required autoComplete="name" placeholder="Jane Smith" />
                <Field
                  id="phone"
                  label="Phone"
                  type="tel"
                  required
                  autoComplete="tel"
                  placeholder="07700 900000"
                />
                <Field
                  id="email"
                  label="Email"
                  type="email"
                  required
                  autoComplete="email"
                  className="sm:col-span-2"
                  placeholder="you@example.com"
                />
                <Select id="role" label="Role you are applying for" required options={roles} />
                <Select id="siaLicence" label="SIA licence status" options={licenceOptions} />
                <Field
                  id="location"
                  label="Areas you can work"
                  className="sm:col-span-2"
                  placeholder="e.g. Harrow, Wembley, Central London"
                />
                <TextArea
                  id="experience"
                  label="Relevant experience"
                  className="sm:col-span-2"
                  placeholder="Where you have worked, the sites you have covered, availability and shift preferences…"
                  hint="Please do not include your SIA licence number or any ID documents in this form — we will request those securely if we invite you to interview."
                />
              </EnquiryForm>
            </Reveal>

            <Reveal delay={180}>
              <p className="mt-6 flex items-start gap-2.5 text-xs leading-relaxed text-ink-900/55">
                <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-gold-600" />
                Prefer to send a CV? Email it to{" "}
                <a
                  href={`mailto:${site.email}?subject=Job application`}
                  className="font-medium text-ink-900 underline underline-offset-4"
                >
                  {site.email}
                </a>
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <CtaBand
        title="Looking for security instead of a job?"
        body="If you landed here by mistake and you need officers on a site, our team can quote you the same day."
      />
    </>
  );
}
