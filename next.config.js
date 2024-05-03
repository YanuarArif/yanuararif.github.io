// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   swcMinify: true,
// }

// module.exports = nextConfig

//* =============================================

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Change the output directory `out` -> `dist`
  distDir: "dist",
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
