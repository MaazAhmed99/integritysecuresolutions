import { img, type ImageRef } from "@/lib/images";
import { site } from "@/lib/site";
import type { IconName } from "@/components/icons";

export type Sector = {
  slug: string;
  title: string;
  description: string;
  image: ImageRef;
  risks: string[];
};

export const sectors: Sector[] = [
  {
    slug: "construction",
    title: "Construction & Development",
    description:
      "Plant, copper cable and fuel make an active site a standing target. We combine gate control with out-of-hours patrols and dog units to cover the whole programme.",
    image: img.construction,
    risks: ["Plant & tool theft", "Metal stripping", "Unauthorised access", "Vandalism"],
  },
  {
    slug: "corporate",
    title: "Corporate & Offices",
    description:
      "A calm, well-presented front of house that screens visitors properly and still makes your clients feel welcome the moment they walk in.",
    image: img.corporate,
    risks: ["Tailgating", "Visitor screening", "Out-of-hours access", "Lone worker cover"],
  },
  {
    slug: "retail",
    title: "Retail & Leisure",
    description:
      "Uniformed and store detective cover that reduces shrinkage without turning your shop floor into an unpleasant place to shop.",
    image: img.retail,
    risks: ["Shrinkage", "Anti-social behaviour", "Staff safety", "Closing-time cover"],
  },
  {
    slug: "logistics",
    title: "Warehousing & Logistics",
    description:
      "Yard control, driver check-in and load verification for distribution centres where a single missing pallet is a very expensive mistake.",
    image: img.warehouse,
    risks: ["Load theft", "Yard control", "Driver check-in", "Perimeter breaches"],
  },
  {
    slug: "events",
    title: "Events & Venues",
    description:
      "Planned, licensed crowd management from the first survey through to the post-event debrief, scaled to the size of your audience.",
    image: img.eventSecurity,
    risks: ["Crowd density", "Ingress & egress", "Bag searching", "Licensing compliance"],
  },
  {
    slug: "residential",
    title: "Residential & Estates",
    description:
      "Concierge cover, gatehouse manning and estate patrols that keep managed developments secure and residents reassured.",
    image: img.cityNight,
    risks: ["Estate patrols", "Concierge cover", "Parking control", "Resident reassurance"],
  },
];

/* -------------------------------------------------------------------------- */

export type Step = { number: string; title: string; description: string; icon: IconName };

export const processSteps: Step[] = [
  {
    number: "01",
    title: "Free site survey",
    description:
      "We walk your site with you, identify where the real vulnerabilities are and agree what good coverage actually looks like.",
    icon: "eye",
  },
  {
    number: "02",
    title: "Written proposal",
    description:
      "A clear, itemised quote with officer numbers, shift patterns and costs. No hidden call-out fees bolted on afterwards.",
    icon: "clipboard",
  },
  {
    number: "03",
    title: "Officer deployment",
    description:
      "Vetted, SIA licensed officers are matched to the site and briefed on your assignment instructions before their first shift.",
    icon: "badge",
  },
  {
    number: "04",
    title: "Ongoing reporting",
    description:
      "Time-stamped patrol logs, incident reports and a named account manager who picks up the phone when you call.",
    icon: "shield",
  },
];

/* -------------------------------------------------------------------------- */

export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  sector: string;
};

/**
 * TODO(client): PLACEHOLDER TESTIMONIALS.
 * These quotes were carried over from the reference site and are ANOTHER
 * COMPANY'S client feedback, with the company name swapped. They must be
 * replaced with genuine Integrity Secure Solutions testimonials — or the
 * section removed — before this site goes live.
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      `${site.legalName} provided excellent static security guards for our construction site. Their team was professional, reliable and ensured the safety of our property at all times.`,
    name: "E Muller",
    role: "Construction Site Manager",
    sector: "Construction",
  },
  {
    quote:
      `We hired ${site.legalName} for event security and the team did an outstanding job. The guards were professional, organised and managed the crowd safely.`,
    name: "T Clark",
    role: "Event Organiser",
    sector: "Events",
  },
  {
    quote:
      "Their dog handling security team helped secure our warehouse premises. We were very impressed with their professionalism and quick response.",
    name: "J Milestone",
    role: "Warehouse Manager",
    sector: "Logistics",
  },
];

/* -------------------------------------------------------------------------- */

export type Faq = { question: string; answer: string };

export const faqs: Faq[] = [
  {
    question: "Are your security officers SIA licensed?",
    answer:
      "Yes. Every officer we deploy holds a valid front line SIA licence for the role they are working, and we screen employment history to BS 7858 standards. Licence numbers can be provided for any officer assigned to your site.",
  },
  {
    question: "How quickly can you put officers on site?",
    answer:
      `For most requirements in ${site.serviceArea.city} and ${site.serviceArea.region} we can cover a site within 24 hours, and often the same day for urgent situations such as a break-in or a sudden vacancy. Call our team and we will tell you honestly what we can do.`,
  },
  {
    question: "Which areas do you cover?",
    answer:
      `We are based in ${site.serviceArea.city} and cover ${site.serviceArea.region} as standard, with national coverage available for multi-site contracts and events. Tell us where the site is and we will confirm before quoting.`,
  },
  {
    question: "Do you provide short-term and one-off cover?",
    answer:
      "We do. Alongside long-term contracts we cover single events, holiday and sickness cover, temporary site shutdowns and emergency boarding-up situations. There is no minimum contract length.",
  },
  {
    question: "What does a security quote cost?",
    answer:
      "Site surveys and quotations are free with no obligation. Pricing depends on hours, officer numbers, site risk and whether specialist units such as dog handlers are required — we itemise all of it so you can see exactly what you are paying for.",
  },
  {
    question: "Are you insured?",
    answer:
      `Yes. ${site.legalName} carries full public and employers' liability insurance, and we are happy to share our certificate of insurance as part of any tender or procurement process.`,
  },
];
