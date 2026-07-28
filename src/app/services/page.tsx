import type { Metadata } from "next";
import { PageHeader } from "@/components/page-header";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { ProcessSection } from "@/components/sections/process-section";
import { CtaBand } from "@/components/sections/cta-band";
import { FaqSection } from "@/components/sections/faq-section";
import { services } from "@/lib/services";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Security Services",
  description:
    `Static security guards, dog handling units, CCTV monitoring, event security, key holding and mobile patrols from ${site.legalName}, across London and the UK.`,
  alternates: { canonical: "/services" },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Our services"
        title="Security services across London & the UK"
        description="Six core services covering every hour of the day. Mix and match them — most clients start with one and add others as their site changes."
        image={img.staticGuarding}
      />

      <section className="section bg-sand-50">
        <div className="container-page grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 70} className="h-full">
              <ServiceCard service={service} priority={index < 3} />
            </Reveal>
          ))}
        </div>
      </section>

      <ProcessSection />
      <FaqSection />
      <CtaBand />
    </>
  );
}
