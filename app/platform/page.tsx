import type { Metadata } from "next";
import PlatformPage from "@/components/platform/PlatformPage";

export const metadata: Metadata = {
  title: "Custom leerplatform | Office6",
  description:
    "Van expertise naar een custom leerplatform: strategie, videocourse, development, lancering en onderhoud onder één dak.",
};

export default function Page() {
  return <PlatformPage />;
}
