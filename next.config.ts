import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.jobhelper.co.za',
      },
      {
        protocol: 'https',
        hostname: '*.vercel.app',
      },
    ],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
};

export default nextConfig;