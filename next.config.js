/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    formats: ['image/webp'],
  },
  devIndicators: {
    autoPrerender: false,
  },
};

module.exports = nextConfig;
