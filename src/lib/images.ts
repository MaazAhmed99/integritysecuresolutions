/**
 * Curated Unsplash photography.
 * All IDs point at free-licence photos on images.unsplash.com (no Unsplash+ assets),
 * so they can be used commercially without attribution.
 * Swap these for the client's own photography when it becomes available.
 */

const base = "https://images.unsplash.com/";

/** Unsplash serves resized/cropped derivatives — next/image handles the rest. */
export function unsplash(id: string, width = 1600) {
  return `${base}${id}?auto=format&fit=crop&q=80&w=${width}`;
}

export const img = {
  /**
   * NOTE: stock "security" photography is a minefield. Free results are
   * overwhelmingly police or military, usually non-UK — previous picks here
   * showed soldiers at a checkpoint, Indonesian POLRI officers, and an officer
   * in a peaked cap with foreign insignia. Nothing on Unsplash reliably reads
   * as UK SIA-licensed private security.
   *
   * The hero and about images therefore use setting rather than uniform:
   * a UK-plausible commercial scene carries the message without staking the
   * brand on a stock officer whose kit is wrong. Replace all of these with
   * photographs of the client's own officers as soon as they are available.
   */
  heroGuards: {
    src: unsplash("photo-1778400513759-bc919bb69a6d", 2000),
    alt: "A lone figure walking past modern commercial buildings at dusk",
  },
  aboutOfficer: {
    src: unsplash("photo-1592830408148-3737e9526ab9", 1400),
    alt: "A commercial building lit at night",
  },
  staticGuarding: {
    src: unsplash("photo-1765510435009-99685cf5e412", 1400),
    alt: "Uniformed security officer patrolling a venue interior",
  },
  dogHandling: {
    src: unsplash("photo-1628579606036-d2990d15a5ab", 1400),
    alt: "Alert German Shepherd security dog working on grass",
  },
  cctv: {
    src: unsplash("photo-1557597774-9d273605dfa9", 1400),
    alt: "Bank of CCTV cameras covering a building perimeter",
  },
  eventSecurity: {
    src: unsplash("photo-1540039155733-5bb30b53aa14", 1400),
    alt: "Crowd facing a lit stage at a large public event",
  },
  keyHolding: {
    src: unsplash("photo-1679089391720-dab2bca0ffc5", 1400),
    alt: "Quiet city street at night under street lighting",
  },
  mobilePatrol: {
    src: unsplash("photo-1582472978953-12929ab18f3e", 1400),
    alt: "Patrol officer beside a marked vehicle during a night shift",
  },
  construction: {
    src: unsplash("photo-1641023388239-39dd1171a64f", 1400),
    alt: "Construction site with tower crane lit at night",
  },
  warehouse: {
    src: unsplash("photo-1644079446600-219068676743", 1400),
    alt: "Racking aisles inside a large distribution warehouse",
  },
  retail: {
    src: unsplash("photo-1595879171931-4ca27febc4bf", 1400),
    alt: "Shoppers walking through a busy retail centre",
  },
  corporate: {
    src: unsplash("photo-1576242112365-49e5d83e1b31", 1400),
    alt: "Glass facade of a modern corporate office building",
  },
  meeting: {
    src: unsplash("photo-1521791136064-7986c2920216", 1400),
    alt: "Two people shaking hands to confirm a security contract",
  },
  cyber: {
    src: unsplash("photo-1558494949-ef010cbdcc31", 1400),
    alt: "Racks of networking equipment inside a secure data centre",
  },
  endpoint: {
    src: unsplash("photo-1614064641938-3bbee52942c7", 1400),
    alt: "A red padlock resting on a laptop keyboard",
  },
  phishing: {
    src: unsplash("photo-1614064548237-096f735f344f", 1400),
    alt: "A padlock on a laptop with light trails behind it",
  },
  backup: {
    src: unsplash("photo-1779896412104-0f589e7a4e94", 1400),
    alt: "A hand inserting a USB drive into a laptop",
  },
  network: {
    src: unsplash("photo-1680992046626-418f7e910589", 1400),
    alt: "A rack of network equipment in a dimly lit server room",
  },
  cityNight: {
    src: unsplash("photo-1519608487953-e999c86e7455", 2000),
    alt: "Pedestrian walkway lit at night in a city centre",
  },
} as const;

export type ImageRef = { src: string; alt: string };
