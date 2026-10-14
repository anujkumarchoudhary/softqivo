export const websiteSchema = {
  "@context": "https://schema.org",

  "@type": "WebSite",

  "@id": "https://softqivo.com/#website",

  url: "https://softqivo.com",

  name: "softqivo Digital Media",

  publisher: {
    "@id": "https://softqivo.com/#organization",
  },

  inLanguage: ["en-US", "en-IN"],

  potentialAction: {
    "@type": "SearchAction",
    target: "https://softqivo.com/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};
