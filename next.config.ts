import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/landing-pages',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
