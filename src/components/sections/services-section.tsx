import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/service-card";
import { SectionHeading, buttonClass } from "@/components/ui";
import { services } from "@/lib/services";

export function ServicesSection() {
  return (
    <section className="section bg-sand-50">
      <div className="container-page">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <Reveal className="flex-1">
            <SectionHeading
              eyebrow="What we do"
              title="Security services built around your site"
              description="Six core services, delivered by licensed officers and backed by a control room that answers the phone at 3am as readily as it does at 3pm."
            />
          </Reveal>
          <Reveal delay={120}>
            <Link href="/services" className={buttonClass({ variant: "outline" })}>
              View all services
              <Icon name="arrow" className="size-4" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <Reveal key={service.slug} delay={index * 70} className="h-full">
              <ServiceCard service={service} priority={index < 3} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
