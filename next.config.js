/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path')

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/styles')],
  },
  experimental: {
    optimizePackageImports: ['@mui/icons-material'],
  },
}

module.exports = nextConfig
