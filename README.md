# Integrity Secure Solutions — Website

A Next.js security-company website, built using [sentrixsecurityltd.com](https://sentrixsecurityltd.com)
as the structural reference and rebuilt from scratch for layout, alignment, information
architecture and conversion paths.

> **The reference site belongs to a different company.** Contact details, address and
> testimonials were carried over as scaffolding and are still Sentrix's.
> See [`CONTENT-REVIEW.md`](./CONTENT-REVIEW.md) — these must be replaced before launch.

## Stack

| | |
|---|---|
| Framework | Next.js 15 (App Router, React 19, TypeScript) |
| Styling | Tailwind CSS v4 (`@theme` tokens in `src/app/globals.css`) |
| Fonts | Archivo (headings) + Inter (body) via `next/font` |
| Images | Unsplash, served through `next/image` (AVIF/WebP, lazy) |
| Forms | `/api/enquiry` route with optional Resend delivery |
| Dependencies | Zero runtime dependencies beyond Next/React |

## Running it

> **Note:** the globally installed npm (v12) is broken on this machine's Node 22.1.0.
> Use Node's bundled npm instead, or upgrade Node to 22.22+.

```bash
node "C:\Program Files\nodejs\node_modules\npm\bin\npm-cli.js" install
node node_modules/next/dist/bin/next dev
```

Then open <http://localhost:3000>.

Production build:

```bash
node node_modules/next/dist/bin/next build
```

## Project structure

```
src/
  app/
    layout.tsx              Root shell, fonts, SEO defaults, LocalBusiness JSON-LD
    page.tsx                Homepage
    services/               Service index + [slug] detail pages (SSG)
    sectors/                Industries covered
    about/  contact/  quote/  careers/  privacy/
    api/enquiry/route.ts    Form handler (validation, honeypot, email)
    sitemap.ts  robots.ts   Generated from the same data as the nav
  components/
    sections/               Composable page sections
    ui.tsx                  Buttons, headings, pills — the shared vocabulary
    icons.tsx               Inline SVG set (no icon library dependency)
  lib/
    site.ts                 Company details, contact info, stats  ← edit here
    services.ts             The six services and their detail-page content
    content.ts              Sectors, process steps, testimonials, FAQs
    images.ts               Curated Unsplash photo references
```

**To change contact details, hours or headline stats, edit `src/lib/site.ts` only.**
The header, footer, contact page, JSON-LD and forms all read from it.

## Forms

All three forms (quote, contact, careers) post to `/api/enquiry`, which validates
input, rejects honeypot submissions and then either:

1. **Sends an email** — if `RESEND_API_KEY` and `ENQUIRY_FROM_EMAIL` are set, or
2. **Logs to the server console** — so nothing is silently lost in development.

Copy `.env.example` to `.env.local` and fill in the values to enable delivery.
Any transactional provider works; Resend is called over plain REST so there is no SDK to install.

## What changed vs the WordPress site

- **Alignment** — every section uses one `.container-page` and one `.section` rhythm, so
  left edges and vertical spacing line up down the whole page.
- **Working counters** — the original renders every stat as `0+` because its counter script
  never fires. `Counter` uses IntersectionObserver and degrades to the final value.
- **Conversion paths** — phone number in the utility bar, header, hero, every service page
  sidebar, CTA bands and footer. The original buried them.
- **Real service pages** — six SSG detail pages with what's included, best-fit sectors and a
  sticky enquiry rail, instead of one grid of untitled cards.
- **New sections** — sectors, four-step process, FAQ accordion (with FAQPage schema).
- **SEO** — per-page metadata and canonicals, `SecurityService` JSON-LD, generated sitemap
  and robots.
- **Accessibility** — skip link, visible focus rings, labelled forms, `aria-expanded` on the
  menu and accordion, alt text on every meaningful image, `prefers-reduced-motion` respected.
- **Performance** — no jQuery, no page builder CSS, ~102 kB shared JS, static pages everywhere
  except the form endpoint.

## Before launch

See [`CONTENT-REVIEW.md`](./CONTENT-REVIEW.md) — there are claims and figures in the copy
that the client needs to confirm.
