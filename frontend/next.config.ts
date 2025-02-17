import type { NextConfig } from "next";
import withPWA from "next-pwa";

const nextConfig: NextConfig = withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
});

export default nextConfig;


