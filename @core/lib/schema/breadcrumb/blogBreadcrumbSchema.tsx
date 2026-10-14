export const BlogBreadcrumbSchema = {
  "@type": "BreadcrumbList",

  "@id": "https://softqivo.com/blog#breadcrumb",

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
      name: "Blog",
      item: "https://softqivo.com/blog",
    },
  ],
};
