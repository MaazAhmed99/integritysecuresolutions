import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { img } from "@/lib/images";
import { formattedAddress, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.legalName} collects, uses and stores personal data submitted through this website.`,
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

/**
 * TEMPLATE ONLY — this is a starting point, not legal advice.
 * The client should have this reviewed before the site goes live, and add
 * their ICO registration number and data retention periods.
 */
const sections = [
  {
    heading: "Who we are",
    body: `${site.legalName}, ${formattedAddress}, is the data controller for personal data submitted through this website. You can contact us at ${site.email} or on ${site.phone}.`,
  },
  {
    heading: "What we collect",
    body: "When you use our quote, contact or careers forms we collect the details you enter: your name, company, email address, telephone number, site location and the content of your message or application. We do not collect payment details through this website.",
  },
  {
    heading: "Why we use it",
    body: "We use your details solely to respond to your enquiry, prepare a quotation, or assess a job application. We do not sell your data, and we do not add you to marketing lists without your explicit consent.",
  },
  {
    heading: "How long we keep it",
    body: "Enquiry records are retained for as long as necessary to deal with your request and to meet our legal and insurance obligations. Unsuccessful job applications are held for a limited period in case a suitable role arises, after which they are deleted.",
  },
  {
    heading: "Who we share it with",
    body: "Your details are shared only with the staff who need them to answer your enquiry, and with the email service provider that delivers form submissions to us. We do not transfer your data outside the UK or EEA without appropriate safeguards.",
  },
  {
    heading: "Your rights",
    body: "You have the right to request a copy of the personal data we hold about you, to have it corrected or erased, and to object to its processing. To exercise any of these rights, email us and we will respond within one month. You may also complain to the Information Commissioner's Office at ico.org.uk.",
  },
  {
    heading: "Cookies",
    body: "This website does not set advertising or tracking cookies. Any cookies used are strictly necessary for the site to function.",
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader eyebrow="Legal" title="Privacy policy" image={img.corporate} />

      <section className="section bg-white">
        <div className="container-page max-w-3xl">
          <p className="rounded-card border border-gold-500/40 bg-gold-500/8 px-5 py-4 text-sm leading-relaxed text-ink-900/75">
            <strong className="font-semibold text-ink-900">Note for the site owner:</strong> this
            page is a template. Please have it reviewed and add your ICO registration
            number and specific retention periods before launch.
          </p>

          <div className="mt-10 space-y-10">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2 className="text-xl font-bold text-ink-900">{section.heading}</h2>
                <p className="mt-3 text-base leading-relaxed text-ink-900/70">{section.body}</p>
              </div>
            ))}
          </div>

          <p className="mt-12 border-t border-ink-900/10 pt-6 text-sm text-ink-900/50">
            Last updated {new Date().toLocaleDateString("en-GB", { month: "long", year: "numeric" })}.
          </p>
        </div>
      </section>
    </>
  );
}
