import type { Metadata } from "next";
import { Fraunces, Poppins, Sacramento } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/data/site";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  weight: ["400", "600"],
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["400", "500", "600"],
});

const sacramento = Sacramento({
  subsets: ["latin"],
  variable: "--font-sacramento",
  weight: ["400"],
});

export const metadata: Metadata = {
  title: `${site.name} | Nail Salon in Miami, FL`,
  description:
    "Cute, clean, and cozy nail care at Polishd Nail Lounge in Miami. Manicures, pedicures, dipping powder, nail enhancements & more. Book your appointment today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${poppins.variable} ${sacramento.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-body bg-cream text-ink">
        {children}
        <Script
          src="https://www.rewanow.com/scheduler/assets/widget.js"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
