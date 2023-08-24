/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = {
  images: {
    deviceSizes: [425, 900, 1400],
    imageSizes: [200, 250, 300, 400, 500, 750, 850, 1000, 1100, 1250, 1400],
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
