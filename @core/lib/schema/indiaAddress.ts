export const indiaOfficeSchema = {
  "@type": "LocalBusiness",
  "@id": "https://www.softqivo.com/#india-office",
  name: "SoftQivo",
  url: "https://www.softqivo.com/",
  telephone: "+91-99531-76985",
  email: "softqivo@gmail.com",
  image: "https://www.softqivo.com/softqivo_04.png",
  priceRange: "$$",

  parentOrganization: {
    "@id": "https://www.softqivo.com/#organization",
  },

  address: {
    "@type": "PostalAddress",
    streetAddress:
      "A-21, 2nd Floor, BSI Business Park, Sector 63",
    addressLocality: "Noida",
    addressRegion: "Uttar Pradesh",
    addressCountry: "IN",
  },

  areaServed: {
    "@type": "Country",
    name: "India",
  },
};