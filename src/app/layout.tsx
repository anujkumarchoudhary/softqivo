import type { Metadata } from "next";
import "./globals.css";
import { Geist, Geist_Mono, Inter, Mona_Sans, Montserrat, Playfair_Display, Poppins, Roboto_Mono } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
  display: "swap",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});


const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const robotoMono = Roboto_Mono({
  variable: "--font-roboto-mono",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

const monaSans = Mona_Sans({
  variable: "--font-mona-sans",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://softqivo.com"),

  title: {
    default: "Web Development Company in Noida & Digital Solutions | SoftQivo",
    template: "%s | SoftQivo",
  },
  icons: {
    icon: "/icon.png",
  },

  description:
    "SoftQivo is a technology company delivering custom software development, web development, modern digital solutions, and scalable applications to help businesses grow.",

  keywords: [
    "SoftQivo",
    "SoftQivo Technology",
    "software development company",
    "web development company",
    "custom software development",
    "website development services",
    "Next.js development",
    "MERN stack development",
    "full-stack development",
    "business software solutions",
    "digital transformation services",
    "scalable web applications",
  ],

  authors: [{ name: "SoftQivo Technology" }],
  creator: "SoftQivo Technology",
  publisher: "SoftQivo Technology",

  alternates: {
    canonical: "/",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  openGraph: {
    title: "SoftQivo | Software Development & Digital Solutions",
    description:
      "Build smarter digital experiences with SoftQivo. We deliver custom software, modern websites, and scalable technology solutions for growing businesses.",
    url: "https://softqivo.com",
    siteName: "SoftQivo",
    type: "website",
    locale: "en_IN",
    images: [
      {
        url: "/softqivo_04.png",
        width: 1200,
        height: 630,
        alt: "SoftQivo Technology",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "SoftQivo | Software Development & Digital Solutions",
    description:
      "Custom software, modern web development, and scalable digital solutions for growing businesses.",
    images: ["/softqivo_04.png"],
  },

  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Google Tag Manager */}
        <Script
          id="google-tag-manager"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-DJQT9002F4');
          `,
          }}
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${playfair.variable} ${poppins.variable} ${inter.variable} ${robotoMono.variable} ${monaSans.variable} ${montserrat.variable}`}
      >
        {/* Google Tag Manager noscript */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-DJQT9002F4"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {children}
      </body>
    </html>
  );
}