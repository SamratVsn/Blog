import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/articles", destination: "/essays", permanent: true },
      { source: "/articles/:slug", destination: "/blog/:slug", permanent: true },
      { source: "/topics", destination: "/archive", permanent: true },
      { source: "/topics/:slug", destination: "/archive", permanent: true },
    ];
  },
};

export default nextConfig;
