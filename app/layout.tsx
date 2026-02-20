import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import StickyMobileCTA from "@/components/layout/StickyMobileCTA";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SocialBrand | Personal Branding Agency",
  description:
    "Thought leadership en persoonlijk merk in 90 dagen. Value-based content voor coaches, gezonde merken en vastgoed. Geen aftermovies—wel autoriteit.",
  openGraph: {
    title: "SocialBrand | Personal Branding Agency",
    description:
      "Thought leadership en persoonlijk merk in 90 dagen. Value-based content voor coaches, gezonde merken en vastgoed.",
    locale: "nl_BE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="nl">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased pb-24 md:pb-0`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
        <StickyMobileCTA />
      </body>
    </html>
  );
}
