import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/data/site";
import LocalBusinessJsonLd from "@/components/LocalBusinessJsonLd";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} | Nail Salon in North Miami, FL`,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "nail salon North Miami",
    "nail salon Miami FL",
    "manicure Miami",
    "pedicure North Miami",
    "gel-X nails Miami",
    "dip powder nails",
    "acrylic nails Miami",
    "nail art North Miami Beach",
    "nail salon Biscayne Blvd",
    "nail salon near me",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    siteName: site.name,
    title: `${site.name} | Nail Salon in North Miami, FL`,
    description: site.description,
    url: site.url,
    locale: "en_US",
    images: [
      {
        url: "/images/nail-5.jpg",
        width: 1200,
        height: 1200,
        alt: `${site.name} — nail salon in North Miami, FL`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} | Nail Salon in North Miami, FL`,
    description: site.description,
    images: ["/images/nail-5.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  // Geo meta — legacy but still parsed by some local-search crawlers.
  other: {
    "geo.region": "US-FL",
    "geo.placename": "North Miami",
    "geo.position": `${site.geo.lat};${site.geo.lon}`,
    ICBM: `${site.geo.lat}, ${site.geo.lon}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-cream text-ink">
        <LocalBusinessJsonLd />
        {children}
        {/*
          Rewanow booking widget. Injected at the end of <body> — exactly like
          Rewanow's own <script> snippet — so the .rewanow-scheduler-container
          buttons above already exist in the DOM when widget.js runs and binds
          the in-page popup. (Next's <Script afterInteractive> ran too late and
          missed the widget's DOMContentLoaded init; <head> placement runs too
          early, before the body buttons are parsed.) Inline injector keeps the
          tag in <body> rather than letting React hoist it to <head>.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var s=document.createElement('script');s.src='https://www.rewanow.com/scheduler/assets/widget.js';s.type='text/javascript';document.body.appendChild(s);})();",
          }}
        />
      </body>
    </html>
  );
}
