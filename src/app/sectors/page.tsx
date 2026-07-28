import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { SectorsSection } from "@/components/sections/sectors-section";
import { CtaBand } from "@/components/sections/cta-band";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { img } from "@/lib/images";

export const metadata: Metadata = {
  title: "Sectors We Cover",
  description:
    "Security for construction, corporate offices, retail, warehousing and logistics, events and residential estates — planned around the risks each site actually faces.",
  alternates: { canonical: "/sectors" },
};

export default function SectorsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Sectors"
        title="Security planned around your industry"
        description="A distribution yard, a construction site and a corporate reception all need very different cover. Here is how we approach each of them."
        image={img.warehouse}
      />
      <SectorsSection />
      <TestimonialsSection />
      <CtaBand />
    </>
  );
}
