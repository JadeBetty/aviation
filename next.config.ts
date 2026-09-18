import type { NextConfig } from "next";

const cloudName = process.env.CLOUDINARY_CLOUD_NAME || "**";

if (!cloudName) {
  throw new Error("missing cloudinary name in env");
}

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: cloudName,
      },
    ],
    loader: "custom",
    loaderFile: "./src/lib/cloudinary-loader.ts",
  },
  reactCompiler: true,
};

export default nextConfig;
