import Image from "next/image";
import Link from "next/link";
import { Icon } from "@/components/icons";
import type { Service } from "@/lib/services";

export function ServiceCard({ service, priority = false }: { service: Service; priority?: boolean }) {
  return (
    <article className="group relative flex h-full flex-col overflow-hidden rounded-card border border-ink-900/8 bg-white shadow-lift transition-all duration-300 hover:-translate-y-1 hover:border-gold-500/40 hover:shadow-lift-lg">
      <div className="relative aspect-16/10 overflow-hidden">
        <Image
          src={service.image.src}
          alt={service.image.alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-ink-950/75 via-ink-950/10 to-transparent"
        />
        <span className="absolute left-4 top-4 flex size-11 items-center justify-center rounded-xl bg-ink-950/80 text-gold-500 backdrop-blur-sm ring-1 ring-white/15">
          <Icon name={service.icon} className="size-5.5" />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg font-bold text-ink-900">
          <Link href={`/services/${service.slug}`} className="after:absolute after:inset-0">
            <span className="bg-gradient-to-r from-gold-500 to-gold-500 bg-[length:0%_2px] bg-left-bottom bg-no-repeat transition-[background-size] duration-300 group-hover:bg-[length:100%_2px]">
              {service.title}
            </span>
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-900/65">{service.summary}</p>

        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-ink-900 transition-colors group-hover:text-gold-600">
          Learn more
          <Icon
            name="arrow"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </article>
  );
}
