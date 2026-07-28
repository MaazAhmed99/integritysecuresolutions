import type { Metadata, Viewport } from "next";
import { Archivo, Inter } from "next/font/google";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { formattedAddress, site } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const archivo = Archivo({
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.legalName} — ${site.tagline}`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: [
    "security company London",
    "SIA licensed security guards",
    "static security guards",
    "dog handling security",
    "mobile patrol security",
    "CCTV monitoring",
    "event security",
    "key holding and alarm response",
    "construction site security Harrow",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: site.url,
    siteName: site.legalName,
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.legalName} — ${site.tagline}`,
    description: site.description,
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#05080f",
  width: "device-width",
  initialScale: 1,
};

const organisationSchema = {
  "@context": "https://schema.org",
  "@type": "SecurityService",
  name: site.legalName,
  url: site.url,
  telephone: site.phone,
  email: site.email,
  description: site.description,
  address: {
    "@type": "PostalAddress",
    streetAddress: `${site.address.line1}, ${site.address.line2}`,
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    postalCode: site.address.postcode,
    addressCountry: site.address.country,
  },
  areaServed: { "@type": "Country", name: "United Kingdom" },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "07:00",
      closes: "19:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday", "Sunday"],
      opens: "10:00",
      closes: "17:00",
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${archivo.variable}`}>
      <head>
        {/* Runs before first paint. Scroll-reveal styles are scoped to `.js`,
            so without this class every section stays visible — no JS, no blank page. */}
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.add('js')`,
          }}
        />
      </head>
      <body className="font-sans antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-100 focus:rounded-full focus:bg-gold-500 focus:px-5 focus:py-3 focus:text-sm focus:font-semibold focus:text-ink-950"
        >
          Skip to main content
        </a>

        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />

        <script
          type="application/ld+json"
          // Static, developer-authored schema — no user input reaches this string.
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              ...organisationSchema,
              address: { ...organisationSchema.address, name: formattedAddress },
            }),
          }}
        />
      </body>
    </html>
  );
}
