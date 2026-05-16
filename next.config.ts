import type { NextConfig } from "next";

const CHAT_APP_URL = 'https://hello-world-alpha-ivory.vercel.app';

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/projects/chat',
        destination: `${CHAT_APP_URL}/projects/chat`,
      },
      {
        source: '/projects/chat/:path*',
        destination: `${CHAT_APP_URL}/projects/chat/:path*`,
      },
    ];
  },
};

export default nextConfig;
