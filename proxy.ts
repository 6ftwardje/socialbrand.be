import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  isValidProposalAccessToken,
  PROPOSAL_AUTH_COOKIE,
} from "@/lib/proposal-auth";
import {
  isValidPlatformAccessToken,
  PLATFORM_AUTH_COOKIE,
} from "@/lib/platform-auth";

const PUBLIC_PROPOSAL_ROUTES = new Set([
  "/voorstel/toegang",
  "/voorstel/uitloggen",
]);

const PUBLIC_PLATFORM_ROUTES = new Set([
  "/platform/toegang",
]);

function protectedResponse() {
  const response = NextResponse.next();
  response.headers.set("Cache-Control", "private, no-store");
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

export async function proxy(request: NextRequest) {
  const { pathname, search } = request.nextUrl;

  if (pathname.startsWith("/platform")) {
    if (PUBLIC_PLATFORM_ROUTES.has(pathname)) {
      return NextResponse.next();
    }

    const token = request.cookies.get(PLATFORM_AUTH_COOKIE)?.value;
    if (await isValidPlatformAccessToken(token)) {
      return protectedResponse();
    }

    return NextResponse.redirect(new URL("/platform/toegang", request.url));
  }

  if (PUBLIC_PROPOSAL_ROUTES.has(pathname)) return NextResponse.next();

  const token = request.cookies.get(PROPOSAL_AUTH_COOKIE)?.value;
  if (await isValidProposalAccessToken(token)) {
    return protectedResponse();
  }

  const loginUrl = new URL("/voorstel/toegang", request.url);
  loginUrl.searchParams.set("next", `${pathname}${search}`);
  return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ["/voorstel/:path*", "/platform/:path*"],
};
