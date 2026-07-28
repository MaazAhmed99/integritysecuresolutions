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
  heroGuards: {
    src: unsplash("photo-1772375969898-fd359c74cb9b", 2000),
    alt: "Security officers on duty at a controlled site entrance",
  },
  aboutOfficer: {
    src: unsplash("photo-1759366035053-4b172d9b299d", 1400),
    alt: "Uniformed security officer in a high-visibility vest",
  },
  staticGuarding: {
    src: unsplash("photo-1770529933902-d2f7851be31c", 1400),
    alt: "Two static security officers stationed in a commercial reception area",
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
  cityNight: {
    src: unsplash("photo-1519608487953-e999c86e7455", 2000),
    alt: "Pedestrian walkway lit at night in a city centre",
  },
} as const;

export type ImageRef = { src: string; alt: string };
