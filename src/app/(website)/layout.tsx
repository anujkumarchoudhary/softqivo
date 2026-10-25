import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Mona_Sans, Montserrat, Playfair_Display, Poppins, Roboto_Mono } from "next/font/google";
import "../globals.css";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";
// import SmoothScroll from "../../components/layout/SmoothScroll";
import { Toaster } from "react-hot-toast";
import LiveChatWidget from "@/src/components/chat/LiveChatWidget";
import SmoothScroll from "@/src/components/layout/SmoothScroll";
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
  metadataBase: new URL("https://www.softqivo.com"),

  title: {
    default: "SoftQivo | Web Development Company in Noida & Digital Solutions",
    template: "%s | SoftQivo",
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
    url: "https://www.softqivo.com",
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased ${playfair.variable} ${poppins.variable} ${inter.variable} ${robotoMono.variable} ${monaSans.variable} ${montserrat.variable}`}
      >
        <Header />
        <main>

          <SmoothScroll />
          <Toaster position="top-right" reverseOrder={false} />

          {children}
          <LiveChatWidget />
        </main>

        <Footer />
      </body>
    </html>
  );
}
