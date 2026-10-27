import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // Invalid src prop (https://ecommerce.routemisr.com/Route-Academy-products/1680403397402-cover.jpeg) o
  images: {
    qualities: [10, 30, 60, 75, 100],

    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        port: "",
        pathname: "/**",
        search: "",
      },
    ],
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
