import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/SOANCC',
  assetPrefix: '/SOANCC/',
};

export default nextConfig;
