/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {

    domains: ['eliteblue.net'], 
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'morecouponcode.com',
        port: '',
        pathname: '/**',
      },
    ],
  }
}

module.exports = nextConfig
