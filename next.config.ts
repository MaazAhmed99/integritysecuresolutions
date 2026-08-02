import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // There is an unrelated lockfile in the parent folder — pin the root
  // so Next does not infer the wrong workspace.
  outputFileTracingRoot: __dirname,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com", pathname: "/**" },
    ],
    formats: ["image/avif", "image/webp"],
  },
  async redirects() {
    return [
      {
        // Key holding and alarm response were split into two services.
        source: "/services/key-holding-alarm-response",
        destination: "/services/key-holding",
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
        ],
      },
    ];
  },
};

export default nextConfig;
