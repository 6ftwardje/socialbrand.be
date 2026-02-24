import BrandLoader from "@/components/BrandLoader";

/**
 * Initial page load fallback: full-screen overlay with logo + progress bar.
 * Shown by Next.js until the root segment is ready; covers the whole viewport.
 */
export default function Loading() {
  return <BrandLoader progress={null} />;
}
