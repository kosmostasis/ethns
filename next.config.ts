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
    ],
  },
};

export default nextConfig;
