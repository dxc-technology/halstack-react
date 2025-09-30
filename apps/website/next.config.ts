import type { NextConfig } from "next";
import type { Configuration } from "webpack";

const nextConfig: NextConfig = {
  images: {
    loader: "custom",
  },
  output: "export",
  trailingSlash: true,
  webpack: (config: Configuration): Configuration => {
    config.module = config.module || { rules: [] };
    config.module.rules?.push({
      test: /\.md$/,
      use: "raw-loader",
    });
    return config;
  },
  reactStrictMode: true,
  compiler: {
    emotion: true,
  },
  assetPrefix:
    process.env.NODE_ENV === "production"
      ? `/halstack/${process.env.NEXT_PUBLIC_SITE_VERSION?.split(".")[0]}`
      : undefined,
  basePath:
    process.env.NODE_ENV === "production"
      ? `/halstack/${process.env.NEXT_PUBLIC_SITE_VERSION?.split(".")[0]}`
      : undefined,
  transpilePackages: [
    "@cloudscape-design/components",
    "@cloudscape-design/component-toolkit",
    "@cloudscape-design/theming-runtime",
  ],
};

export default nextConfig;
