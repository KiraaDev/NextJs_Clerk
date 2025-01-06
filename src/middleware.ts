import { clerkMiddleware } from "@clerk/nextjs/server";
import type { NextRequest, NextResponse } from "next/server";

const enhancedMiddleware = clerkMiddleware();

export default enhancedMiddleware;

export const config = {
  matcher: [
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
