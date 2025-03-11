import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    unoptimized: true, // já desativa o uso do sharp para otimização de imagens
  },
  outputFileTracing: false, // desativa o rastreamento de arquivos
};

export default nextConfig;
