import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    turbo: {
      // Suprime warnings de StorageType.persistent
      rules: {
        '*.js': {
          loaders: ['swc-loader'],
        },
      },
    },
  },
  // Alternativa: usar webpack config
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
      };
    }
    return config;
  },
};

export default nextConfig;
