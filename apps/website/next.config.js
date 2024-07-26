/** @type {import('next').NextConfig} */
module.exports = {
  images: {
    loader: "custom",
  },
  output: "export",
  trailingSlash: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  reactStrictMode: true,
  assetPrefix: process.env.NODE_ENV === "production" ? `/halstack/${process.env.NEXT_PUBLIC_SITE_VERSION}` : undefined,
  basePath: process.env.NODE_ENV === "production" ? `/halstack/${process.env.NEXT_PUBLIC_SITE_VERSION}` : undefined,
  transpilePackages: [
    "@cloudscape-design/components",
    "@cloudscape-design/component-toolkit",
  ],
};
