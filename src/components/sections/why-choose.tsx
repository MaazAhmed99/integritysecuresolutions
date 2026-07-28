import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Eyebrow, buttonClass } from "@/components/ui";
import { img } from "@/lib/images";
import { site } from "@/lib/site";

const reasons = [
  "Fully trained, SIA licensed and experienced security officers",
  "Specialised dog handling units for high-risk and large premises",
  "24/7 protection with genuine rapid response, not an answerphone",
  "Trusted by construction firms, event organisers and retailers",
  "Cover for construction sites, offices, warehouses and retail units",
  "CCTV monitoring and mobile patrols with auditable, time-stamped logs",
];

export function WhyChoose() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src={img.cityNight.src}
        alt=""
        aria-hidden
        fill
        sizes="100vw"
        className="object-cover opacity-20"
      />
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-br from-ink-950 via-ink-950/95 to-ink-900/80"
      />

      <div className="container-page relative section grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <Eyebrow tone="light">Why choose {site.shortName}</Eyebrow>
            <h2 className="mt-4 text-3xl font-bold leading-[1.12] text-white sm:text-4xl lg:text-[2.75rem]">
              Reliable security for businesses, events and construction sites
            </h2>
            <p className="mt-5 max-w-lg text-base leading-relaxed text-white/65">
              Security is judged on the nights nothing happens. We build the
              coverage around your actual risk, keep the same officers on your
              site wherever possible, and give you the paperwork to prove it.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/quote" className={buttonClass({ size: "lg" })}>
                Request a free survey
                <Icon name="arrow" className="size-4" />
              </Link>
              <Link href="/sectors" className={buttonClass({ variant: "ghostLight", size: "lg" })}>
                Sectors we cover
              </Link>
            </div>
          </Reveal>
        </div>

        <ul className="grid gap-px overflow-hidden rounded-card bg-white/10 sm:grid-cols-2 lg:grid-cols-1">
          {reasons.map((reason, index) => (
            <Reveal
              key={reason}
              as="li"
              delay={index * 60}
              className="flex items-start gap-4 bg-ink-950/85 p-5 backdrop-blur-sm transition-colors hover:bg-ink-900/85"
            >
              <span className="mt-0.5 flex size-6 shrink-0 items-center justify-center rounded-full bg-gold-500 text-ink-950">
                <Icon name="check" className="size-3.5" strokeWidth={3} />
              </span>
              <span className="text-sm leading-relaxed text-white/80">{reason}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
