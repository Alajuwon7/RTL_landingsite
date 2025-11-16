import path from "path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    turbopack: {
      root: path.resolve(__dirname),
    },
  },
};

export default nextConfig;
