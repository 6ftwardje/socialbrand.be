"use client";

import WordLoader from "@/components/WordLoader";
import LeadCapture from "@/components/LeadCapture";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 px-4 py-12 sm:py-16">
      <main className="w-full max-w-lg flex flex-col items-center gap-12 sm:gap-16">
        <header className="text-center">
          <p className="text-sm sm:text-base uppercase tracking-widest text-zinc-500 dark:text-zinc-400 mb-2">
            SocialBrand
          </p>
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
