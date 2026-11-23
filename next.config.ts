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
      { source: '/results/ezdtf-maker', destination: '/case-studies/ezdtfmaker', permanent: true },
      { source: '/results', destination: '/case-studies', permanent: true },
      { source: '/results/:slug', destination: '/case-studies', permanent: true },
      { source: '/industries', destination: '/services', permanent: true },
      { source: '/industries/:slug', destination: '/services', permanent: true },
      { source: '/contact', destination: '/book-a-call', permanent: true },
      { source: '/resources', destination: '/blog', permanent: true },
      { source: '/story', destination: '/about', permanent: true },
    ];
  },
};

export default nextConfig;
