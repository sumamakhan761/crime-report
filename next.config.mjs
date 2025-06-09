/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['res.cloudinary.com'],
  },
  // Disable static optimization for pages that use client-side only features
  reactStrictMode: true,
};

export default nextConfig;
