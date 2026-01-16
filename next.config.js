/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
};

module.exports = {
  async headers() {
    return [
      {
        source: "/api/:path*",
        headers: [
          { key: "Access-Control-Allow-Origin", value: "*" },
          { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS" },
        ],
      },
    ]
  },
  images: {
        remotePatterns: [
          
          {
            protocol: "https",
            hostname: "planmylux.s3.eu-west-2.amazonaws.com",
            pathname: "/**",
          },
          {
            protocol: "https",
            hostname: "planmyluxe.s3.eu-west-2.amazonaws.com",
            pathname: "/**",
          },
          
        ],
      },
};
