import { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // serverActions bisa dikosongkan jika tidak pakai fitur ini
    // serverActions: { bodySizeLimit: "4mb" }, // contoh opsional
  },
};

export default nextConfig;
