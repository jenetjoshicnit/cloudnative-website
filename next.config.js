/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  webpack: (config) => {
    config.optimization.minimize = false;
    return config;
  },
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL,
    NEXT_PUBLIC_SITE_URL: process.env.NEXT_PUBLIC_SITE_URL,
  },
  images: {
    // domains: ['localhost', 'localhost:1337'],
    // domains: ['localhost'],
    domains: ['admin.cnit-solutions.com'],
  },
  // distDir: 'dist_build',
}

module.exports = nextConfig
