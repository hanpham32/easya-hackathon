/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // domains: ['cdn.starknet.quest', 'randomuser.me'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.starknet.quest',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'randomuser.me',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;
