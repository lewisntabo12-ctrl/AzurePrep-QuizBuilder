/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  experimental: {
    serverComponentsExternalPackages: ['@anthropic-ai/sdk'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      config.externals = config.externals || [];
      config.externals.push({
        '@anthropic-ai/sdk': 'commonjs @anthropic-ai/sdk',
      });
    }
    return config;
  },
};

module.exports = nextConfig;
