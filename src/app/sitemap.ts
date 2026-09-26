import type { MetadataRoute } from "next";

const baseUrl = "https://www.softqivo.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    // Main pages
    {
      url: `${baseUrl}/`,
      priority: 1.0,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/about`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/service`,
      priority: 0.9,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/case-studies`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/blog`,
      priority: 0.8,
      changeFrequency: "weekly" as const,
    },
    {
      url: `${baseUrl}/contact`,
      priority: 0.8,
      changeFrequency: "monthly" as const,
    },

    // Services

    // Blog
    {
      url: `${baseUrl}/blog/building-modern-web-applications-that-scale`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/blog/why-great-ui-ux-design-matters`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },
    {
      url: `${baseUrl}/blog/from-idea-to-product`,
      priority: 0.7,
      changeFrequency: "monthly" as const,
    },

    // Legal
    {
      url: `${baseUrl}/privacy-policy`,
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      priority: 0.5,
      changeFrequency: "yearly" as const,
    },
  ];

  return routes.map((route) => ({
    url: route.url,
    lastModified: new Date(),
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));
}