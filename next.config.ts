import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  serverExternalPackages: ['sanity', 'next-sanity'],
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  },
  async redirects() {
    return [
      { source: '/results', destination: '/case-studies', permanent: true },
      { source: '/results/:slug*', destination: '/case-studies', permanent: true },
      { source: '/industries', destination: '/services', permanent: true },
      { source: '/industries/:slug*', destination: '/services', permanent: true },
    ];
  },
};

export default nextConfig;
