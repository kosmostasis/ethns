import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ethereum.org",
      },
      {
        protocol: "https",
        hostname: "ns.com",
      },
      {
        protocol: "https",
        hostname: "assets.ns.com",
      },
    ],
  },
};

export default nextConfig;
