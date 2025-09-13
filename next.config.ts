import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV !== "production";

const csp = [
  "default-src 'self'",
  "script-src 'self' https://challenges.cloudflare.com" + (isDev ? " 'unsafe-eval' 'wasm-unsafe-eval'" : " 'wasm-unsafe-eval'"),
  "frame-src https://challenges.cloudflare.com",
  "connect-src 'self' https://challenges.cloudflare.com",
  "style-src 'self' 'unsafe-inline'",
  "img-src 'self' data:",
  "form-action 'self'",
  "base-uri 'self'",
].join("; ");

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "Content-Security-Policy", value: csp }],
      },
    ];
  },
};

export default nextConfig;
