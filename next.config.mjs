/** @type {import('next').NextConfig} */
const nextConfig = {
  trailingSlash: true,
  images: {
    remotePatterns: [
      new URL("https://kurino096.shop/**"),
      new URL("https://images.microcms-assets.io/**")
    ],
  },
};

export default nextConfig;
