import Link from "next/link";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons";
import { services } from "@/lib/services";
import { addressLines, site } from "@/lib/site";

const companyLinks = [
  { href: "/about", label: "About us" },
  { href: "/sectors", label: "Sectors we cover" },
  { href: "/contact", label: "Contact" },
  { href: "/quote", label: "Request a quote" },
];

export function SiteFooter() {
  return (
    <footer className="border-t border-ink-900/10 bg-sand-100 text-ink-900/65">
      <div className="container-page grid gap-12 py-16 lg:grid-cols-12 lg:gap-8 lg:py-20">
        <div className="lg:col-span-4">
          <Logo tone="dark" />
          <p className="mt-6 max-w-sm text-sm leading-relaxed">
            {site.legalName} delivers SIA licensed guarding, dog handling units,
            mobile patrols and CCTV monitoring for businesses, construction sites
            and events across {site.serviceArea.short} and the UK.
          </p>
          <div className="mt-7 flex flex-wrap gap-2">
            {["SIA licensed", "Fully insured", "24/7 control room"].map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-ink-900/15 px-3 py-1.5 text-xs font-medium text-ink-900/70"
              >
                {badge}
              </span>
            ))}
          </div>
        </div>

        <nav aria-label="Services" className="lg:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
            Services
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="transition-colors hover:text-brand-600"
                >
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Company" className="lg:col-span-2">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
            Company
          </h2>
          <ul className="mt-5 space-y-3 text-sm">
            {companyLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="transition-colors hover:text-brand-600">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="lg:col-span-3">
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-ink-900">
            Get in touch
          </h2>
          <ul className="mt-5 space-y-4 text-sm">
            <li>
              <a
                href={site.phoneHref}
                className="flex items-start gap-3 transition-colors hover:text-brand-600"
              >
                <Icon name="phone" className="mt-0.5 size-4 shrink-0 text-brand-500" />
                <span className="font-semibold text-ink-900">{site.phone}</span>
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-start gap-3 break-all transition-colors hover:text-brand-600"
              >
                <Icon name="mail" className="mt-0.5 size-4 shrink-0 text-brand-500" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-3">
              <Icon name="pin" className="mt-0.5 size-4 shrink-0 text-brand-500" />
              <address className="not-italic leading-relaxed">
                {addressLines.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-900/10">
        <div className="container-page flex flex-col items-center justify-between gap-3 py-6 text-xs sm:flex-row">
          <p>
            © {new Date().getFullYear()} {site.legalName}. All rights reserved.
          </p>
          <p>
            Photography from{" "}
            <a
              href="https://unsplash.com"
              className="underline underline-offset-4 transition-colors hover:text-brand-600"
              rel="noreferrer noopener"
              target="_blank"
            >
              Unsplash
            </a>
            {" · "}
            <Link href="/privacy" className="transition-colors hover:text-brand-600">
              Privacy policy
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
