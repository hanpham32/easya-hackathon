/** @type {import('next').NextConfig} */
import withMDX from "@next/mdx"

const mdxConfig = withMDX({
  extension: /\.mdx?$/
});

const nextConfig = {
  images: {
    domains: ['cdn.starknet.quest', 'randomuser.me'],
  },
  pageExtensions: ['js', 'jsx', 'md', 'mdx']
};

export default { mdxConfig, nextConfig };
