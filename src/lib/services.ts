import { img, type ImageRef } from "@/lib/images";
import type { IconName } from "@/components/icons";

export type Service = {
  slug: string;
  title: string;
  /** Used in cards and meta descriptions. */
  summary: string;
  /** Opening paragraph on the detail page. */
  intro: string;
  icon: IconName;
  image: ImageRef;
  /** Bullet list of what is included in the service. */
  includes: string[];
  /** Short "who this is for" chips. */
  bestFor: string[];
};

export const services: Service[] = [
  {
    slug: "static-security-guards",
    title: "Static Security Guards",
    summary:
      "Professional static officers protecting offices, retail stores, construction sites and commercial properties.",
    intro:
      "A visible, professional officer on site is still the single most effective deterrent available. Our static guards are SIA licensed, uniformed and briefed against a site-specific assignment instruction before their first shift — so they know your access rules, escalation contacts and reporting requirements from day one.",
    icon: "shield",
    image: img.staticGuarding,
    includes: [
      "SIA licensed, vetted and uniformed officers",
      "Site-specific assignment instructions written before deployment",
      "Access control, visitor screening and pass issuing",
      "Reception and front-of-house cover where required",
      "Daily occurrence book and digital shift reporting",
      "Supervisor spot-checks and 24/7 control room backup",
    ],
    bestFor: ["Offices", "Retail", "Construction", "Industrial estates"],
  },
  {
    slug: "dog-handling-security",
    title: "Dog Handling Security",
    summary:
      "Highly trained security dog units providing enhanced protection and rapid response for high-risk sites and large premises.",
    intro:
      "Where a single officer cannot realistically cover a large or high-risk perimeter, a general purpose security dog unit can. Our handlers work with NASDU-standard trained dogs, and every unit carries current licensing, insurance and welfare documentation that we make available to you on request.",
    icon: "paw",
    image: img.dogHandling,
    includes: [
      "NASDU-standard trained general purpose security dogs",
      "Licensed handlers with current dog-team certification",
      "Perimeter sweeps and building clearance searches",
      "High-deterrence presence for high-risk or remote sites",
      "Full welfare, vet and insurance records on file",
      "Rapid escalation to police where an incident requires it",
    ],
    bestFor: ["Large sites", "Scrap & recycling", "Depots", "Vacant property"],
  },
  {
    slug: "cctv-monitoring",
    title: "CCTV Monitoring",
    summary:
      "Advanced CCTV monitoring and surveillance solutions that keep eyes on your property 24 hours a day.",
    intro:
      "Cameras only protect a site if somebody is watching them. We provide remote monitoring of your existing CCTV, or a temporary tower system where there is no infrastructure at all, with trained operators who verify alarms and act on them rather than simply recording the aftermath.",
    icon: "camera",
    image: img.cctv,
    includes: [
      "Remote monitoring of your existing camera system",
      "Redeployable CCTV towers for sites without infrastructure",
      "Live audio challenge to warn off intruders",
      "Verified alarm escalation to keyholders and police",
      "Time-stamped incident footage exported on request",
      "Monthly activity reporting with recommendations",
    ],
    bestFor: ["Vacant sites", "Compounds", "Car parks", "Storage yards"],
  },
  {
    slug: "event-security",
    title: "Event Security",
    summary:
      "Experienced event teams delivering crowd control, safety and smooth management of events and venues.",
    intro:
      "From a 200-guest private function to a multi-day public event, the plan matters as much as the people. We survey the venue, agree capacities and ingress and egress routes with you, then deliver a briefed team of SIA licensed stewards and door supervisors on the day.",
    icon: "users",
    image: img.eventSecurity,
    includes: [
      "Pre-event site survey and written security plan",
      "SIA licensed door supervisors and stewards",
      "Crowd management, queue control and capacity counting",
      "Bag searching, ID checking and accreditation points",
      "Liaison with venue management, medics and licensing",
      "Post-event incident report and debrief",
    ],
    bestFor: ["Festivals", "Corporate events", "Venues", "Private functions"],
  },
  {
    slug: "key-holding-alarm-response",
    title: "Key Holding & Alarm Response",
    summary:
      "Rapid alarm response and secure key holding so your staff never have to attend an alarm at 3am.",
    intro:
      "Holding your keys is a responsibility we take seriously. Keys are stored in a coded safe with no address attached, and when an alarm activates it is our officer who attends, searches the premises, resets the system and reports back — not one of your team.",
    icon: "key",
    image: img.keyHolding,
    includes: [
      "Anonymously coded key storage in a secure safe",
      "Attendance at alarm activations day or night",
      "Full internal and external search of the premises",
      "Alarm reset and make-safe, including boarding-up liaison",
      "Lock and unlock services at agreed times",
      "Written attendance report after every call-out",
    ],
    bestFor: ["Retail chains", "Schools", "Offices", "Letting agents"],
  },
  {
    slug: "mobile-patrol-security",
    title: "Mobile Patrol Security",
    summary:
      "Regular mobile patrols that monitor properties, deter crime and keep your premises secure between shifts.",
    intro:
      "Mobile patrols give you a security presence at a fraction of the cost of a permanent guard. Patrol times are randomised so they cannot be predicted by anyone watching the site, and each visit is logged electronically with a time stamp you can audit.",
    icon: "route",
    image: img.mobilePatrol,
    includes: [
      "Randomised patrol timings that cannot be predicted",
      "Marked, liveried patrol vehicles for visible deterrence",
      "NFC checkpoint scanning with time-stamped proof of visit",
      "Perimeter, lighting and lock checks on every visit",
      "Photographic evidence of any damage or hazard found",
      "Online portal access to your patrol reports",
    ],
    bestFor: ["Business parks", "Multi-site estates", "Schools", "Care homes"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
