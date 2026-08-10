/**
 * Single source of truth for company details.
 * Everything the client is likely to want changed lives here.
 */

export const site = {
  name: "Integrity Secure Solutions",
  legalName: "Integrity Secure Solutions",
  /** Used in the logo lockup and short references in body copy. */
  shortName: "Integrity",
  tagline: "Professional Security Services You Can Trust",
  description:
    "Integrity Secure Solutions provides SIA licensed static guarding, dog handling units, mobile patrols, CCTV monitoring, event security and key holding across Birmingham, the West Midlands and the UK.",

  /* TODO(client): PLACEHOLDER — replace with the real domain before launch,
     or set NEXT_PUBLIC_SITE_URL in .env.local. Drives canonicals and sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://integritysecuresolutions.co.uk",

  /** Displayed in UK national format; the href stays in +44 international form. */
  phone: "+447438082841",
  phoneHref: "tel:+447438082841",

  /* TODO(client): PLACEHOLDER — replace with the real inbox before launch. */
  email: "info@integritysecuresolutions.co.uk",

  address: {
    line1: "797-801 Stratford Road",
    city: "Birmingham",
    region: "West Midlands",
    postcode: "B11 4DA",
    country: "GB",
  },

  /** Coverage wording, referenced anywhere copy names the operating area. */
  serviceArea: {
    city: "Birmingham",
    region: "the West Midlands",
    /** Short form for headings and meta descriptions. */
    short: "Birmingham & the West Midlands",
  },

  hours: [
    { days: "Monday – Friday", time: "7:00am – 7:00pm" },
    { days: "Saturday – Sunday", time: "10:00am – 5:00pm" },
    { days: "Emergency line", time: "24 hours, 7 days" },
  ],

  /**
   * TODO(client): confirm these figures before launch.
   * The live WordPress site renders them as "0+" because the counter script
   * never fires — real numbers should replace these placeholders.
   */
  stats: [
    { value: 250, suffix: "+", label: "Satisfied clients" },
    { value: 12, suffix: "+", label: "Years experience" },
    { value: 900, suffix: "+", label: "Sites secured" },
    { value: 24, suffix: "/7", label: "Coverage" },
  ],
} as const;

/** Address as one line, for the map query and JSON-LD. */
export const formattedAddress = [
  site.address.line1,
  site.address.city,
  site.address.region,
  site.address.postcode,
].join(", ");

/** Address split for multi-line display in the footer and contact page. */
export const addressLines = [
  site.address.line1,
  site.address.city,
  `${site.address.region} ${site.address.postcode}`,
];

export type NavItem = { href: string; label: string; hidden?: boolean };

/**
 * Set `hidden: true` on an item to keep the page live and linked from the
 * footer while dropping it from the header nav and mobile drawer.
 */
export const nav: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/quote", label: "Request Security Quote" },
  { href: "/apply-for-a-job", label: "Apply for a Job" },
  // Sectors stays live and linked from the footer, but is out of the header
  // nav — the row only holds so many items.
  { href: "/sectors", label: "Sectors", hidden: true },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const headerNav = nav.filter((item) => !item.hidden);
