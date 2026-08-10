import type { MetadataRoute } from "next";
import { services } from "@/lib/services";
import { pillars } from "@/lib/pillars";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { path: "/", priority: 1 },
    { path: "/services", priority: 0.9 },
    { path: "/sectors", priority: 0.7 },
    { path: "/about", priority: 0.7 },
    { path: "/quote", priority: 0.9 },
    { path: "/apply-for-a-job", priority: 0.6 },
    { path: "/contact", priority: 0.8 },
  ];

  return [
    ...staticRoutes.map((route) => ({
      url: `${site.url}${route.path}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: route.priority,
    })),
    ...pillars.map((pillar) => ({
      url: `${site.url}/services/${pillar.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.9,
    })),
    ...services.map((service) => ({
      url: `${site.url}/services/${service.slug}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
  ];
}
