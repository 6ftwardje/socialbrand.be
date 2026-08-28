import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  isValidProposalAccessToken,
  PROPOSAL_AUTH_COOKIE,
} from "@/lib/proposal-auth";

const PUBLIC_PROPOSAL_ROUTES = new Set([
  "/voorstel/toegang",
  "/voorstel/uitloggen",
]);

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (PUBLIC_PROPOSAL_ROUTES.has(pathname)) {
    return NextResponse.next();
  }

  const token = request.cookies.get(PROPOSAL_AUTH_COOKIE)?.value;
  if (await isValidProposalAccessToken(token)) {
    const response = NextResponse.next();
    response.headers.set("Cache-Control", "private, no-store");
    response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
    return response;
  }

  const loginUrl = new URL("/voorstel/toegang", request.url);
  loginUrl.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: "/voorstel/:path*",
};

