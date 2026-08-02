import { img, type ImageRef } from "@/lib/images";

export type Slide = {
  eyebrow: string;
  title: string;
  highlight: string;
  body: string;
  image: ImageRef;
  cta: { href: string; label: string };
};

/** Hero carousel content. Add or remove entries — the slider adapts. */
export const heroSlides: Slide[] = [
  {
    eyebrow: "Security solutions",
    title: "Professional security services",
    highlight: "you can actually trust.",
    body: "SIA licensed officers, specialist dog handling units and 24/7 response — protecting businesses, construction sites and events across the West Midlands.",
    image: img.heroGuards,
    cta: { href: "/services/security-solutions", label: "Explore security solutions" },
  },
  {
    eyebrow: "Facilities management",
    title: "Buildings that run",
    highlight: "safely and efficiently.",
    body: "Cleaning, maintenance, grounds and front of house delivered alongside your security, so one team is accountable for the whole site.",
    image: img.corporate,
    cta: { href: "/services/facilities-management", label: "Explore facilities management" },
  },
  {
    eyebrow: "Security technologies",
    title: "Technology that sees",
    highlight: "what people miss.",
    body: "CCTV, access control and monitored alarm systems — designed, installed and maintained, then watched around the clock by our control room.",
    image: img.cctv,
    cta: { href: "/services/security-technologies", label: "Explore security technologies" },
  },
];
