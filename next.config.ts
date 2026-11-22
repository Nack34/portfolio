import type { NextConfig } from "next";

// Fully static: deploys to Vercel, Netlify or GitHub Pages (set BASE_PATH=/repo-name for Pages).
const config: NextConfig = {
  output: "export",
  basePath: process.env.BASE_PATH || undefined,
  images: { unoptimized: true },
};
export default config;
