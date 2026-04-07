import type { NextConfig } from "next";

const nextConfig: NextConfig = {
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
};

export default nextConfig;
