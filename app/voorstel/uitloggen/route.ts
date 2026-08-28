import { NextResponse } from "next/server";
import { PROPOSAL_AUTH_COOKIE } from "@/lib/proposal-auth";

export function GET(request: Request) {
  const response = NextResponse.redirect(new URL("/voorstel/toegang", request.url));
  response.cookies.set(PROPOSAL_AUTH_COOKIE, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 0,
    path: "/voorstel",
  });
  return response;
}

