import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function proxy(request: NextRequest) {
  const token = await getToken({ req: request });
  const { pathname } = request.nextUrl;
  const isAuthPage = pathname === "/login" || pathname === "/register";
  if (token && isAuthPage) {
    const origin = process.env.NEXTAUTH_URL || request.nextUrl.origin;
    return NextResponse.redirect(new URL("/", origin));
  }
  if (!token && !isAuthPage) {
    return NextResponse.redirect(new URL(`/login`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/login", "/register", "/cart", "/checkout"],
};
