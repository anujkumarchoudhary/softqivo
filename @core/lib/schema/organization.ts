
export const organizationSchema = {
  "@type": "Organization",
  "@id": "https://www.softqivo.com/#organization",

  name: "SoftQivo",
  alternateName: "SoftQivo Technology",
  url: "https://www.softqivo.com/",

  logo: {
    "@type": "ImageObject",
    url: "https://www.softqivo.com/softqivo_04.png",
  },
  image: "https://www.softqivo.com/softqivo_04.png",

  description:
    "SoftQivo is a software development company providing professional web development, custom website design, web application development, SaaS development, API integration, and scalable software solutions for businesses.",

  email: "softqivo@gmail.com",
  telephone: "+91-99531-76985",

  address: {
    "@type": "PostalAddress",
    streetAddress: "A-21, 2nd Floor, BSI Business Park, Sector 63",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    postalCode: "201301",
    addressCountry: "IN",
  },

  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+91-99531-76985",
      email: "softqivo@gmail.com",
      contactType: "sales",
      areaServed: "IN",
      availableLanguage: ["English", "Hindi"],
    },
  ],

  sameAs: [
    "https://x.com/softqivo",
  ],

  knowsAbout: [
    "Web Development",
    "Custom Website Design",
    "Custom Software Development",
    "Web Application Development",
    "SaaS Development",
    "CRM Development",
    "UI/UX Design",
    "API Development and Integration",
    "React.js Development",
    "Next.js Development",
    "Node.js Development",
    "MERN Stack Development",
    "Database Design",
    "Software Maintenance and Support",
  ],
};
