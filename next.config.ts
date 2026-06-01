import type { NextConfig } from "next";

const CHAT_APP_URL = 'https://hello-world-alpha-ivory.vercel.app';
const CRUX_APP_URL = 'https://crux-ai-six.vercel.app';

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
      {
        source: '/projects/crux',
        destination: `${CRUX_APP_URL}`,
      },
      {
        source: '/projects/crux/:path*',
        destination: `${CRUX_APP_URL}/:path*`,
      },
    ];
  },
};

export default nextConfig;
