"use client";

import MuxPlayer from "@mux/mux-player-react";
import type MuxPlayerElement from "@mux/mux-player";
import { Volume2, VolumeX } from "lucide-react";
import { useRef, useState } from "react";

interface FeaturedMuxVideoProps {
  playbackId: string;
  title: string;
  showAudioToggle?: boolean;
}

export default function FeaturedMuxVideo({
  playbackId,
  title,
  showAudioToggle = false,
}: FeaturedMuxVideoProps) {
  const playerRef = useRef<MuxPlayerElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleAudio = () => {
    const nextMuted = !muted;
    setMuted(nextMuted);

    if (playerRef.current) {
      playerRef.current.muted = nextMuted;
      if (!nextMuted) {
        playerRef.current.play().catch(() => undefined);
      }
    }
  };

  return (
    <div className="relative mx-5 mt-5 aspect-[4/5] min-h-[22rem] w-auto overflow-hidden rounded-lg bg-black md:mx-6 md:min-h-[28rem] lg:m-0 lg:aspect-[4/3] lg:min-h-0 lg:w-full lg:rounded-none">
      <MuxPlayer
        ref={playerRef}
        playbackId={playbackId}
        metadataVideoTitle={title}
        accentColor="#dc1326"
        disableTracking
        autoPlay="muted"
        muted={muted}
        loop
        playsInline
        nohotkeys
        className="absolute inset-0 h-full w-full"
        style={{
          "--controls": "none",
          "--dialog": "none",
          "--loading-indicator": "none",
          "--media-object-fit": "cover",
          "--media-object-position": "center",
        }}
      />

      {showAudioToggle ? (
        <button
          type="button"
          onClick={toggleAudio}
          className="absolute bottom-4 right-4 z-10 inline-flex min-h-10 items-center gap-2 rounded-full border border-white/20 bg-black/50 px-4 text-xs font-bold text-white shadow-[0_10px_30px_rgba(0,0,0,0.24)] backdrop-blur-md transition-colors hover:bg-black/65 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
          aria-pressed={!muted}
          aria-label={muted ? "Geluid aanzetten" : "Geluid dempen"}
        >
          {muted ? (
            <VolumeX className="h-4 w-4" aria-hidden />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden />
          )}
          <span>{muted ? "Geluid aan" : "Dempen"}</span>
        </button>
      ) : null}
    </div>
  );
}
