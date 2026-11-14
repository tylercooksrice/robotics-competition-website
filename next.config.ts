import type { NextConfig } from "next";
const isProd = process.env.NODE_ENV === "production";
const repo = "robotics-competition-website";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: false,
  partialPrefetching: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  /* for github page deployment view*/
  output: "export",
  images: {
    unoptimized: true,
  },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  env: { NEXT_PUBLIC_BASE_PATH: isProd ? `/${repo}` : "" },
};

export default nextConfig;
