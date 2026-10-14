export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://softqivo.com/#organization",

  name: "softqivo Digital Media",

  url: "https://softqivo.com",

  logo: "https://softqivo.com/_next/static/media/strap_Logo.cdbe72f0.svg",

  image: "https://softqivo.com/_next/static/media/strap_Logo.cdbe72f0.svg",

  description:
    "softqivo Digital Media is a full-service digital marketing agency providing SEO, AI SEO, Local SEO, Link Building, PPC Advertising, Content Marketing, Social Media Marketing, Web Design, WordPress Development, Shopify Development, and Custom Web Development services.",

  foundingDate: "2017",

  email: "contact@softqivo.com",

  telephone: "+1-775-295-8661",

  address: {
    "@type": "PostalAddress",
    streetAddress: "390 NE 191st St STE 8548",
    addressLocality: "Miami",
    addressRegion: "FL",
    postalCode: "33179",
    addressCountry: "US",
  },

  location: [
    {
      "@type": "Place",
      name: "softqivo  USA",
      address: {
        "@type": "PostalAddress",
        streetAddress: "390 NE 191st St STE 8548",
        addressLocality: "Miami",
        addressRegion: "FL",
        postalCode: "33179",
        addressCountry: "US",
      },
    },
    {
      "@type": "Place",
      name: "softqivo  India",
      address: {
        "@type": "PostalAddress",
        streetAddress: "B-509, 5th Floor, Bestech Business Towers, Sector 66",
        addressLocality: "SAS Nagar (Mohali)",
        addressRegion: "Punjab",
        postalCode: "160066",
        addressCountry: "IN",
      },
    },
  ],

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+1-775-295-8661",
      contactType: "sales",
      areaServed: "US",
      availableLanguage: "English",
    },
    {
      "@type": "ContactPoint",
      telephone: "+91-8907300008",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: "English",
    },
  ],

  sameAs: [
    "https://www.facebook.com/",
    "https://www.linkedin.com/",
    "https://www.instagram.com/",
    "https://x.com/",
  ],

  knowsAbout: [
    "Search Engine Optimization",
    "AI SEO",
    "Local SEO",
    "Link Building",
    "PPC Advertising",
    "Content Marketing",
    "Social Media Marketing",
    "Web Design",
    "WordPress Development",
    "Shopify Development",
    "Custom Web Development",
  ],
};
