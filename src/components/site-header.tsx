"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { Icon } from "@/components/icons";
import { buttonClass } from "@/components/ui";
import { headerNav, site } from "@/lib/site";
import { services } from "@/lib/services";

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the drawer on navigation and lock body scroll while it is open.
  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setMenuOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      {/* Utility bar — phone and email are the two highest-intent actions
          for this business, so they stay visible above the nav on desktop. */}
      <div className="hidden border-b border-ink-900/8 bg-sand-100 text-ink-900/60 lg:block">
        <div className="container-page flex h-10 items-center justify-between text-xs">
          <p className="flex items-center gap-2">
            <Icon name="clock" className="size-3.5 text-brand-500" />
            Mon–Fri 7am–7pm · Sat–Sun 10am–5pm · 24/7 emergency response
          </p>
          <div className="flex items-center gap-6">
            <a
              href={`mailto:${site.email}`}
              className="flex items-center gap-2 transition-colors hover:text-brand-600"
            >
              <Icon name="mail" className="size-3.5 text-brand-500" />
              {site.email}
            </a>
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 font-semibold text-ink-900 transition-colors hover:text-brand-600"
            >
              <Icon name="phone" className="size-3.5 text-brand-500" />
              {site.phone}
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-50 border-b transition-all duration-300 ${
          scrolled
            ? "border-ink-900/10 bg-white/92 shadow-lift backdrop-blur-xl"
            : "border-ink-900/8 bg-white"
        }`}
      >
        <div className="container-page flex h-18 items-center justify-between gap-6 py-3.5">
          <Logo tone="dark" />

          <nav aria-label="Main" className="hidden items-center gap-1 lg:flex">
            {headerNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-current={isActive(item.href) ? "page" : undefined}
                className={`relative px-4 py-2 text-sm font-medium transition-colors ${
                  isActive(item.href)
                    ? "text-brand-600"
                    : "text-ink-900 hover:text-brand-600"
                }`}
              >
                {item.label}
                {isActive(item.href) ? (
                  <span
                    aria-hidden
                    className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-brand-500"
                  />
                ) : null}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={site.phoneHref}
              className="flex items-center gap-2 rounded-full px-3 py-2 text-sm font-semibold text-ink-900 transition-colors hover:text-brand-600 lg:hidden"
              aria-label={`Call ${site.phone}`}
            >
              <Icon name="phone" className="size-4 text-brand-500" />
              <span className="hidden sm:inline">Call</span>
            </a>

            <Link href="/quote" className={buttonClass({ size: "sm", className: "hidden sm:inline-flex" })}>
              Get a free quote
              <Icon name="arrow" className="size-4" />
            </Link>

            <button
              type="button"
              onClick={() => setMenuOpen((open) => !open)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              className="flex size-10 items-center justify-center rounded-full border border-ink-900/15 text-ink-900 transition-colors hover:border-brand-500 hover:text-brand-600 lg:hidden"
            >
              <Icon name={menuOpen ? "close" : "menu"} className="size-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        id="mobile-menu"
        hidden={!menuOpen}
        className="fixed inset-0 z-40 lg:hidden"
      >
        <button
          type="button"
          aria-label="Close menu"
          tabIndex={-1}
          onClick={() => setMenuOpen(false)}
          className="absolute inset-0 bg-ink-950/70 backdrop-blur-sm"
        />
        <nav
          aria-label="Mobile"
          className="absolute inset-x-0 top-18 max-h-[calc(100dvh-4.5rem)] overflow-y-auto border-b border-ink-900/10 bg-white px-5 pb-8 pt-4 shadow-lift-lg"
        >
          <ul className="flex flex-col">
            {headerNav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className={`flex items-center justify-between border-b border-ink-900/8 py-3.5 text-base font-medium transition-colors hover:text-brand-600 ${
                    isActive(item.href) ? "text-brand-600" : "text-ink-900"
                  }`}
                >
                  {item.label}
                  <Icon name="arrow" className="size-4 opacity-30" />
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-6 mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-ink-900/45">
            Our services
          </p>
          <ul className="grid gap-1">
            {services.map((service) => (
              <li key={service.slug}>
                <Link
                  href={`/services/${service.slug}`}
                  className="flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm text-ink-900/70 transition-colors hover:bg-sand-100 hover:text-brand-600"
                >
                  <Icon name={service.icon} className="size-4 text-brand-500" />
                  {service.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-7 grid gap-2.5">
            <Link href="/quote" className={buttonClass({ size: "lg" })}>
              Get a free quote
            </Link>
            <a
              href={site.phoneHref}
              className={buttonClass({ variant: "outline", size: "lg" })}
            >
              <Icon name="phone" className="size-4 text-brand-600" />
              {site.phone}
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}
