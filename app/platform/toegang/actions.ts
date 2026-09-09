"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createPlatformAccessToken,
  isPlatformAuthConfigured,
  isValidPlatformPassword,
  PLATFORM_AUTH_COOKIE,
  PLATFORM_AUTH_MAX_AGE,
} from "@/lib/platform-auth";

function accessErrorUrl(error: "invalid" | "config") {
  return `/platform/toegang?error=${error}`;
}

export async function unlockPlatform(formData: FormData) {
  const password = formData.get("password");

  if (!isPlatformAuthConfigured()) {
    redirect(accessErrorUrl("config"));
  }

  if (typeof password !== "string" || !(await isValidPlatformPassword(password))) {
    redirect(accessErrorUrl("invalid"));
  }

  const cookieStore = await cookies();
  cookieStore.set(PLATFORM_AUTH_COOKIE, await createPlatformAccessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: PLATFORM_AUTH_MAX_AGE,
    path: "/platform",
  });

  redirect("/platform");
}
