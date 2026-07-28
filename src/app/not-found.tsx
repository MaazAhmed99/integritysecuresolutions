import Link from "next/link";
import { Icon } from "@/components/icons";
import { buttonClass } from "@/components/ui";
import { services } from "@/lib/services";
import { site } from "@/lib/site";

export default function NotFound() {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <div aria-hidden className="grid-texture absolute inset-0 opacity-60" />

      <div className="container-page relative flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
        <span className="font-display text-7xl font-extrabold text-gold-500 sm:text-8xl">404</span>
        <h1 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
          This page could not be found
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-white/60">
          The page may have moved or never existed. Try one of our services below,
          or call us and we will point you in the right direction.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <Link href="/" className={buttonClass({ size: "lg" })}>
            Back to homepage
            <Icon name="arrow" className="size-4" />
          </Link>
          <a href={site.phoneHref} className={buttonClass({ variant: "ghostLight", size: "lg" })}>
            <Icon name="phone" className="size-4 text-gold-500" />
            {site.phone}
          </a>
        </div>

        <ul className="mt-14 flex flex-wrap justify-center gap-2">
          {services.map((service) => (
            <li key={service.slug}>
              <Link
                href={`/services/${service.slug}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-medium text-white/70 transition-colors hover:border-gold-500/60 hover:text-white"
              >
                <Icon name={service.icon} className="size-3.5 text-gold-500" />
                {service.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
