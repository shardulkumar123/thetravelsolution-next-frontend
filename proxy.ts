import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const { method, headers } = request;

  // Protect against CSRF attacks on state-modifying methods for API endpoints
  if (["POST", "PUT", "DELETE", "PATCH"].includes(method)) {
    const origin = headers.get("origin");
    const referer = headers.get("referer");
    const host = headers.get("host");

    if (origin) {
      try {
        const originUrl = new URL(origin);
        if (host && originUrl.host !== host) {
          return new NextResponse(
            JSON.stringify({ error: "CSRF protection: Unauthorized origin" }),
            { status: 403, headers: { "Content-Type": "application/json" } }
          );
        }
      } catch {
        return new NextResponse(
          JSON.stringify({ error: "CSRF protection: Invalid origin format" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    } else if (referer) {
      try {
        const refererUrl = new URL(referer);
        if (host && refererUrl.host !== host) {
          return new NextResponse(
            JSON.stringify({ error: "CSRF protection: Unauthorized referer" }),
            { status: 403, headers: { "Content-Type": "application/json" } }
          );
        }
      } catch {
        return new NextResponse(
          JSON.stringify({ error: "CSRF protection: Invalid referer format" }),
          { status: 400, headers: { "Content-Type": "application/json" } }
        );
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/api/:path*",
};
