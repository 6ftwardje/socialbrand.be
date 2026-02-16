"use client";

import Image from "next/image";
import WordLoader from "@/components/WordLoader";
import LeadCapture from "@/components/LeadCapture";

const LOGO_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/HTP/socialbrand%20png.png";

export default function HomePage() {
  return (
    <div
      className="dark min-h-screen flex flex-col items-center justify-center px-4 py-12 sm:py-16 text-white"
      style={{
        background:
          "linear-gradient(to bottom, #000000 0%, #050101 50%, #0f0303 85%, #1f0808 100%)",
      }}
    >
      <main className="w-full max-w-lg flex flex-col items-center gap-12 sm:gap-16">
        <header className="text-center">
          <Image
            src={LOGO_URL}
            alt="SocialBrand"
            width={200}
            height={80}
            className="mx-auto mb-8 sm:mb-10 h-auto w-40 sm:w-48"
            priority
          />
          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-8 sm:mb-10">
            Wij maken je merk
          </h1>
          <WordLoader />
        </header>

        <LeadCapture />
      </main>
    </div>
  );
}
