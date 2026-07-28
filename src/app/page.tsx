import type { Metadata } from "next";
import { Hero } from "@/components/sections/hero";
import { ServicesSection } from "@/components/sections/services-section";
import { StatsBand } from "@/components/sections/stats-band";
import { AboutSection } from "@/components/sections/about-section";
import { WhyChoose } from "@/components/sections/why-choose";
import { ProcessSection } from "@/components/sections/process-section";
import { SectorsSection } from "@/components/sections/sectors-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaBand } from "@/components/sections/cta-band";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: `${site.legalName} — ${site.tagline}`,
  description: site.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <StatsBand />
      <AboutSection />
      <WhyChoose />
      <ProcessSection />
      <SectorsSection limit={3} />
      <TestimonialsSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
