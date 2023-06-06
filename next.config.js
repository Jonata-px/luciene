/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  output: 'export',
  experimental: {
    appDir: true,
  },
  distDir: 'out',
}

module.exports = nextConfig
