/** @type {import('next').NextConfig} */
const nextConfig = {
  // Static export for Strato Webhosting
  output: 'export',

  // Disable server features for static export
  images: {
    unoptimized: true,
  },

  // Trailing slash for better compatibility
  trailingSlash: true,
};

module.exports = nextConfig;
