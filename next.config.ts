import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cbolivarstorageprod.blob.core.windows.net",
      },
    ],
  },
};

export default nextConfig;
