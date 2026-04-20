import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Vercel Specific Optimizations */
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.vercel.app',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
  // Vercel handles compression automatically, so we can disable it here if desired
  compress: true,
};

export default nextConfig;
