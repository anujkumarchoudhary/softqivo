
import type { MetadataRoute } from "next";

const baseUrl = "https://softqivo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about-us",
    "/service",
    "/blog",
    "/portfolio",
    "/contact",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
  }));
}
