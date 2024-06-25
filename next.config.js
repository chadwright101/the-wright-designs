/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    deviceSizes: [425, 800, 1400],
    imageSizes: [425, 800, 1400],
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "the-wright-designs-website-images.s3.af-south-1.amazonaws.com",
        port: "",
        pathname: "/*/**",
      },
    ],
  },
};

module.exports = nextConfig;
