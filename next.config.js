/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["ui"],
  images: {
    remotePatterns: [
      {
      protocol: 'https',
      hostname: 'raw.githubusercontent.com',
      }
    ]
  },
  experimental: {
    serverComponentsExternalPackages: ['@libsql/client'],
  },
 
};

module.exports = nextConfig;
