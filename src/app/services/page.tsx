import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { PillarsSection } from "@/components/sections/pillars-section";
import { SectionHeading } from "@/components/ui";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { services } from "@/lib/services";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    `Static security guards, dog handling units, CCTV monitoring, event security, key holding and mobile patrols from ${site.legalName}, across ${site.serviceArea.short} and the UK.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title={`Security services across ${site.serviceArea.short}`}
        description="Six core services covering every hour of the day. Mix and match them — most clients start with one and add others as their site changes."
        image={img.staticGuarding}
      />

      <PillarsSection />

      <section className="section bg-sand-50">
        <div className="container-page">
          <Reveal>
            <SectionHeading
              eyebrow="Security solutions in detail"
              title="Our manned security services"
              description="The six services that make up our security solutions line. Take one on its own or combine them into a single contract."
            />
          </Reveal>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.slug} delay={index * 70} className="h-full">
                <ServiceCard service={service} priority={index < 3} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ProcessSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
