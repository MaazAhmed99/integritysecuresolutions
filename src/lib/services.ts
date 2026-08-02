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
    slug: "key-holding",
    title: "Key Holding",
    summary:
      "Secure, anonymously coded key storage with lock and unlock cover, so your staff never carry the responsibility.",
    intro:
      "Holding your keys is a responsibility we take seriously. Keys are stored in a coded safe with no address attached to them, so a stolen key is worthless on its own. Every movement in and out of the safe is logged, and we handle routine opening and closing at agreed times.",
    icon: "key",
    image: img.keyHolding,
    includes: [
      "Anonymously coded key storage in a secure safe",
      "Full audit trail of every key movement",
      "Lock and unlock services at agreed times",
      "Holiday, sickness and shutdown cover",
      "Supervised contractor access out of hours",
      "Secure transfer and return on contract end",
    ],
    bestFor: ["Retail chains", "Schools", "Offices", "Letting agents"],
  },
  {
    slug: "alarm-response",
    title: "Alarm Response",
    summary:
      "A trained officer attends your activations day or night, searches the premises and makes the site safe.",
    intro:
      "When an alarm activates it should be our officer who attends, not one of your team at 3am. We search the premises inside and out, establish whether the activation was genuine, reset the system and make the site safe — then send you a written report before the next working day.",
    icon: "badge",
    image: img.cityNight,
    includes: [
      "Attendance at activations 24 hours a day",
      "Full internal and external search of the premises",
      "Alarm reset and system make-safe",
      "Boarding-up and glazing contractor liaison",
      "Police and fire service liaison where required",
      "Written attendance report after every call-out",
    ],
    bestFor: ["Retail chains", "Warehouses", "Offices", "Vacant property"],
  },
  {
    slug: "retail-security",
    title: "Retail Security",
    summary:
      "Uniformed officers and store detectives that cut shrinkage without making your shop floor feel hostile.",
    intro:
      "Retail security is a balancing act — you need losses under control without customers feeling watched. Our retail officers are trained in conflict de-escalation as much as detention, because a badly handled challenge on the shop floor costs more in reputation than the stock it recovers.",
    icon: "eye",
    image: img.retail,
    includes: [
      "Uniformed store officers and plain-clothes detectives",
      "Tagging, till and fitting room loss prevention",
      "Conflict management and de-escalation training",
      "Closing-time and cash-in-transit escort cover",
      "Incident reporting and evidence packs for prosecution",
      "Shopping centre and retail park patrols",
    ],
    bestFor: ["High street", "Retail parks", "Supermarkets", "Shopping centres"],
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
  {
    slug: "cyber-security",
    title: "Cyber Security Essentials",
    summary:
      "Foundational cyber protection for small and mid-sized businesses — the basics, done properly.",
    intro:
      "Physical security is only half the perimeter. Our essentials package covers the controls that stop the overwhelming majority of attacks on smaller businesses: patching, backups, multi-factor authentication and staff who can spot a phishing email. It is deliberately foundational — if you need penetration testing or a full security operations centre, we will say so and point you to a specialist.",
    icon: "lock",
    image: img.cyber,
    includes: [
      "Security posture review and written action plan",
      "Multi-factor authentication rollout",
      "Patch, backup and recovery routines",
      "Phishing awareness training for staff",
      "Endpoint protection setup and monitoring",
      "Guidance towards Cyber Essentials certification",
    ],
    bestFor: ["SMEs", "Professional services", "Retail chains", "Charities"],
  },
  {
    slug: "endpoint-protection",
    title: "Endpoint Protection",
    summary:
      "Managed antivirus and device protection across every laptop, desktop and phone your team uses.",
    intro:
      "Most breaches start on somebody's laptop. We deploy and manage endpoint protection across your devices, keep it patched, and watch the alerts — so a detection on a Friday night is dealt with rather than sitting unread until Monday.",
    icon: "shield",
    image: img.endpoint,
    includes: [
      "Managed antivirus and anti-malware rollout",
      "Automated patching for operating systems and apps",
      "Device encryption and screen-lock policies",
      "Mobile device management for phones and tablets",
      "Alert monitoring with escalation to your contact",
      "Monthly device health and compliance reporting",
    ],
    bestFor: ["SMEs", "Remote teams", "Professional services", "Charities"],
  },
  {
    slug: "phishing-awareness-training",
    title: "Phishing & Awareness Training",
    summary:
      "Short, practical staff training plus simulated phishing, so your people stop the attacks that get through.",
    intro:
      "Technology filters most phishing, but the ones that land are the convincing ones. We run short training sessions in plain English, then send simulated phishing emails to see what actually sticks — and retrain the people who need it, without naming and shaming.",
    icon: "mail",
    image: img.phishing,
    includes: [
      "Plain-English training sessions for all staff",
      "Simulated phishing campaigns with reporting",
      "Targeted retraining for repeat click-throughs",
      "Password and multi-factor authentication guidance",
      "Guidance on invoice and CEO fraud",
      "Induction pack for new starters",
    ],
    bestFor: ["SMEs", "Finance teams", "Schools", "Charities"],
  },
  {
    slug: "backup-disaster-recovery",
    title: "Backup & Disaster Recovery",
    summary:
      "Tested, off-site backups and a written recovery plan — so ransomware is an inconvenience, not the end.",
    intro:
      "A backup you have never restored from is not a backup. We set up automated off-site backups, then actually test a restore on a schedule and document how long a full recovery takes, so you know your real exposure rather than a hopeful estimate.",
    icon: "clipboard",
    image: img.backup,
    includes: [
      "Automated encrypted off-site backups",
      "Scheduled restore testing with written evidence",
      "Documented recovery time and recovery point targets",
      "Ransomware-resistant immutable copies",
      "Business continuity plan in plain English",
      "Annual recovery rehearsal",
    ],
    bestFor: ["SMEs", "Professional services", "Retail chains", "Manufacturing"],
  },
  {
    slug: "network-firewall-monitoring",
    title: "Network & Firewall Monitoring",
    summary:
      "Firewall configuration, network hardening and monitoring that flags unusual traffic before it becomes an incident.",
    intro:
      "Your firewall was probably configured once, when the line was installed. We review the rules, close what should never have been open, segment guest and operational traffic, then monitor for the patterns that indicate something is wrong.",
    icon: "eye",
    image: img.network,
    includes: [
      "Firewall rule review and hardening",
      "Guest, staff and operational network separation",
      "Secure remote access and VPN configuration",
      "Traffic monitoring with anomaly alerting",
      "Wi-Fi security and access point audit",
      "Quarterly configuration review",
    ],
    bestFor: ["Multi-site businesses", "Offices", "Retail chains", "Warehouses"],
  },
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
