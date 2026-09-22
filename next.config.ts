import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      { source: "/articles", destination: "/essays", permanent: false },
      { source: "/articles/:slug", destination: "/blog/:slug", permanent: false },
      { source: "/topics", destination: "/archive", permanent: false },
      { source: "/topics/:slug", destination: "/archive", permanent: false },
    ];
  },
};

export default nextConfig;
