/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "dummyimage.com",
      },
    ],
  },
};

module.exports = nextConfig;
