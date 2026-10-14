export const aboutBreadcrumbSchema = {
  "@context": "https://schema.org",

  "@type": "BreadcrumbList",

  "@id": "https://softqivo.com/about-us#breadcrumb",

  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://softqivo.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "About Us",
      item: "https://softqivo.com/about-us",
    },
  ],
};