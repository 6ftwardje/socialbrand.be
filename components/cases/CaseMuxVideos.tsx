import type { OfficeMuxVideo } from "@/lib/office-cases";

function getMuxPlayerUrl(video: OfficeMuxVideo) {
  const params = new URLSearchParams({
    "metadata-video-title": video.title,
  });

  return `https://player.mux.com/${video.playbackId}?${params.toString()}`;
}

function aspectClass(aspectRatio: OfficeMuxVideo["aspectRatio"]) {
  switch (aspectRatio) {
    case "9:16":
      return "aspect-[9/16]";
    case "4:3":
      return "aspect-[4/3]";
    case "16:9":
    default:
      return "aspect-video";
  }
}

function VideoFrame({ video }: { video: OfficeMuxVideo }) {
  return (
    <div className={`relative overflow-hidden bg-zinc-950 ${aspectClass(video.aspectRatio)}`}>
      <iframe
        src={getMuxPlayerUrl(video)}
        title={video.title}
        className="absolute inset-0 h-full w-full"
        allow="accelerometer; gyroscope; autoplay; encrypted-media; picture-in-picture;"
        allowFullScreen
      />
    </div>
  );
}

function HorizontalVideo({ video }: { video: OfficeMuxVideo }) {
  return (
    <article>
      <VideoFrame video={video} />
      <p className="mt-3 text-sm font-semibold text-white">{video.title}</p>
      <p className="mt-1 text-xs text-zinc-500">{video.aspectRatio} video</p>
    </article>
  );
}

function VerticalVideo({ video }: { video: OfficeMuxVideo }) {
  return (
    <article className="w-full max-w-[19rem]">
      <VideoFrame video={video} />
      <p className="mt-3 text-sm font-semibold text-white">{video.title}</p>
      <p className="mt-1 text-xs text-zinc-500">Vertical reel</p>
    </article>
  );
}

export default function CaseMuxVideos({ videos }: { videos: OfficeMuxVideo[] }) {
  const horizontalVideos = videos.filter((video) => video.format !== "vertical");
  const verticalVideos = videos.filter((video) => video.format === "vertical");

  return (
    <section
      className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8"
      aria-labelledby="case-videos-title"
    >
      <div className="mb-8 border-t border-zinc-900 pt-8 md:mb-10">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
          Media
        </p>
        <h2
          id="case-videos-title"
          className="mt-3 text-2xl font-semibold leading-none tracking-tight text-white md:text-3xl"
        >
          Video assets
        </h2>
      </div>

      <div className="space-y-14 md:space-y-20">
        {horizontalVideos.length > 0 && (
          <div
            className={
              horizontalVideos.length === 1
                ? "max-w-4xl"
                : "grid gap-6 md:grid-cols-2"
            }
          >
            {horizontalVideos.map((video) => (
              <HorizontalVideo key={video.playbackId} video={video} />
            ))}
          </div>
        )}

        {verticalVideos.length > 0 && (
          <div>
            {horizontalVideos.length > 0 && (
              <p className="mb-5 text-xs font-semibold uppercase tracking-[0.18em] text-zinc-500">
                Vertical edits
              </p>
            )}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {verticalVideos.map((video) => (
                <VerticalVideo key={video.playbackId} video={video} />
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
