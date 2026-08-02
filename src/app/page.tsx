import type { Metadata } from "next";
import { HeroSlider } from "@/components/sections/hero-slider";
import { PillarsSection } from "@/components/sections/pillars-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { ContactSection } from "@/components/sections/contact-section";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.legalName} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

/**
 * Four sections only. The stats band, about, why-choose, process, sectors
 * and FAQ blocks still exist as components and are used on the inner pages.
 */
export default function HomePage() {
  return (
    <>
      <HeroSlider />
      <PillarsSection />
      <TestimonialsSection />
      <ContactSection />
    </>
  );
}
