// next.config.ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",            // <-- enables static export (`out/`)
  images: {
    unoptimized: true,         // <-- required for export when using remote images
    remotePatterns: [
      {
        protocol: "https",
        hostname: "upload.wikimedia.org",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;