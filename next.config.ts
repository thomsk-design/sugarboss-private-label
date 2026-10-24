import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Fully static for now — no backend. Remove `output` when adding API routes.
  output: "export",
  images: { unoptimized: true },
};

export default nextConfig;
