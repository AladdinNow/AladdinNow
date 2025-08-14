import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    // Ensure ESLint runs during build
    ignoreDuringBuilds: false,
  },
  typescript: {
    // Ensure TypeScript checking runs during build
    ignoreBuildErrors: false,
  },
};

export default nextConfig;
