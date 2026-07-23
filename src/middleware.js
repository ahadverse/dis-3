import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  if (pathname.includes("dashboard")) {
    const adminToken = request.cookies.get("adminToken");
    if (!adminToken) {
      return NextResponse.redirect(new URL("/ziacaptcha", request.url));
    }
  }

  if (pathname === "/ziacaptcha") {
    const adminToken = request.cookies.get("adminToken");
    if (adminToken) {
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/ziacaptcha"],
};
