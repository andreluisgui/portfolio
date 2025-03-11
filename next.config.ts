import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // já desativa o uso do sharp para otimização de imagens
  },
};

export default nextConfig;
