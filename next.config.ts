import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placedog.net",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
