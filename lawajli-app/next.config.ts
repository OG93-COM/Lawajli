import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "pbs.twimg.com",
        pathname: "**"
      },
      {
        protocol: "https",
        hostname: "s3.caroom.fr",
        pathname: "**"
      },
    ],
    deviceSizes:[300,420,768,1024,1200],
    imageSizes: [8,16,32,48,64,96],
    formats:["image/webp","image/avif"],
    minimumCacheTTL:60,
  },
};

export default nextConfig;
