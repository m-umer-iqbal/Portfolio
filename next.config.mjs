/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  images: {
    remotePatterns: [
    ],
  },
  eslint: {
    // Lint errors in other files won't fail the production build
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;