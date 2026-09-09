import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  isPlatformAuthConfigured,
  isValidPlatformAccessToken,
  PLATFORM_AUTH_COOKIE,
} from "@/lib/platform-auth";
import PlatformAccessClient from "./PlatformAccessClient";

export const metadata: Metadata = {
  title: "Private platform preview | Office6",
  description: "Vraag toegang tot de Office6-preview voor custom leerplatformen, videocourses en go-to-market.",
};

type PlatformAccessPageProps = {
  searchParams: Promise<{ error?: string }>;
};

export default async function PlatformAccessPage({ searchParams }: PlatformAccessPageProps) {
  const params = await searchParams;
  const token = (await cookies()).get(PLATFORM_AUTH_COOKIE)?.value;

  if (await isValidPlatformAccessToken(token)) {
    redirect("/platform");
  }

  return (
    <PlatformAccessClient
      configurationMissing={params.error === "config" || !isPlatformAuthConfigured()}
      invalidPassword={params.error === "invalid"}
    />
  );
}
