/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = {
  output: 'standalone',
  crossOrigin: 'anonymous',
  nextConfig,
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.tmdb.org',
      },
    ],
  },
}
