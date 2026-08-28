"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import {
  createProposalAccessToken,
  isProposalAuthConfigured,
  isValidProposalPassword,
  PROPOSAL_AUTH_COOKIE,
  PROPOSAL_AUTH_MAX_AGE,
} from "@/lib/proposal-auth";

const DEFAULT_PROPOSAL_PATH = "/voorstel/huppa";

function safeProposalPath(value: FormDataEntryValue | null) {
  if (typeof value !== "string") return DEFAULT_PROPOSAL_PATH;
  if (!value.startsWith("/voorstel/") || value.startsWith("/voorstel/toegang")) {
    return DEFAULT_PROPOSAL_PATH;
  }
  return value;
}

function loginErrorUrl(error: "invalid" | "config", nextPath: string) {
  const params = new URLSearchParams({ error, next: nextPath });
  return `/voorstel/toegang?${params.toString()}`;
}

export async function unlockProposals(formData: FormData) {
  const password = formData.get("password");
  const nextPath = safeProposalPath(formData.get("next"));

  if (!isProposalAuthConfigured()) {
    redirect(loginErrorUrl("config", nextPath));
  }

  if (typeof password !== "string" || !(await isValidProposalPassword(password))) {
    redirect(loginErrorUrl("invalid", nextPath));
  }

  const cookieStore = await cookies();
  cookieStore.set(PROPOSAL_AUTH_COOKIE, await createProposalAccessToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: PROPOSAL_AUTH_MAX_AGE,
    path: "/voorstel",
  });

  redirect(nextPath);
}

export async function lockProposals() {
  const cookieStore = await cookies();
  cookieStore.delete(PROPOSAL_AUTH_COOKIE);
  redirect("/voorstel/toegang");
}

