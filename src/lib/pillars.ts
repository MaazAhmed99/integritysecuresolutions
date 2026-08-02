import { img, type ImageRef } from "@/lib/images";
import type { IconName } from "@/components/icons";

/**
 * The three top-level service lines shown on the homepage.
 * `Security solutions` is the parent of the six detailed services in
 * `services.ts`; the other two are new lines with their own pages.
 */
export type Pillar = {
  slug: string;
  title: string;
  summary: string;
  intro: string;
  icon: IconName;
  image: ImageRef;
  includes: string[];
  /** Slugs from services.ts that sit under this pillar, if any. */
  childServices?: string[];
};

export const pillars: Pillar[] = [
  {
    slug: "security-solutions",
    title: "Security Solutions",
    summary:
      "Licensed officers, dog handling units, mobile patrols and event teams — the people who keep your site secure.",
    intro:
      "Our core business. Vetted, SIA licensed officers deployed against a written assignment instruction, supported by specialist dog units, randomised mobile patrols and a control room that answers at 3am as readily as 3pm.",
    icon: "shield",
    image: img.staticGuarding,
    includes: [
      "Static guarding and front of house",
      "Specialist dog handling units",
      "Mobile patrols and alarm response",
      "Event security and crowd management",
      "Key holding and lock/unlock services",
      "Construction and vacant site security",
    ],
    childServices: [
      "dog-handling-security",
      "static-security-guards",
      "retail-security",
      "event-security",
      "mobile-patrol-security",
    ],
  },
  {
    slug: "facilities-management",
    title: "Facilities Management",
    summary:
      "Hard and soft FM delivered alongside your security, so one accountable team keeps the whole building running.",
    intro:
      "Security officers are already on your site around the clock — it rarely makes sense to run a separate supplier for everything else. We combine hard and soft facilities management with the guarding contract, which removes the finger-pointing when something goes wrong at 2am.",
    icon: "clipboard",
    image: img.corporate,
    includes: [
      "Commercial cleaning and washroom services",
      "Planned and reactive maintenance",
      "Grounds maintenance and external areas",
      "Reception, concierge and post room",
      "Waste management and recycling",
      "Single point of contact across all services",
    ],
    childServices: ["cctv-monitoring", "key-holding", "alarm-response"],
  },
  {
    slug: "security-technologies",
    title: "Security Technologies",
    summary:
      "CCTV, access control and monitored alarms — designed, installed, maintained and watched around the clock.",
    intro:
      "Technology extends what a team can cover, but only when somebody is actually watching it. We design and install systems around the risk your site carries, then monitor them from our control room so an activation gets verified and acted on rather than simply recorded.",
    icon: "camera",
    image: img.cctv,
    includes: [
      "CCTV design, installation and maintenance",
      "Remote monitoring with live audio challenge",
      "Redeployable CCTV towers for open sites",
      "Access control and door entry systems",
      "Intruder alarms with verified response",
      "Cyber security essentials for smaller businesses",
    ],
    childServices: [
      "cyber-security",
      "endpoint-protection",
      "phishing-awareness-training",
      "backup-disaster-recovery",
      "network-firewall-monitoring",
    ],
  },
];

export function getPillar(slug: string) {
  return pillars.find((pillar) => pillar.slug === slug);
}
