import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [],
  },
  serverExternalPackages: ["@anthropic-ai/sdk"],
};

export default nextConfig;
