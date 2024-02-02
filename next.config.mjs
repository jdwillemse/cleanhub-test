/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname:
          "cleanhub-marketplace-pictures-demo.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/**",
      },
    ],
    formats: ["image/avif", "image/webp"],
  },
  swcMinify: true,
};

export default nextConfig;
