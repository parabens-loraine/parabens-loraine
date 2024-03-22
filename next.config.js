/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  output: 'standalone',
  experimental: {
    optimizePackageImports: ['@mui/icons-material'],
  },
}

module.exports = nextConfig
