import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.protocolcamp.com",
      },
    ],
  },
};

export default nextConfig;
