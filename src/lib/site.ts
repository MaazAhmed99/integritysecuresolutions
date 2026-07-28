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
    "Integrity Secure Solutions provides SIA licensed static guarding, dog handling units, mobile patrols, CCTV monitoring, event security and key holding across London and the UK.",

  /* TODO(client): PLACEHOLDER — replace with the real domain before launch,
     or set NEXT_PUBLIC_SITE_URL in .env.local. Drives canonicals and sitemap. */
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://integritysecuresolutions.co.uk",

  /* TODO(client): PLACEHOLDER — the phone, email and address below were carried
     over from the reference site and belong to a DIFFERENT company.
     They must be replaced with Integrity Secure Solutions' own details. */
  phone: "0330 127 3799",
  phoneHref: "tel:+443301273799",
  email: "info@integritysecuresolutions.co.uk",

  address: {
    line1: "Unit 2, Bradstowe House",
    line2: "Junction Road",
    city: "Harrow",
    region: "London",
    postcode: "HA1 1NL",
    country: "GB",
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

export const formattedAddress = [
  site.address.line1,
  site.address.line2,
  site.address.city,
  site.address.region,
  site.address.postcode,
].join(", ");

export const nav = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/sectors", label: "Sectors" },
  { href: "/about", label: "About" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
] as const;
