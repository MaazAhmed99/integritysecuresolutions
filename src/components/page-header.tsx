import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import { Eyebrow } from "@/components/ui";
import type { ImageRef } from "@/lib/images";

type Crumb = { href: string; label: string };

/** Shared page banner — one component means every inner page lines up identically. */
export function PageHeader({
  eyebrow,
  title,
  description,
  image,
  breadcrumbs = [],
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  image: ImageRef;
  breadcrumbs?: Crumb[];
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink-950">
      <Image
        src={image.src}
        alt=""
        aria-hidden
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-60"
      />
      {/* Horizontal scrim: heaviest behind the copy on the left, clearing to
          the right so the photograph is actually legible. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-r from-ink-950/95 via-ink-950/75 to-ink-950/30"
      />
      {/* Grounds the bottom edge so the banner meets the next section cleanly. */}
      <div
        aria-hidden
        className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent"
      />
      <div aria-hidden className="grid-texture absolute inset-0 opacity-25" />

      <div className="container-page relative py-16 sm:py-20 lg:py-24">
        <nav aria-label="Breadcrumb">
          <ol className="flex flex-wrap items-center gap-2 text-xs text-white/45">
            <li>
              <Link href="/" className="transition-colors hover:text-brand-400">
                Home
              </Link>
            </li>
            {breadcrumbs.map((crumb) => (
              <li key={crumb.href} className="flex items-center gap-2">
                <Icon name="arrow" className="size-3 opacity-50" />
                <Link href={crumb.href} className="transition-colors hover:text-brand-400">
                  {crumb.label}
                </Link>
              </li>
            ))}
            <li className="flex items-center gap-2">
              <Icon name="arrow" className="size-3 opacity-50" />
              <span aria-current="page" className="text-white/70">
                {title}
              </span>
            </li>
          </ol>
        </nav>

        <div className="mt-7 max-w-3xl">
          {eyebrow ? <Eyebrow tone="light">{eyebrow}</Eyebrow> : null}
          <h1 className="mt-4 text-4xl font-extrabold leading-[1.08] text-white sm:text-5xl">
            {title}
          </h1>
          {description ? (
            <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/65">{description}</p>
          ) : null}
        </div>
      </div>
    </section>
  );
}
