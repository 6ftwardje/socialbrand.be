"use client";

import React, { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "@/lib/utils";

gsap.registerPlugin(useGSAP);

interface WordLoaderProps {
  words?: string[];
  className?: string;
}

const defaultWords = [
  "Menselijk",
  "Authentiek",
  "Autoritair",
  "Strategisch",
  "Schaalbaar",
];

const WordLoader: React.FC<WordLoaderProps> = ({
  words = defaultWords,
  className,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ repeat: -1 });
      const wordDelay = 0.6;
      const wordDuration = 1.6;
      const visibleTime = 1.2;

      words.forEach((_, index) => {
        const startTime = index * (wordDuration + wordDelay);

        tl.fromTo(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: 10,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.out",
          },
          startTime
        );

        tl.to(
          `.word-${index} .char`,
          {
            opacity: 0,
            y: -5,
            duration: 0.5,
            stagger: 0.05,
            ease: "power2.in",
          },
          startTime + visibleTime
        );
      });
    },
    { scope: containerRef, dependencies: [words] }
  );

  return (
    <div
      ref={containerRef}
      className={cn("flex flex-col gap-y-6 w-full", className)}
    >
      <div className="relative h-14 sm:h-16 flex items-center justify-center min-h-[4rem]">
        {words.map((word, index) => (
          <span
            key={index}
            className={`word-${index} absolute text-2xl sm:text-3xl md:text-4xl tracking-wider font-bold flex gap-x-0.5 sm:gap-x-1`}
          >
            {word.split("").map((char, charIndex) => (
              <span key={charIndex} className="char">
                {char}
              </span>
            ))}
          </span>
        ))}
      </div>
    </div>
  );
};

export default WordLoader;
