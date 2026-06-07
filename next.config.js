/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ai-mama-support.lovable.app',
      },
    ],
  },
}

module.exports = nextConfig
