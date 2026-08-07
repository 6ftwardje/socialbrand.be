import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "trogwrgxxhsvixzglzpn.supabase.co",
        pathname: "/storage/v1/object/public/**",
      },
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "huppapitch-production.up.railway.app",
        pathname: "/huppa-logo-white.png",
      },
    ],
  },
};

export default nextConfig;
