import type { Metadata } from "next";
import { Geist, Geist_Mono, DM_Serif_Display } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import RouteLoader from "@/components/RouteLoader";
import { CriticalAssetsProvider } from "@/components/CriticalAssetsProvider";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const dmSerifDisplay = DM_Serif_Display({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-display",
});

export const metadata: Metadata = {
  title: "Office6 | Content Agency",
  description:
    "Content creation, performance marketing en custom platforms voor merken die menselijker willen communiceren en meetbaar willen groeien.",
  icons: {
    icon: "/logos/office6-black.png",
  },
  openGraph: {
    title: "Office6 | Content Agency",
    description:
      "Content creation, performance marketing en custom platforms voor merken die menselijker willen communiceren en meetbaar willen groeien.",
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
        className={`${geistSans.variable} ${geistMono.variable} ${dmSerifDisplay.variable} min-h-screen bg-[var(--background)] text-[var(--foreground)] antialiased`}
      >
        <RouteLoader />
        <Navbar />
        <CriticalAssetsProvider>
          <main>{children}</main>
        </CriticalAssetsProvider>
        <Footer />
      </body>
    </html>
  );
}
