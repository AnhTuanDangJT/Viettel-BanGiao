import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  assetPrefix: process.env.NEXT_PUBLIC_CDN_URL || undefined,
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1920],
    imageSizes: [240, 260, 300],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    remotePatterns: [
      { protocol: "https", hostname: "placehold.co", pathname: "/**" },
      { protocol: "https", hostname: "cdn.viettelstore.vn", pathname: "/**" },
    ],
  },
};

export default nextConfig;
