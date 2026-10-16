import type { NextConfig } from "next";
import { ALL_REDIRECTS } from "./lib/redirects";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  // A stray ~/node_modules on this Mac breaks root inference; pin it.
  turbopack: { root: process.cwd() },
  outputFileTracingRoot: process.cwd(),
  images: { formats: ["image/avif", "image/webp"] },
  async redirects() {
    return [
      { source: "/:path*", has: [{ type: "host", value: "monkmantra.com" }], destination: "https://www.monkmantra.com/:path*", permanent: true },
      ...ALL_REDIRECTS,
    ];
  },
  async headers() {
    return [{
      source: "/:path*",
      headers: [
        { key: "X-Content-Type-Options", value: "nosniff" },
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
      ],
    }];
  },
};
export default nextConfig;
