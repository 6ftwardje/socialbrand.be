/**
 * URLs for above-the-fold critical assets (hero image, etc.).
 * Used for preload and by components that render them.
 */
export const HERO_IMAGE_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/podcaststudio-15.webp";

/** MP4 (H.264) – werkt in alle browsers; gebruik deze voor Chrome/Firefox/Edge. */
export const HERO_VIDEO_MP4_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/hero%20video.mp4";

/** .mov (QuickTime) – alleen Safari; fallback als MP4 niet beschikbaar is. */
export const HERO_VIDEO_URL =
  "https://trogwrgxxhsvixzglzpn.supabase.co/storage/v1/object/public/socialbrand.com/hero%20video.mov";
