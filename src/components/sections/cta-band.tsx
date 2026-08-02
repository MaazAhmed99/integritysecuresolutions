import Link from "next/link";
import { Icon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { buttonClass } from "@/components/ui";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Get a security plan for your site",
  body = "Tell us about the property, the hours you need covered and the risks that concern you. We will survey the site free of charge and come back with an itemised quote.",
}: {
  title?: string;
  body?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-brand-500">
      <div
        aria-hidden
        className="absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(45deg, #05080f 0 2px, transparent 2px 14px)",
        }}
      />

      <div className="container-page relative flex flex-col items-start gap-8 py-16 lg:flex-row lg:items-center lg:justify-between lg:py-20">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-extrabold leading-tight text-white sm:text-4xl">
            {title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85">{body}</p>
        </Reveal>

        <Reveal delay={120} className="w-full shrink-0 lg:w-auto">
          <div className="flex flex-col gap-3 sm:flex-row lg:flex-col xl:flex-row">
            <Link href="/quote" className={buttonClass({ variant: "dark", size: "lg" })}>
              Request a free quote
              <Icon name="arrow" className="size-4" />
            </Link>
            <a
              href={site.phoneHref}
              className={buttonClass({ variant: "onAccent", size: "lg" })}
            >
              <Icon name="phone" className="size-4" />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
