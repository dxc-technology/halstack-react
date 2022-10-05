const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
  },
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });

    return config;
  },
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/overview/introduction",
        permanent: true,
      },
    ];
  },
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId }
  // ) {
  //   return {
  //     ...defaultPathMap,
  //     "/": { page: "/overview/introduction" },
  //   };
  // },
  // assetPrefix: isProd ? `/halstack/${process.env.SITE_VERSION}` : undefined,
  // basePath: isProd ? `/halstack/${process.env.SITE_VERSION}` : undefined,
};
