import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  serverExternalPackages: ["@anthropic-ai/sdk"],
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
